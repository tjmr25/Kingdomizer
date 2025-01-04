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

@Service
public class KingdomService {

    private final ResourceRepository resourceRepository;

    public KingdomService(ResourceRepository resourceRepository) {
        this.resourceRepository = resourceRepository;
    }

    public List<Long> generateKingdom(Map<String, Boolean> expansionStates) {
        List<Expansion> selectedExpansions = filterExpansions(expansionStates);
        List<Resource> filteredCards = fetchFilteredResources(selectedExpansions);

        Collections.shuffle(filteredCards);
        return filteredCards.stream()
                .limit(10)
                .map(Resource::getId)
                .collect(Collectors.toList());
    }

    public Map<String, Object> getKingdomDetails(List<Long> cardIds) {
        // 1. Alle Ressourcen basierend auf den IDs laden
        List<Resource> resources = fetchResourcesByIds(cardIds);
    
        // 2. Sammle alle Dependency-IDs
        List<Long> dependencyIds = resources.stream()
                .flatMap(resource -> resource.getDependencies().stream())
                .distinct()
                .collect(Collectors.toList());
    
        // 3. Lade die Ressourcen für die Dependency-IDs
        List<Resource> dependencies = fetchResourcesByIds(dependencyIds);
    
        // 4. Karten und Abhängigkeiten in DTOs umwandeln
        List<CardDTO> cardDTOs = mapToCardDTOs(resources);
        List<DependencyDTO> dependencyDTOs = mapToDependencyDTOs(dependencies);
    
        // 5. Antwortstruktur erstellen
        return createKingdomDetailsResponse(cardDTOs, dependencyDTOs);
    }
    
    private List<Expansion> filterExpansions(Map<String, Boolean> expansionStates) {
        return expansionStates.entrySet().stream()
                .filter(Map.Entry::getValue)
                .map(entry -> Expansion.valueOf(entry.getKey().toUpperCase()))
                .collect(Collectors.toList());
    }

    private List<Resource> fetchFilteredResources(List<Expansion> selectedExpansions) {
        return resourceRepository.findByExpansionInAndResourceCategory(selectedExpansions, ResourceCategory.CARD);
    }

    private List<Resource> fetchResourcesByIds(List<Long> cardIds) {
        return resourceRepository.findAllById(cardIds);
    }

    private List<Resource> filterMainCards(List<Resource> resources) {
        return resources.stream()
                .filter(resource -> resource.getResourceCategory() == ResourceCategory.CARD)
                .collect(Collectors.toList());
    }

    private List<Resource> filterDependencies(List<Resource> resources) {
        // IDs aller Abhängigkeiten sammeln
        List<Long> dependencyIds = resources.stream()
                .flatMap(resource -> resource.getDependencies().stream())
                .collect(Collectors.toList());
    
        // Ressourcen filtern, die in den Dependency-IDs vorkommen
        return resources.stream()
                .filter(resource -> dependencyIds.contains(resource.getId()))
                .collect(Collectors.toList());
    }
    private List<CardDTO> mapToCardDTOs(List<Resource> resources) {
        return resources.stream()
                .map(this::mapToCardDTO)
                .collect(Collectors.toList());
    }

    private List<DependencyDTO> mapToDependencyDTOs(List<Resource> resources) {
        return resources.stream()
                .map(this::mapToDependencyDTO)
                .collect(Collectors.toList());
    }

    private CardDTO mapToCardDTO(Resource resource) {
        return new CardDTO(
                resource.getId(),
                resource.getName(),
                resource.getExpansion(),
                resource.getCost(),
                resource.getCardTypes().stream().map(Enum::toString).toList(),
                resource.getCardProperties() != null && resource.getCardProperties().getHasPlusAction(),
                resource.getCardProperties() != null && resource.getCardProperties().getHasPlusMultipleActions(),
                resource.getCardProperties() != null && resource.getCardProperties().getHasPlusBuy(),
                resource.getCardProperties() != null && resource.getCardProperties().getHasPlusMultipleDraws(),
                resource.getCardProperties() != null && resource.getCardProperties().getHasTrash(),
                resource.getCardProperties() != null && resource.getCardProperties().getHasCurse()
        );
    }

    private DependencyDTO mapToDependencyDTO(Resource resource) {
        return new DependencyDTO(
                resource.getId(),
                resource.getName(),
                resource.getExpansion(),
                resource.getCost(),
                resource.getResourceCategory(),
                resource.getHasLandscapeOrientation(),
                resource.getIsLinked(),
                resource.getCardTypes() != null ? resource.getCardTypes().stream().map(Enum::toString).toList() : null,
                resource.getCardProperties() != null && resource.getCardProperties().getHasCurse()
        );
    }

    private Map<String, Object> createKingdomDetailsResponse(List<CardDTO> cardDTOs, List<DependencyDTO> dependencyDTOs) {
        Map<String, Object> result = new HashMap<>();
        result.put("cards", cardDTOs);
        result.put("dependencies", dependencyDTOs);
        return result;
    }
}
