package com.kingdomizer.service;

import com.kingdomizer.entity.CardType;
import com.kingdomizer.entity.Resource;
import com.kingdomizer.entity.ResourceCategory;
import com.kingdomizer.entity.Expansion;
import com.kingdomizer.repository.ResourceRepository;
import com.kingdomizer.filter.KingdomFilter;
import com.kingdomizer.filter.CardTypeExclusions;
import com.kingdomizer.filter.CardFeatureFilters;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.Collections;
import java.util.Comparator;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.function.Predicate;

/**
 * Service responsible for filtering Dominion resources based on various criteria.
 * This service handles the filtering logic for both kingdom cards and landscape cards,
 * ensuring that only valid combinations are returned.
 */
@Service
public class FilterService {
    private final ResourceRepository resourceRepository;

    public FilterService(ResourceRepository resourceRepository) {
        this.resourceRepository = resourceRepository;
    }



    /** +++++++++++*******   PUBLIC METHODS    +++++++++++++++++++++++++++++++++++++++ */
    
    /**
     * Generates a random set of 10 kingdom cards based on the provided filter criteria.
     * This method gets all potential kingdom cards that match the filter criteria,
     * applies the mandatory feature requirements, and selects 10 cards.
     *
     * @param filter The filter object containing all filtering criteria
     * @return List of 10 selected kingdom card IDs, sorted by expansion, cost, then name
     */
    public List<Long> generateKingdomCards(KingdomFilter filter) {
        // Get all kingdom cards after applying exclusion filters
        List<Resource> availableKingdomCards = getPotentialResources(filter).stream()
            .filter(resource -> ResourceCategory.CARD.equals(resource.getResourceCategory()))
            .collect(Collectors.toList());
        
        // Create a List to hold the selected cards after applying mandatory filters
        List<Resource> selectedCards = filterMandatoryResources(availableKingdomCards, filter);
        
        // Sort the selected cards by expansion, cost, and name
        return selectedCards.stream()
            .sorted(Comparator
                .comparing(Resource::getExpansion, Comparator.nullsLast(Comparator.naturalOrder()))
                .thenComparing(Resource::getCost, Comparator.nullsLast(Comparator.naturalOrder()))
                .thenComparing(Resource::getName, Comparator.nullsLast(Comparator.naturalOrder())))
            .map(Resource::getId)
            .collect(Collectors.toList());
    }
    
    /**
     * Gets all potential landscape cards based on the provided filter criteria.
     * Filters the combined resource list to only include landscape cards.
     *
     * @param filter The filter object containing all filtering criteria
     * @return Complete list of potential landscape card resources matching the filter criteria
     */
    public List<Long> generateLandscapeCards(KingdomFilter filter) {
        List<Resource> availableLandscapeCards = getPotentialResources(filter).stream()
            .filter(resource -> 
                Boolean.TRUE.equals(resource.getHasLandscapeOrientation()) && 
                !ResourceCategory.GAMEPART.equals(resource.getResourceCategory()))
            .collect(Collectors.toList());
            
        Collections.shuffle(availableLandscapeCards);

        return availableLandscapeCards.stream()
            .limit(filter.getLandscapeCount())
            .sorted(Comparator
                .comparing(Resource::getResourceCategory, Comparator.nullsLast(Comparator.naturalOrder()))
                .thenComparing(Resource::getCost, Comparator.nullsLast(Comparator.naturalOrder()))
                .thenComparing(Resource::getName, Comparator.nullsLast(Comparator.naturalOrder())))
            .map(Resource::getId)
            .collect(Collectors.toList());

    }
    
    

    /** +++++++++++*******   PRIVATE METHODS    +++++++++++++++++++++++++++++++++++++++ //

    /**
     * Gets all potential resources (both kingdom cards and landscape cards) based on the provided filter criteria.
     * This is the main method that fetches all resources at once to reduce database calls.
     *
     * @param filter The filter object containing all filtering criteria
     * @return Complete list of filtered resources from the selected expansions
     */
    private List<Resource> getPotentialResources(KingdomFilter filter) {
        List<Expansion> selectedExpansions = extractSelectedExpansions(filter.getExpansions());
        List<Resource> allPotentialResources = resourceRepository.findByExpansionIn(selectedExpansions);
        return filterUnwantedResources(allPotentialResources, filter);
    }
    
