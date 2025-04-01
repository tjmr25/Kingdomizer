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
    private Boolean hasPlusAction;
    private Boolean hasPlusMultipleActions;
    private Boolean hasPlusBuy;
    private Boolean hasPlusMultipleDraws;
    private Boolean hasTrash;
    private Boolean hasCurse;

    // Constructor for cards
    public CardDTO(Long id, String name, Expansion expansion, Integer cost, List<String> cardTypes,
                  Boolean hasPlusAction, Boolean hasPlusMultipleActions, Boolean hasPlusBuy,
                  Boolean hasPlusMultipleDraws, Boolean hasTrash, Boolean hasCurse) {
        this.id = id;
        this.name = name;
        this.expansion = expansion;
        this.cost = cost;
        this.cardTypes = cardTypes;
        this.hasPlusAction = hasPlusAction;
        this.hasPlusMultipleActions = hasPlusMultipleActions;
        this.hasPlusBuy = hasPlusBuy;
        this.hasPlusMultipleDraws = hasPlusMultipleDraws;
        this.hasTrash = hasTrash;
        this.hasCurse = hasCurse;
    }

    // Getters and Setters
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

    public Boolean getHasPlusAction() {
        return hasPlusAction;
    }

    public void setHasPlusAction(Boolean hasPlusAction) {
        this.hasPlusAction = hasPlusAction;
    }

    public Boolean getHasPlusMultipleActions() {
        return hasPlusMultipleActions;
    }

    public void setHasPlusMultipleActions(Boolean hasPlusMultipleActions) {
        this.hasPlusMultipleActions = hasPlusMultipleActions;
    }

    public Boolean getHasPlusBuy() {
        return hasPlusBuy;
    }

    public void setHasPlusBuy(Boolean hasPlusBuy) {
        this.hasPlusBuy = hasPlusBuy;
    }

    public Boolean getHasPlusMultipleDraws() {
        return hasPlusMultipleDraws;
    }

    public void setHasPlusMultipleDraws(Boolean hasPlusMultipleDraws) {
        this.hasPlusMultipleDraws = hasPlusMultipleDraws;
    }

    public Boolean getHasTrash() {
        return hasTrash;
    }

    public void setHasTrash(Boolean hasTrash) {
        this.hasTrash = hasTrash;
    }

    public Boolean getHasCurse() {
        return hasCurse;
    }

    public void setHasCurse(Boolean hasCurse) {
        this.hasCurse = hasCurse;
    }
}
