package com.kingdomizer.entity;

import jakarta.persistence.*;
import java.util.Set;

@Entity
@Table(name = "resources")
public class Resource {

    @Id
    @Column(name = "resource_id")
    private Long id;

    @Column(name = "resource_name", nullable = false, unique = true)
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(name = "resource_category", nullable = false)
    private ResourceCategory resourceCategory;

    @Enumerated(EnumType.STRING)
    @Column(name = "expansion")
    private Expansion expansion;

    @Column(name = "cost")
    private Integer cost;

    @Column(name = "has_landscape_orientation")
    private Boolean hasLandscapeOrientation;

    @Column(name = "is_linked")
    private Boolean isLinked;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "card_dependencies", joinColumns = @JoinColumn(name = "resource_id"))
    @Column(name = "dependency_id")
    private Set<Long> dependencies;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "card_types", joinColumns = @JoinColumn(name = "resource_id"))
    @Enumerated(EnumType.STRING)
    @Column(name = "card_type")
    private Set<CardType> cardTypes;

    @OneToOne(mappedBy = "resource", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private CardProperties cardProperties;

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

    public ResourceCategory getResourceCategory() {
        return resourceCategory;
    }

    public void setResourceCategory(ResourceCategory resourceCategory) {
        this.resourceCategory = resourceCategory;
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

    public Boolean getHasLandscapeOrientation() {
        return hasLandscapeOrientation;
    }

    public void setHasLandscapeOrientation(Boolean hasLandscapeOrientation) {
        this.hasLandscapeOrientation = hasLandscapeOrientation;
    }

    public Boolean getIsLinked() {
        return isLinked;
    }

    public void setIsLinked(Boolean isLinked) {
        this.isLinked = isLinked;
    }

    public Set<Long> getDependencies() {
        return dependencies;
    }

    public void setDependencies(Set<Long> dependencies) {
        this.dependencies = dependencies;
    }

    public Set<CardType> getCardTypes() {
        return cardTypes;
    }

    public void setCardTypes(Set<CardType> cardTypes) {
        this.cardTypes = cardTypes;
    }

    public CardProperties getCardProperties() {
        return cardProperties;
    }

    public void setCardProperties(CardProperties cardProperties) {
        this.cardProperties = cardProperties;
    }
}
