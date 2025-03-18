package com.kingdomizer.dto;

import com.kingdomizer.entity.Expansion;
import java.util.List;

/**
 * Data Transfer Object for representing detailed card information.
 */
public class CardDTO {
    private Long id;
    private String name;
    private Expansion expansion;
    private Integer cost;
    private List<String> cardTypes;


    // Konstruktor für Karten
    public CardDTO(Long id, String name, Expansion expansion, Integer cost, List<String> cardTypes) {
        this.id = id;
        this.name = name;
        this.expansion = expansion;
        this.cost = cost;
        this.cardTypes = cardTypes;
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

    public Integer getCost() {
        return cost;
    }

    public void setCost(Integer cost) {
        this.cost = cost;
    }

    public List<String> getCardTypes() {
        return cardTypes;
    }

    public void setCardTypes(List<String> cardTypes) {
        this.cardTypes = cardTypes;
    }

}
