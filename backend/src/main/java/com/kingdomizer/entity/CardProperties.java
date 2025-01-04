package com.kingdomizer.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "card_properties")
public class CardProperties {

    @Id
    @Column(name = "resource_id") // Manuelle Vergabe der ID
    private Long id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "resource_id")
    private Resource resource;

    @Column(name = "has_plus_action")
    private Boolean hasPlusAction;

    @Column(name = "has_plus_multiple_actions")
    private Boolean hasPlusMultipleActions;

    @Column(name = "has_plus_buy")
    private Boolean hasPlusBuy;

    @Column(name = "has_plus_multiple_draws")
    private Boolean hasPlusMultipleDraws;

    @Column(name = "has_trash")
    private Boolean hasTrash;

    @Column(name = "has_curse")
    private Boolean hasCurse;

    // Getter und Setter
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Resource getResource() {
        return resource;
    }

    public void setResource(Resource resource) {
        this.resource = resource;
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
