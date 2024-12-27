package com.kingdomizer.service;

import com.kingdomizer.repository.KingdomRepository;
import com.kingdomizer.entity.Kingdom;
import com.kingdomizer.entity.Expansion;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class KingdomService {

    private final KingdomRepository kingdomRepository;

    public KingdomService(KingdomRepository kingdomRepository) {
        this.kingdomRepository = kingdomRepository;
    }

    // public List<Map<String, Object>> generateKingdom(List<String> expansions) {
    //     List<Card> filteredCards = cardRepository.findByExpansionIn(expansions);
    //     Collections.shuffle(filteredCards);

    //     List<Card> selectedCards = filteredCards.stream()
    //         .limit(10)
    //         .sorted(Comparator.comparing(Card::getExpansion) // Nach Erweiterung sortieren
    //         .thenComparing(Card::getCost) // Nach Kosten sortieren
    //         .thenComparing(Card::getName)) // Falls gleiche Kosten: Nach Name sortieren
    //         .collect(Collectors.toList());

    //     // Mappe jede Karte in ein Map-Objekt mit id, name, cost und types
    //     return selectedCards.stream()
    //             .map(card -> {
    //                 Map<String, Object> cardMap = new LinkedHashMap<>();
    //                 cardMap.put("id", card.getId());
    //                 cardMap.put("name", card.getName());
    //                 cardMap.put("cost", card.getCost());
    //                 cardMap.put("expansion", card.getExpansion().name());
    //                 cardMap.put("types", card.getTypes().stream()
    //                         .map(Enum::name)
    //                         .toArray(String[]::new)); // Konvertiere zu String-Array
    //                 return cardMap;
    //             })
    //             .collect(Collectors.toList());
    // }

    // public Kingdom saveKingdom(Kingdom kingdom) {
    //     return kingdomRepository.save(kingdom);
    // }

    // public List<Kingdom> getAllKingdoms() {
    //     // Hole alle Kingdoms
    //     List<Kingdom> kingdoms = kingdomRepository.findAll();

    //     // Ersetze cardIds durch Card-Objekte
    //     for (Kingdom kingdom : kingdoms) {
    //         // IDs in Karten umwandeln
    //         List<Card> cards = cardRepository.findAllById(kingdom.getCardIds());
    //         kingdom.setCards(cards);
    //     }

    //     return kingdoms;
    // }
}
