package com.kingdomizer.controller;

import com.kingdomizer.service.KingdomService;
import com.kingdomizer.entity.Kingdom;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api/kingdom")
public class KingdomController {
    
    private final KingdomService kingdomService;

    // Konstruktor für Dependency Injection
    public KingdomController(KingdomService kingdomService) {
        this.kingdomService = kingdomService;
    }

    @PostMapping("/generate")
    public ResponseEntity<List<Map<String, Object>>> generateKingdom(@RequestBody Map<String, Boolean> expansionStates) {
        // // Filtere die aktivierten Erweiterungen
        // List<String> expansions = expansionStates.entrySet().stream()
        //         .filter(Map.Entry::getValue) // Nur aktivierte Erweiterungen
        //         .map(Map.Entry::getKey)     // Hole die Schlüssel (Erweiterungsnamen)
        //         .toList();

        // List<Map<String, Object>> kingdom = kingdomService.generateKingdom(expansions);

        // return ResponseEntity.ok(kingdom);
        return null;

    }

    @PostMapping("/save")
    public ResponseEntity<Kingdom> saveKingdom(@RequestBody Kingdom kingdom) {
        // Kingdom savedKingdom = kingdomService.saveKingdom(kingdom);
        // return ResponseEntity.ok(savedKingdom);
        return null;
    }

    @GetMapping
    public ResponseEntity<List<Kingdom>> getAllKingdoms() {
        // List<Kingdom> kingdoms = kingdomService.getAllKingdoms();
        // return ResponseEntity.ok(kingdoms);
        return null;
    }
}
