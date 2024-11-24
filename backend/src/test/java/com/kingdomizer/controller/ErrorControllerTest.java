package com.kingdomizer.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class ErrorControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void testIllegalArgumentException() throws Exception {
        mockMvc.perform(get("/api/illegal-argument"))
                .andExpect(status().isBadRequest()) // Prüft auf 400 Statuscode
                .andExpect(content().contentType(MediaType.APPLICATION_JSON)) // Prüft JSON-Antwort
                .andExpect(jsonPath("$.message").value("Ungültige Anfrage")) // Prüft Nachricht
                .andExpect(jsonPath("$.details").value("Dies ist eine IllegalArgumentException, Statuscode 400."));
    }

    @Test
    void testRuntimeException() throws Exception {
        mockMvc.perform(get("/api/runtime"))
                .andExpect(status().isInternalServerError()) // Prüft auf 500 Statuscode
                .andExpect(content().contentType(MediaType.APPLICATION_JSON)) // Prüft JSON-Antwort
                .andExpect(jsonPath("$.message").value("Interner Fehler")) // Prüft Nachricht
                .andExpect(jsonPath("$.details").value("Dies ist eine RuntimeException, Statuscode 500."));
    }
}