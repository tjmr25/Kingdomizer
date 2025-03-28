package com.kingdomizer.service;

import com.kingdomizer.entity.Resource;
import com.kingdomizer.entity.ResourceCategory;
import com.kingdomizer.entity.Expansion;
import com.kingdomizer.repository.ResourceRepository;
import com.kingdomizer.filter.KingdomFilter;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * Service responsible for filtering Dominion resources based on various criteria.
 * This service handles the filtering logic for both kingdom cards and landscape cards,
 * ensuring that only valid combinations are returned.
 */
@Service
public class FilterService {
    private final ResourceRepository resourceRepository;

    /**
     * Constructs a new FilterService with the required repository.
     *
     * @param resourceRepository Repository for accessing resource data
     */
    public FilterService(ResourceRepository resourceRepository) {
        this.resourceRepository = resourceRepository;
    }

    /**
     * Gets all potential kingdom cards based on the provided filter criteria.
     * Returns the complete pool of cards matching the criteria, from which
     * 10 cards will be randomly selected to form a kingdom.
     *
     * @param filter The filter object containing all filtering criteria
     * @return Complete list of potential kingdom card resources matching the filter criteria
     */
    public List<Resource> getAllPotentialKingdomCards(KingdomFilter filter) {
        List<Expansion> selectedExpansions = extractSelectedExpansions(filter.getExpansions());
        return retrieveAllKingdomCardsByExpansions(selectedExpansions);
    }

    /**
     * Gets all potential landscape cards based on the provided filter criteria.
     * Returns the complete pool of landscape cards matching the criteria, from which
     * a subset will be randomly selected based on the requested landscape count.
     * Excludes tableaus and other game parts that may have landscape orientation.
     *
     * @param filter The filter object containing all filtering criteria
     * @return Complete list of potential landscape cards matching the filter criteria
     */
    public List<Resource> getAllPotentialLandscapeCards(KingdomFilter filter) {
        List<Expansion> selectedExpansions = extractSelectedExpansions(filter.getExpansions());
        return retrieveAllLandscapeCardsByExpansions(selectedExpansions);
    }




    // +++++++++++++++++++++++++++++++++++   PRIVATE METHODS    +++++++++++++++++++++++++++++++++++++++ //
     



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
     * Retrieves all kingdom cards from the database based on selected expansions.
     * Only returns cards with ResourceCategory.CARD from the selected expansions.
     * These cards form the complete pool of potential kingdom cards.
     *
     * @param selectedExpansions List of expansions to include in the retrieval
     * @return Complete list of kingdom cards from the selected expansions
     */
    private List<Resource> retrieveAllKingdomCardsByExpansions(List<Expansion> selectedExpansions) {
        return resourceRepository.findByExpansionInAndResourceCategory(selectedExpansions, ResourceCategory.CARD);
    }

    /**
     * Retrieves all landscape cards from the database based on selected expansions.
     * Only returns cards with landscape orientation that are NOT in the GAMEPART category.
     * Also includes all TRAIT resources from the selected expansions.
     *
     * @param selectedExpansions List of expansions to include in the retrieval
     * @return Complete list of landscape cards from the selected expansions
     */
    private List<Resource> retrieveAllLandscapeCardsByExpansions(List<Expansion> selectedExpansions) {
        // Get landscape-oriented resources that aren't GAMEPART
        List<Resource> landscapeCards = resourceRepository.findByExpansionInAndHasLandscapeOrientationAndResourceCategoryNot(
            selectedExpansions, 
            true, 
            ResourceCategory.GAMEPART
        );
        
        // Also get all TRAIT resources regardless of orientation
        List<Resource> traitResources = resourceRepository.findByExpansionInAndResourceCategory(
            selectedExpansions,
            ResourceCategory.TRAIT
        );
        
        // Combine both lists
        landscapeCards.addAll(traitResources);
        return landscapeCards;
    }
} 