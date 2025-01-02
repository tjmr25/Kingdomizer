package com.kingdomizer.service;

import com.kingdomizer.entity.Resource;
import com.kingdomizer.entity.ResourceCategory;
import com.kingdomizer.entity.Expansion;
import com.kingdomizer.repository.ResourceRepository;
import com.kingdomizer.dto.CardDTO;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.Map;

@Service
public class KingdomService {

    private final ResourceRepository resourceRepository;

    // Konstruktor für Dependency Injection
    public KingdomService(ResourceRepository resourceRepository) {
        this.resourceRepository = resourceRepository;
    }

    /**
     * Generates a kingdom by filtering expansions, fetching resources, and processing cards.
     * @param expansionStates a map containing expansion names as keys and their active state as values
     * @return a list of CardDTOs representing the selected kingdom
     */
    public List<CardDTO> generateKingdom(Map<String, Boolean> expansionStates) {
        List<Expansion> selectedExpansions = filterExpansions(expansionStates);
        List<Resource> filteredCards = fetchFilteredResources(selectedExpansions);
        return processCards(filteredCards);
    }

    /**
     * Filters the selected expansions based on the provided map of expansion states.
     * @param expansionStates a map containing expansion names as keys and their active state as values
     * @return a list of selected expansions as enums
     */
    private List<Expansion> filterExpansions(Map<String, Boolean> expansionStates) {
        return expansionStates.entrySet().stream()
                .filter(Map.Entry::getValue)
                .map(entry -> Expansion.valueOf(entry.getKey().toUpperCase()))
                .collect(Collectors.toList());
    }

    /**
     * Fetches resources filtered by the selected expansions and the CARD resource category.
     * @param selectedExpansions a list of selected expansions as enums
     * @return a list of resources matching the criteria
     */
    private List<Resource> fetchFilteredResources(List<Expansion> selectedExpansions) {
        return resourceRepository.findByExpansionInAndResourceCategory(selectedExpansions, ResourceCategory.CARD);
    }

    /**
     * Processes the cards by shuffling, sorting, and mapping them into DTOs.
     * @param filteredCards a list of resources to process
     * @return a list of CardDTOs representing the processed cards
     */
    private List<CardDTO> processCards(List<Resource> filteredCards) {
        Collections.shuffle(filteredCards);

        return filteredCards.stream()
                .limit(10)
                .sorted(Comparator.comparing(Resource::getExpansion, Comparator.naturalOrder())
                                  .thenComparing(Resource::getCost)
                                  .thenComparing(Resource::getName))
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    /**
     * Maps a resource entity into a CardDTO.
     * @param resource the resource entity to map
     * @return a CardDTO containing the relevant data
     */
    private CardDTO mapToDTO(Resource resource) {
        return new CardDTO(
                resource.getId(),
                resource.getName(),
                resource.getExpansion(),
                resource.getCost(),
                resource.getCardTypes().stream().toList(),
                resource.getDependencies().stream().toList()
        );
    }
}
