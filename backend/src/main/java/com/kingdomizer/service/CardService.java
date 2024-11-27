package com.kingdomizer.service;

import com.kingdomizer.entity.Card;
import com.kingdomizer.repository.CardRepository;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class CardService {

    private final CardRepository cardRepository;

    public CardService(CardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }

    public List<Map<String, Object>> generateKingdom(List<String> expansions) {
        // Hole alle Karten aus der Datenbank
        List<Card> filteredCards = cardRepository.findByExpansionIn(expansions);

        // Mische die Karten
        Collections.shuffle(filteredCards);

        // Wähle 10 zufällige Karten aus
        List<Card> selectedCards = filteredCards.stream()
                .limit(10)
                .sorted(Comparator.comparing(Card::getCost)
                .thenComparing(Card::getName))
                .collect(Collectors.toList());

        // Mappe jede Karte in ein Map-Objekt mit id, name, cost und types
        return selectedCards.stream()
                .map(card -> {
                    Map<String, Object> cardMap = new LinkedHashMap<>();
                    cardMap.put("name", card.getName());
                    cardMap.put("cost", card.getCost());
                    cardMap.put("types", card.getTypes().stream()
                            .map(Enum::name)
                            .toArray(String[]::new)); // Konvertiere zu String-Array
                    return cardMap;
                })
                .collect(Collectors.toList());
    }
}
