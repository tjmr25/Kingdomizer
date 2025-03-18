package com.kingdomizer.controller;

import com.kingdomizer.service.KingdomService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

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
     * Generates a kingdom by filtering expansions and returning card IDs.
     * @param expansionStates a map containing expansion names as keys and their active state as values
     * @return a map containing:
     *         - "kingdomCardIds": a list of 10 randomly selected card IDs
     *         - "landscape": a list of landscape IDs (may be empty)
     */
    @PostMapping("/generate")
    public Map<String, Object> generateKingdom(@RequestBody Map<String, Boolean> expansionStates) {
        return kingdomService.generateKingdom(expansionStates);
    }

    /**
     * Retrieves detailed information about cards, landscapes, and their dependencies.
     * @param cardData a map containing:
     *                - "kingdomCardIds": a list of card IDs
     *                - "landscape": a list of landscape IDs (may be empty)
     * @return a map containing:
     *         - "cards": detailed information about the cards
     *         - "dependencies": detailed information about the dependencies and landscapes
     */
    @PostMapping("/details")
    public Map<String, Object> getKingdomDetails(@RequestBody Map<String, List<Long>> cardData) {
        try {
            return kingdomService.getKingdomDetails(cardData);
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", "An error occurred: " + e.getMessage());
            return errorResponse;
        }
    }
}
