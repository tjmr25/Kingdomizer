package com.kingdomizer.service;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class KingdomServiceTest {

    private final KingdomService kingdomService = new KingdomService();

    @Test
    void testGetRandomKingdomReturns10Cards() {
        // Testet, ob immer genau 10 Karten zurückgegeben werden
        List<String> kingdom = kingdomService.getRandomKingdom();
        assertEquals(10, kingdom.size(), "Das Königreich sollte genau 10 Karten enthalten.");
    }

    @Test
    void testGetRandomKingdomIsRandom() {
        // Testet, ob die Karten zufällig ausgewählt werden
        List<String> kingdom1 = kingdomService.getRandomKingdom();
        List<String> kingdom2 = kingdomService.getRandomKingdom();

        assertNotEquals(kingdom1, kingdom2, "Das Königreich sollte zufällig generiert werden.");
    }
}