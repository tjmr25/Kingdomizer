package com.kingdomizer.service;

import com.kingdomizer.entity.Resource;
import com.kingdomizer.entity.ResourceCategory;
import com.kingdomizer.entity.Expansion;
import com.kingdomizer.repository.ResourceRepository;
import com.kingdomizer.dto.CardDTO;
import com.kingdomizer.dto.DependencyDTO;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.HashMap;
import java.util.ArrayList;

@Service
public class KingdomService {

    private final ResourceRepository resourceRepository;

    public KingdomService(ResourceRepository resourceRepository) {
        this.resourceRepository = resourceRepository;
    }

    /**
     * Generates a kingdom based on selected expansions.
     * Returns 10 random kingdom cards and 2 events if PLUNDER is selected.
     */
    public Map<String, Object> generateKingdom(Map<String, Boolean> expansionStates) {
        List<Expansion> selectedExpansions = filterExpansions(expansionStates);
        List<Resource> filteredCards = fetchFilteredResources(selectedExpansions);

        Collections.shuffle(filteredCards);
        List<Long> kingdomCardIds = filteredCards.stream()
                .limit(10)
                .map(Resource::getId)
                .collect(Collectors.toList());
                
        Map<String, Object> result = new HashMap<>();
        result.put("kingdomCardIds", kingdomCardIds);
        
        // Check if PLUNDER expansion is selected
        if (selectedExpansions.contains(Expansion.PLUNDER)) {
            List<Resource> eventResources = fetchRandomEvents(2);
            List<Long> eventIds = eventResources.stream()
                    .map(Resource::getId)
                    .collect(Collectors.toList());
            result.put("landscape", eventIds);
        } else {
            result.put("landscape", new ArrayList<Long>());
        }
        
        return result;
    }
    
    /**
     * Retrieves kingdom details including landscape cards.
     * @param cardData Map containing kingdomCardIds and landscape lists
     * @return Map containing cards and dependencies information
     */
    public Map<String, Object> getKingdomDetails(Map<String, List<Long>> cardData) {
        List<Long> cardIds = cardData.getOrDefault("kingdomCardIds", Collections.emptyList());
        List<Long> landscapeIds = cardData.getOrDefault("landscape", Collections.emptyList());
        
        List<Resource> resources = fetchResourcesByIds(cardIds);
        List<Resource> landscapeResources = fetchResourcesByIds(landscapeIds);
    
        List<Long> dependencyIds = resources.stream()
                .flatMap(resource -> resource.getDependencies().stream())
                .distinct()
                .collect(Collectors.toList());
    
        List<Resource> dependencies = fetchResourcesByIds(dependencyIds);
        dependencies.addAll(landscapeResources);
    
        List<CardDTO> cardDTOs = mapToCardDTOs(resources);
        List<DependencyDTO> dependencyDTOs = mapToDependencyDTOs(dependencies);
    
        return createKingdomDetailsResponse(cardDTOs, dependencyDTOs);
    }

    // ====== Private Helper Methods ======

    /**
     * Selects random EVENT resources from the database.
     */
    private List<Resource> fetchRandomEvents(int count) {
        List<Resource> allResources = resourceRepository.findAll();
        
        List<Resource> events = allResources.stream()
                .filter(resource -> resource.getResourceCategory() == ResourceCategory.EVENT)
                .collect(Collectors.toList());
                
        Collections.shuffle(events);
        return events.stream().limit(count).collect(Collectors.toList());
    }
    
    /**
     * Converts expansion state map to list of active Expansion enums.
     */
    private List<Expansion> filterExpansions(Map<String, Boolean> expansionStates) {
        return expansionStates.entrySet().stream()
                .filter(Map.Entry::getValue)
                .map(entry -> Expansion.valueOf(entry.getKey().toUpperCase()))
                .collect(Collectors.toList());
    }

    /**
     * Fetches resources filtered by expansions and CARD category.
     */
    private List<Resource> fetchFilteredResources(List<Expansion> selectedExpansions) {
        return resourceRepository.findByExpansionInAndResourceCategory(selectedExpansions, ResourceCategory.CARD);
    }

    /**
     * Fetches resources by their IDs.
     */
    private List<Resource> fetchResourcesByIds(List<Long> cardIds) {
        return resourceRepository.findAllById(cardIds);
    }

    /**
     * Converts Resource entities to CardDTOs.
     */
    private List<CardDTO> mapToCardDTOs(List<Resource> resources) {
        return resources.stream()
                .map(this::mapToCardDTO)
                .collect(Collectors.toList());
    }

    /**
     * Converts Resource entities to DependencyDTOs.
     */
    private List<DependencyDTO> mapToDependencyDTOs(List<Resource> resources) {
        return resources.stream()
                .map(this::mapToDependencyDTO)
                .collect(Collectors.toList());
    }

    /**
     * Maps a single Resource to a CardDTO.
     */
    private CardDTO mapToCardDTO(Resource resource) {
        return new CardDTO(
                resource.getId(),
                resource.getName(),
                resource.getExpansion(),
                resource.getCost(),
                resource.getCardTypes().stream().map(Enum::toString).toList()
        );
    }

    /**
     * Maps a single Resource to a DependencyDTO.
     */
    private DependencyDTO mapToDependencyDTO(Resource resource) {
        return new DependencyDTO(
                resource.getId(),
                resource.getName(),
                resource.getExpansion(),
                resource.getCost(),
                resource.getResourceCategory(),
                resource.getHasLandscapeOrientation(),
                resource.getCardTypes() != null ? resource.getCardTypes().stream().map(Enum::toString).toList() : null
        );
    }

    /**
     * Creates the final response structure.
     */
    private Map<String, Object> createKingdomDetailsResponse(List<CardDTO> cardDTOs, List<DependencyDTO> dependencyDTOs) {
        Map<String, Object> result = new HashMap<>();
        result.put("cards", cardDTOs);
        result.put("dependencies", dependencyDTOs);
        return result;
    }
}
