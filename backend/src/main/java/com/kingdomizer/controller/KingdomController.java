package com.kingdomizer.controller;

import com.kingdomizer.service.KingdomService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RestController
@RequestMapping("/api")
public class KingdomController {
    
    private final KingdomService kingdomService;

    // Konstruktor für Dependency Injection
    public KingdomController(KingdomService kingdomService) {
        this.kingdomService = kingdomService;
    }

    // Endpunkt, der 10 zufällige Karten zurückgibt
    @GetMapping("/kingdom")
    public List<String> getRandomKingdom() {
        return kingdomService.getRandomKingdom();
    }
}
