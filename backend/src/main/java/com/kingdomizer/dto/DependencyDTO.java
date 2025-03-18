package com.kingdomizer.dto;

import com.kingdomizer.entity.Expansion;
import com.kingdomizer.entity.ResourceCategory;
import java.util.List;

/**
 * Data Transfer Object for representing dependencies.
 */
public class DependencyDTO {
    private Long id;
    private String name;
    private Expansion expansion;
    private Integer cost;
    private ResourceCategory resourceCategory;
    private Boolean hasLandscapeOrientation;
    private List<String> cardTypes; // Optional: nur für Karten

    // Konstruktor für DependencyDTO
    public DependencyDTO(Long id, String name, Expansion expansion, Integer cost, ResourceCategory resourceCategory,
                         Boolean hasLandscapeOrientation, List<String> cardTypes) {
        this.id = id;
        this.name = name;
        this.expansion = expansion;
        this.cost = cost;
        this.resourceCategory = resourceCategory;
        this.hasLandscapeOrientation = hasLandscapeOrientation;
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

    public ResourceCategory getResourceCategory() {
        return resourceCategory;
    }

    public void setResourceCategory(ResourceCategory resourceCategory) {
        this.resourceCategory = resourceCategory;
    }

    public Boolean getHasLandscapeOrientation() {
        return hasLandscapeOrientation;
    }

    public void setHasLandscapeOrientation(Boolean hasLandscapeOrientation) {
        this.hasLandscapeOrientation = hasLandscapeOrientation;
    }

    public List<String> getCardTypes() {
        return cardTypes;
    }

    public void setCardTypes(List<String> cardTypes) {
        this.cardTypes = cardTypes;
    }
}
