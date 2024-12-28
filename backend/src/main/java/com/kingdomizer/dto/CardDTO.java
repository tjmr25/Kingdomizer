package com.kingdomizer.dto;

import com.kingdomizer.entity.Expansion;
import com.kingdomizer.entity.ExpansionEdition;
import com.kingdomizer.entity.CardType;

import java.util.List;

public class CardDTO {
    private Long id;
    private String name;
    private Expansion expansion;
    private ExpansionEdition expansionEdition;
    private Integer cost;
    private List<CardType> cardTypes; // Liste für die Typen
    private List<Long> dependencies; // Neue Liste für die Abhängigkeiten (IDs)

    // Konstruktor
    public CardDTO(Long id, String name, Expansion expansion, ExpansionEdition expansionEdition, Integer cost, List<CardType> cardTypes, List<Long> dependencies) {
        this.id = id;
        this.name = name;
        this.expansion = expansion;
        this.expansionEdition = expansionEdition;
        this.cost = cost;
        this.cardTypes = cardTypes;
        this.dependencies = dependencies;
    }

    // Getter und Setter
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Expansion getExpansion() {
        return expansion;
    }

    public void setExpansion(Expansion expansion) {
        this.expansion = expansion;
    }

    public ExpansionEdition getExpansionEdition() {
        return expansionEdition;
    }

    public void setExpansionEdition(ExpansionEdition expansionEdition) {
        this.expansionEdition = expansionEdition;
    }

    public Integer getCost() {
        return cost;
    }

    public void setCost(Integer cost) {
        this.cost = cost;
    }

    public List<CardType> getCardTypes() {
        return cardTypes;
    }

    public void setCardTypes(List<CardType> cardTypes) {
        this.cardTypes = cardTypes;
    }

    public List<Long> getDependencies() {
        return dependencies;
    }

    public void setDependencies(List<Long> dependencies) {
        this.dependencies = dependencies;
    }
}
