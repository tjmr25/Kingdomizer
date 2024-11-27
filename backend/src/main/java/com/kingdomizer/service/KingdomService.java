package com.kingdomizer.service;

import com.kingdomizer.entity.Card;
import com.kingdomizer.repository.CardRepository;
import com.kingdomizer.repository.KingdomRepository;
import com.kingdomizer.entity.Kingdom;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class KingdomService {

    private final CardRepository cardRepository;
    private final KingdomRepository kingdomRepository;

    public KingdomService(CardRepository cardRepository, KingdomRepository kingdomRepository) {
        this.cardRepository = cardRepository;
        this.kingdomRepository = kingdomRepository;
    }

    public List<Map<String, Object>> generateKingdom(List<String> expansions) {
        List<Card> filteredCards = cardRepository.findByExpansionIn(expansions);
        Collections.shuffle(filteredCards);

        List<Card> selectedCards = filteredCards.stream()
                .limit(10)
                .sorted(Comparator.comparing(Card::getCost)
                .thenComparing(Card::getName))
                .collect(Collectors.toList());

        // Mappe jede Karte in ein Map-Objekt mit id, name, cost und types
        return selectedCards.stream()
                .map(card -> {
                    Map<String, Object> cardMap = new LinkedHashMap<>();
                    cardMap.put("id", card.getId());
                    cardMap.put("name", card.getName());
                    cardMap.put("cost", card.getCost());
                    cardMap.put("types", card.getTypes().stream()
                            .map(Enum::name)
                            .toArray(String[]::new)); // Konvertiere zu String-Array
                    return cardMap;
                })
                .collect(Collectors.toList());
    }

    public Kingdom saveKingdom(Kingdom kingdom) {
        return kingdomRepository.save(kingdom);
    }

    public List<Kingdom> getAllKingdoms() {
        return kingdomRepository.findAll();
    }
}