    /**
     * Extracts selected expansions from a map of expansion states.
     * Only includes expansions that are marked as true in the input map.
     *
     * @param expansionStates Map of expansion names to their selection state
     * @return List of selected Expansion enums
     */
    private List<Expansion> extractSelectedExpansions(Map<String, Boolean> expansionStates) {
        return expansionStates.entrySet().stream()
        .filter(Map.Entry::getValue)
        .map(entry -> Expansion.valueOf(entry.getKey().toUpperCase()))
        .collect(Collectors.toList());
    }

    /**
     * Filters out resources based on the user's exclusion criteria.
     * Resources that match any of the exclusion criteria are removed from the list.
     *
     * @param resources The list of resources to filter
     * @param filter The filter object containing exclusion criteria
     * @return A list of resources that do not match any of the exclusion criteria
     */
    private List<Resource> filterUnwantedResources(List<Resource> resources, KingdomFilter filter) {
        final long ID_LOOT = 40041L; // Kostbarkeiten
        final Set<Long> TOKEN_IDS = Set.of(20019L, 31009L, 21011L);             // 20019L: Punktemarker, 31009L: Embargomarker, 21011L: Geldmarker
        final Set<Long> MAT_IDS = Set.of(30019L, 30020L, 21010L, 31010L);    // 30019L: Island, 30020L: Native Village, 21010L Trade Route, 31010L Pirate Ship
        
        // Get the CardTypeExclusions object from the filter
        CardTypeExclusions exclusions = filter.getExclusions();
        if (exclusions == null || !exclusions.hasActiveExclusions()) {
            return resources; // No active exclusions to apply
        }
        
        // Get the list of active exclusions
        List<String> activeExclusions = exclusions.getActiveExclusions();
        
        return resources.stream()
        .filter(resource -> {
            // For each active exclusion, check if the resource should be excluded
            for (String exclusion : activeExclusions) {
                switch (exclusion) {
                    case "curses":
                    if ((resource.getCardProperties() != null && Boolean.TRUE.equals(resource.getCardProperties().getHasCurse()))
                    || (resource.getCardTypes() != null && resource.getCardTypes().contains(CardType.CURSE))) {
                        return false; // Exclude this resource
                    }
                    break;
                    
                    case "tokens":
                    if ((resource.getDependencies() != null && resource.getDependencies().stream().anyMatch(TOKEN_IDS::contains))
                    || TOKEN_IDS.contains(resource.getId())) {
                        return false;
                    }
                    break;
                    
                    case "tableaus":
                    if ((resource.getDependencies() != null && resource.getDependencies().stream().anyMatch(MAT_IDS::contains))
                    || MAT_IDS.contains(resource.getId())) {
                        return false;
                    }
                    break;
                    
                    case "treasures":
                    if ((resource.getDependencies() != null && resource.getDependencies().contains(ID_LOOT))
                    || resource.getId() == ID_LOOT) {
                        return false;
                    }
                    break;
                    
                    case "events":
                    if (ResourceCategory.EVENT.equals(resource.getResourceCategory())) {
                        return false;
                    }
                    break;
                    
                    case "traits":
                    if (ResourceCategory.TRAIT.equals(resource.getResourceCategory())) {
                        return false;
                    }
                    break;
                }
            }
            
            // If we got here, the resource passed all exclusion checks
            return true;
        })
        .collect(Collectors.toList());
    }

