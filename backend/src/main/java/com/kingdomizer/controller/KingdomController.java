package com.kingdomizer.controller;

import com.kingdomizer.filter.KingdomFilter;
import com.kingdomizer.service.KingdomService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * Controller for managing kingdoms and their details.
 */
@RestController
@RequestMapping("/api/kingdom")
public class KingdomController {
    private static final Logger logger = LoggerFactory.getLogger(KingdomController.class);

    private final KingdomService kingdomService;

    public KingdomController(KingdomService kingdomService) {
        this.kingdomService = kingdomService;
    }

    /**
     * Generates a kingdom based on filter criteria.
     * @param filter comprehensive filter object containing expansion selections, 
     *               card feature requirements, exclusions, and other settings
     * @return a map containing:
     *         - "kingdomCardIds": a list of 10 randomly selected card IDs
     *         - "landscape": a list of landscape IDs (may be empty)
     */
    @PostMapping("/generate")
    public Map<String, Object> generateKingdom(@RequestBody KingdomFilter filter) {
        logger.info("REST request to generate a new kingdom");
        return kingdomService.generateKingdom(filter);
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
        logger.info("REST request to get the kingdom details to an existing kingdom");
        return kingdomService.getKingdomDetails(cardData);
    }
}
