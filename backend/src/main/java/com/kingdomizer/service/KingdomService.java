package com.kingdomizer.service;

import com.kingdomizer.entity.Resource;
import com.kingdomizer.entity.ResourceCategory;
import com.kingdomizer.entity.Expansion;
import com.kingdomizer.repository.ResourceRepository;
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

    public List<Long> generateKingdom(Map<String, Boolean> expansionStates) {
        // Filtere die aktivierten Erweiterungen und konvertiere in Enums
        List<Expansion> selectedExpansions = expansionStates.entrySet().stream()
                .filter(Map.Entry::getValue) // Nur aktivierte Erweiterungen
                .map(entry -> Expansion.valueOf(entry.getKey().toUpperCase())) // String zu Enum konvertieren
                .collect(Collectors.toList());
    
        // Ressourcen filtern nach Erweiterungen und ResourceCategory
        List<Resource> filteredCards = resourceRepository.findByExpansionInAndResourceCategory(
                selectedExpansions, 
                ResourceCategory.CARD
        );
    
        // Karten mischen
        Collections.shuffle(filteredCards);
    
        // 10 Karten auswählen
        return filteredCards.stream()
                .limit(10)
                .sorted(Comparator.comparing(Resource::getExpansion, Comparator.naturalOrder()) // Nach natürlicher Enum-Reihenfolge sortieren
                                .thenComparing(Resource::getExpansionEdition)  
                                .thenComparing(Resource::getCost)   // Nach Kosten sortieren
                                .thenComparing(Resource::getName)) // Nach Name sortieren
                .map(Resource::getId) // IDs extrahieren
                .collect(Collectors.toList());
    }
    
}
