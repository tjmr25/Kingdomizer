package com.kingdomizer.controller;

import com.kingdomizer.service.CardService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/kingdom")
    public ResponseEntity<List<Map<String, Object>>> generateKingdom(@RequestBody Map<String, Boolean> expansionStates) {
        // Filtere die aktivierten Erweiterungen
        List<String> expansions = expansionStates.entrySet().stream()
                .filter(Map.Entry::getValue) // Nur aktivierte Erweiterungen
                .map(Map.Entry::getKey)     // Hole die Schlüssel (Erweiterungsnamen)
                .toList();

        // Generiere das Königreich basierend auf den Erweiterungen
        List<Map<String, Object>> kingdom = cardService.generateKingdom(expansions);

        // Sende die Antwort zurück
        return ResponseEntity.ok(kingdom);
    }}
