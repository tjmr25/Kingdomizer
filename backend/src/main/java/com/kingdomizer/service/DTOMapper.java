package com.kingdomizer.service;

import com.kingdomizer.entity.Resource;
import com.kingdomizer.dto.CardDTO;
import com.kingdomizer.dto.DependencyDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Comparator;
import java.util.stream.Collectors;

/**
 * Service responsible for converting Resource entities to various DTOs.
 * This service handles all data transformation and sorting logic for the application's
 * data transfer objects.
 */
@Service
public class DTOMapper {
    
    /**
     * Converts a list of Resources to CardDTOs and sorts them by expansion, cost, and name.
     * The sorting order is:
     * 1. Expansion (nulls last)
     * 2. Cost (nulls last)
     * 3. Name (nulls last)
     *
     * @param resources List of Resource entities to convert
     * @return Sorted list of CardDTOs
     */
    public List<CardDTO> mapToCardDTOs(List<Resource> resources) {
        return resources.stream()
                .map(resource -> new CardDTO(
                    resource.getId(),
                    resource.getName(),
                    resource.getExpansion(),
                    resource.getCost(),
                    resource.getCardTypes().stream().map(Enum::toString).toList(),
                    resource.getCardProperties() != null ? resource.getCardProperties().getHasPlusAction() : null,
                    resource.getCardProperties() != null ? resource.getCardProperties().getHasPlusMultipleActions() : null,
                    resource.getCardProperties() != null ? resource.getCardProperties().getHasPlusBuy() : null,
                    resource.getCardProperties() != null ? resource.getCardProperties().getHasPlusMultipleDraws() : null,
                    resource.getCardProperties() != null ? resource.getCardProperties().getHasTrash() : null,
                    resource.getCardProperties() != null ? resource.getCardProperties().getHasCurse() : null
                ))
                .sorted(Comparator.comparing(CardDTO::getExpansion, Comparator.nullsLast(Comparator.naturalOrder()))
                        .thenComparing(CardDTO::getCost, Comparator.nullsLast(Comparator.naturalOrder()))
                        .thenComparing(CardDTO::getName, Comparator.nullsLast(Comparator.naturalOrder())))
                .collect(Collectors.toList());
    }

    /**
     * Converts a list of Resources to DependencyDTOs and sorts them by expansion, cost, and name.
     * The sorting order is:
     * 1. Expansion (nulls last)
     * 2. Cost (nulls last)
     * 3. Name (nulls last)
     *
     * @param resources List of Resource entities to convert
     * @return Sorted list of DependencyDTOs
     */
    public List<DependencyDTO> mapToDependencyDTOs(List<Resource> resources) {
        return resources.stream()
                .map(resource -> new DependencyDTO(
                    resource.getId(),
                    resource.getName(),
                    resource.getExpansion(),
                    resource.getCost(),
                    resource.getResourceCategory(),
                    resource.getHasLandscapeOrientation(),
                    resource.getCardTypes() != null ? resource.getCardTypes().stream().map(Enum::toString).toList() : null
                ))
                .sorted(Comparator.comparing(DependencyDTO::getExpansion, Comparator.nullsLast(Comparator.naturalOrder()))
                        .thenComparing(DependencyDTO::getCost, Comparator.nullsLast(Comparator.naturalOrder()))
                        .thenComparing(DependencyDTO::getName, Comparator.nullsLast(Comparator.naturalOrder())))
                .collect(Collectors.toList());
    }
} 