    /**
     * Applies mandatory inclusion filters to a list of resources.
     * (Placeholder for future implementation)
     * @param resources The list of resources after exclusion filtering.
     * @param filter The filter criteria provided by the user.
     * @return A filtered list of resources meeting mandatory requirements.
     */
    private List<Resource> filterMandatoryResources(List<Resource> availableCards, KingdomFilter filter) {
        List<Resource> selectedCards = new ArrayList<>();
        
        // Step 1: Handle "at least one card" feature requirements from cardFeatures
        if (filter.getCardFeatures() != null) {
            CardFeatureFilters features = filter.getCardFeatures();
            
            // Select a card with multiple actions if required
            if (features.isHasMultipleActions()) {
                Resource card = findAndRemoveCard(availableCards, 
                r -> r.getCardProperties() != null && 
                Boolean.TRUE.equals(r.getCardProperties().getHasPlusMultipleActions()));
                
                if (card == null) {
                    // No card with multiple actions found, can't fulfill requirements
                    return Collections.emptyList();
                }
                selectedCards.add(card);
            }
            
            // Select a card with multiple draws if required
            if (features.isHasMultipleCards()) {
                Resource card = findAndRemoveCard(availableCards, 
                r -> r.getCardProperties() != null && 
                Boolean.TRUE.equals(r.getCardProperties().getHasPlusMultipleDraws()));
                
                if (card == null) {
                    // No card with multiple draws found, can't fulfill requirements
                    return Collections.emptyList();
                }
                selectedCards.add(card);
            }
            
            // Select a card with +Buy if required
            if (features.isHasBuy()) {
                Resource card = findAndRemoveCard(availableCards, 
                r -> r.getCardProperties() != null && 
                Boolean.TRUE.equals(r.getCardProperties().getHasPlusBuy()));
                
                if (card == null) {
                    // No card with +Buy found, can't fulfill requirements
                    return Collections.emptyList();
                }
                selectedCards.add(card);
            }
            
            // Select a Reaction card if required
            if (features.isHasReaction()) {
                Resource card = findAndRemoveCard(availableCards, 
                r -> r.getCardTypes() != null && 
                r.getCardTypes().contains(CardType.REACTION));
                
                if (card == null) {
                    // No Reaction card found, can't fulfill requirements
                    return Collections.emptyList();
                }
                selectedCards.add(card);
            }
            
            // Select a card with Trash if required
            if (features.isHasTrash()) {
                Resource card = findAndRemoveCard(availableCards, 
                r -> r.getCardProperties() != null && 
                Boolean.TRUE.equals(r.getCardProperties().getHasTrash()));
                
                if (card == null) {
                    // No card with Trash found, can't fulfill requirements
                    return Collections.emptyList();
                }
                selectedCards.add(card);
            }
        }
        
        // Step 2: Handle exact minimum count requirements
        
        // Count how many action cards and attack cards we've already selected
        int actionCount = (int) selectedCards.stream()
        .filter(r -> r.getCardProperties() != null && 
        (Boolean.TRUE.equals(r.getCardProperties().getHasPlusAction()) || 
        Boolean.TRUE.equals(r.getCardProperties().getHasPlusMultipleActions())))
        .count();
        
        int attackCount = (int) selectedCards.stream()
        .filter(r -> r.getCardTypes() != null && r.getCardTypes().contains(CardType.ATTACK))
        .count();
        
        // Add action cards until we reach the required minimum
        if (filter.getMinActionCards() != null && filter.getMinActionCards() > 0) {
            int neededActions = filter.getMinActionCards() - actionCount;
            
            for (int i = 0; i < neededActions; i++) {
                Resource card = findAndRemoveCard(availableCards, 
                r -> r.getCardProperties() != null && 
                (Boolean.TRUE.equals(r.getCardProperties().getHasPlusAction()) || 
                Boolean.TRUE.equals(r.getCardProperties().getHasPlusMultipleActions())));
                
                if (card == null) {
                    // Not enough action cards available, can't fulfill requirements
                    return Collections.emptyList();
                }
                selectedCards.add(card);
                actionCount++;
            }
        }
        
        // Add attack cards until we reach the required minimum
        if (filter.getMinAttackCards() != null && filter.getMinAttackCards() > 0) {
            int neededAttacks = filter.getMinAttackCards() - attackCount;
            
            for (int i = 0; i < neededAttacks; i++) {
                Resource card = findAndRemoveCard(availableCards, 
                r -> r.getCardTypes() != null && r.getCardTypes().contains(CardType.ATTACK));
                
                if (card == null) {
                    // Not enough attack cards available, can't fulfill requirements
                    return Collections.emptyList();
                }
                selectedCards.add(card);
                attackCount++;
            }
        }
        
        // Step 3: Fill the remaining slots with random cards
        Collections.shuffle(availableCards);
        while (selectedCards.size() < 10 && !availableCards.isEmpty()) {
            selectedCards.add(availableCards.remove(0));
        }
        
        // Final check: Ensure we have exactly 10 cards
        if (selectedCards.size() != 10) {
            return Collections.emptyList(); // Couldn't select 10 cards
        }
        
        
        return selectedCards; 
    }
    
    /**
     * Helper method to find and remove a card from a list based on a predicate.
     * 
     * @param cards The list of cards to search
     * @param predicate The condition that the card must satisfy
     * @return The found card (removed from the original list), or null if none found
     */
    private Resource findAndRemoveCard(List<Resource> cards, Predicate<Resource> predicate) {
        for (Iterator<Resource> iterator = cards.iterator(); iterator.hasNext();) {
            Resource card = iterator.next();
            if (predicate.test(card)) {
                iterator.remove();
                return card;
            }
        }
        return null;
    }
} 