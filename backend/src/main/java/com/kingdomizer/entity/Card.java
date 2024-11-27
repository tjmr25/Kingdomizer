package com.kingdomizer.entity;

import jakarta.persistence.*;
import java.util.Set;

@Entity
@Table(name = "cards")
public class Card {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private int cost;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "card_types", joinColumns = @JoinColumn(name = "card_id"))
    @Enumerated(EnumType.STRING)
    private Set<CardType> types;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Expansion expansion;


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

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    public Set<CardType> getTypes() {
        return types;
    }

    public void setTypes(Set<CardType> types) {
        this.types = types;
    }
 
    public Expansion getExpansion() {
        return expansion;
    }

    public void setExpansion(Expansion expansion) {
        this.expansion = expansion;
    }

}
