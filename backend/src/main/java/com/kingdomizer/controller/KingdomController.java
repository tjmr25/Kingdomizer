package com.kingdomizer.controller;

import com.kingdomizer.service.KingdomService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * Controller for managing kingdoms and their details.
 */
@RestController
@RequestMapping("/api/kingdom")
public class KingdomController {

    private final KingdomService kingdomService;

    public KingdomController(KingdomService kingdomService) {
        this.kingdomService = kingdomService;
    }

    /**
     * Generates a kingdom by filtering expansions and returning only card IDs.
     * @param expansionStates a map containing expansion names as keys and their active state as values
     * @return a list of 10 randomly selected card IDs
     */
    @PostMapping("/generate")
    public List<Long> generateKingdom(@RequestBody Map<String, Boolean> expansionStates) {
        return kingdomService.generateKingdom(expansionStates);
    }

    /**
     * Retrieves detailed information about cards and their dependencies.
     * @param cardIds a list of card IDs to retrieve details for
     * @return a map containing:
     *         - "cards": detailed information about the cards
     *         - "dependencies": detailed information about the dependencies
     */
    @PostMapping("/details")
    public Map<String, Object> getKingdomDetails(@RequestBody List<Long> cardIds) {
        return kingdomService.getKingdomDetails(cardIds);
    }
}
