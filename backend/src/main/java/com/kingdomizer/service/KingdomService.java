package com.kingdomizer.service;

import com.kingdomizer.entity.Resource;
import com.kingdomizer.repository.ResourceRepository;
import com.kingdomizer.filter.KingdomFilter;
import com.kingdomizer.dto.CardDTO;
import com.kingdomizer.dto.DependencyDTO;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.HashMap;
import java.util.ArrayList;

/**
 * Service responsible for generating and managing Dominion kingdoms.
 * This service orchestrates the kingdom generation process by coordinating
 * between the FilterService for card selection and DTOMapper for data transformation.
 */
@Service
public class KingdomService {
    private final ResourceRepository resourceRepository;
    private final FilterService filterService;
    private final DTOMapper dtoMapper;

    /**
     * Constructs a new KingdomService with required dependencies.
     *
     * @param resourceRepository Repository for accessing resource data
     * @param filterService Service for filtering resources based on criteria
     * @param dtoMapper Service for converting entities to DTOs
     */
    public KingdomService(ResourceRepository resourceRepository, 
                         FilterService filterService,
                         DTOMapper dtoMapper) {
        this.resourceRepository = resourceRepository;
        this.filterService = filterService;
        this.dtoMapper = dtoMapper;
    }

    /**
     * Generates a new Dominion kingdom based on the provided filter criteria.
     * This method selects 10 random kingdom cards and optionally includes landscape cards.
     *
     * @param filter The filter object containing all selection criteria including:
     *               - Selected expansions
     *               - Landscape card count (0-6)
     *               - Other filtering criteria (to be implemented)
     * @return A map containing:
     *         - "kingdomCardIds": List of 10 randomly selected card IDs
     *         - "landscape": List of landscape card IDs (empty if count is 0)
     */
    public Map<String, Object> generateKingdom(KingdomFilter filter) {
        // Get all potential kingdom cards matching the filter
        List<Resource> potentialKingdomCards = filterService.getAllPotentialKingdomCards(filter);
        
        // Shuffle and select 10 cards
        Collections.shuffle(potentialKingdomCards);
        List<Long> kingdomCardIds = potentialKingdomCards.stream()
                .limit(10)
                .map(Resource::getId)
                .collect(Collectors.toList());
                
        Map<String, Object> result = new HashMap<>();
        result.put("kingdomCardIds", kingdomCardIds);
        
        // Handle landscape cards
        int landscapeCount = Math.min(6, Math.max(0, filter.getLandscapeCount()));
        if (landscapeCount > 0) {
            List<Resource> potentialLandscapeCards = filterService.getAllPotentialLandscapeCards(filter);
            Collections.shuffle(potentialLandscapeCards);
            List<Long> landscapeCardIds = potentialLandscapeCards.stream()
                    .limit(landscapeCount)
                    .map(Resource::getId)
                    .collect(Collectors.toList());
            result.put("landscape", landscapeCardIds);
        } else {
            result.put("landscape", new ArrayList<Long>());
        }
        
        return result;
    }
    
    /**
     * Retrieves detailed information about a kingdom's cards and their dependencies.
     * This includes information about the kingdom cards, landscape cards, and any
     * required dependencies for the selected cards.
     *
     * @param cardData A map containing:
     *                - "kingdomCardIds": List of selected kingdom card IDs
     *                - "landscape": List of selected landscape card IDs
     * @return A map containing:
     *         - "cards": List of CardDTOs representing the kingdom cards
     *         - "dependencies": List of DependencyDTOs representing required cards and landscapes
     */
    public Map<String, Object> getKingdomDetails(Map<String, List<Long>> cardData) {
        List<Long> cardIds = cardData.getOrDefault("kingdomCardIds", Collections.emptyList());
        List<Long> landscapeIds = cardData.getOrDefault("landscape", Collections.emptyList());
        
        List<Resource> resources = resourceRepository.findAllById(cardIds);
        List<Resource> landscapeResources = resourceRepository.findAllById(landscapeIds);
    
        // Get all dependencies
        List<Long> dependencyIds = resources.stream()
                .flatMap(resource -> resource.getDependencies().stream())
                .distinct()
                .collect(Collectors.toList());
    
        List<Resource> dependencies = resourceRepository.findAllById(dependencyIds);
        dependencies.addAll(landscapeResources);
    
        // Convert to DTOs
        List<CardDTO> cardDTOs = dtoMapper.mapToCardDTOs(resources);
        List<DependencyDTO> dependencyDTOs = dtoMapper.mapToDependencyDTOs(dependencies);
    
        // Create response
        Map<String, Object> result = new HashMap<>();
        result.put("cards", cardDTOs);
        result.put("dependencies", dependencyDTOs);
        return result;
    }
}
