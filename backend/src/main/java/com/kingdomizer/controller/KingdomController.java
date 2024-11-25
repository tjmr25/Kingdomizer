package com.kingdomizer.controller;

import com.kingdomizer.service.CardService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api")
public class KingdomController {
    
    private final CardService cardService;

    // Konstruktor für Dependency Injection
    public KingdomController(CardService cardService) {
        this.cardService = cardService;
    }

    // Endpunkt, der 10 zufällige Karten zurückgibt
    @GetMapping("/kingdom")
    public List<Map<String, Object>> generateKingdom() {
        return cardService.generateKingdom();
    }
}
