package com.kingdomizer.service;

import com.kingdomizer.entity.Card;
import com.kingdomizer.repository.CardRepository;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Comparator;

@Service
public class CardService {

    private final CardRepository cardRepository;

    public CardService(CardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }

    public List<Map<String, Object>> generateKingdom() {
        List<Card> allCards = cardRepository.findAll();
        Collections.shuffle(allCards);
        List<Card> selectedCards = allCards.stream()
                .limit(10)
                .sorted(Comparator.comparing(Card::getCost).thenComparing(Card::getName))
                .toList();
    
        List<Map<String, Object>> kingdom = new ArrayList<>();
        for (Card card : selectedCards) {
            Map<String, Object> cardDetail = new LinkedHashMap<>();
            cardDetail.put("name", card.getName());
            cardDetail.put("cost", card.getCost());
            kingdom.add(cardDetail);
        }
    
        return kingdom;
    }
}
