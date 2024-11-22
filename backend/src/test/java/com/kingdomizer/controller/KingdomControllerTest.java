package com.kingdomizer.controller;

import com.kingdomizer.service.KingdomService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

// Es wird nur die Web-Schicht (Controller und direkte Abhängigkeiten)
@WebMvcTest(KingdomController.class)
class KingdomControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private KingdomService kingdomService; // MockBean registriert den Service im Spring-Kontext

    @Test
    void testGetRandomKingdomEndpoint() throws Exception {
        // Mock-Daten
        List<String> mockKingdom = List.of("Keller", "Dorf", "Kapelle", "Burggraben", "Werkstatt",
                                           "Hexe", "Markt", "Miliz", "Umbau", "Gärten");

        // Simuliere Rückgabe des KingdomService
        when(kingdomService.getRandomKingdom()).thenReturn(mockKingdom);

        // Teste den Endpunkt
        mockMvc.perform(get("/api/kingdom"))
                .andExpect(status().isOk()) // HTTP-Status 200
                .andExpect(jsonPath("$.size()").value(10)) // Prüft, ob 10 Karten zurückkommen
                .andExpect(jsonPath("$[0]").value("Keller")); // Prüft das erste Element

        // Überprüfe, dass der Service genau einmal aufgerufen wurde
        verify(kingdomService, times(1)).getRandomKingdom();
    }
}