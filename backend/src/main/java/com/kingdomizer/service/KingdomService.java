package com.kingdomizer.service;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class KingdomService {

    // Statische Liste der Kartennamen aus der 2. Edition
    private static final List<String> CARDS = List.of(
            "Burggraben", "Kapelle", "Keller", "Dorf", "Händlerin",
            "Vasall", "Vorbotin", "Werkstatt", "Bürokrat", "Geldverleiher",
            "Miliz", "Schmiede", "Thronsaal", "Umbau", "Wilddiebin",
            "Banditin", "Bibliothek", "Hexe", "Jahrmarkt", "Laboratorium",
            "Markt", "Mine", "Ratsversammlung", "Torwächterin", "Töpferei", "Gärten"
    );

    // Methode zum zufälligen Auswählen von 10 Karten
    public List<String> getRandomKingdom() {
        List<String> shuffled = new ArrayList<>(CARDS);
        Collections.shuffle(shuffled);
        return shuffled.subList(0, 10);
    }
}