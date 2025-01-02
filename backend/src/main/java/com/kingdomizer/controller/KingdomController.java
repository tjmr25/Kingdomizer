package com.kingdomizer.controller;

import com.kingdomizer.service.KingdomService;
import com.kingdomizer.dto.CardDTO;
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

    /**
     * Generates a kingdom based on selected expansions.
     * @param expansionStates a map of expansions with their active state (true/false)
     * @return a list of cards in the generated kingdom
     */
    @PostMapping("/generate")
    public List<CardDTO> generateKingdom(@RequestBody Map<String, Boolean> expansionStates) {
        return kingdomService.generateKingdom(expansionStates);
    }
}
