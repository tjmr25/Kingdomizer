package com.kingdomizer.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "kingdoms")
public class Kingdom {

     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Long id;

    // @Column(name = "created_at", nullable = false)
    // private LocalDateTime createdAt;

    // @ElementCollection
    // @CollectionTable(name = "kingdom_cards", joinColumns = @JoinColumn(name = "kingdom_id"))
    // @Column(name = "card_id")
    // private List<Long> cardIds; // IDs der Karten in der Datenbank

    // @Transient
    // private List<Card> cards; // Kartenobjekte für die API-Antwort

    // public Kingdom() {
    //     this.createdAt = LocalDateTime.now();
    // }

    // public Kingdom(List<Long> cardIds) {
    //     this.cardIds = cardIds;
    //     this.createdAt = LocalDateTime.now();
    // }

    // // Getter und Setter
    // public Long getId() {
    //     return id;
    // }

    // public void setId(Long id) {
    //     this.id = id;
    // }

    // public LocalDateTime getCreatedAt() {
    //     return createdAt;
    // }

    // public void setCreatedAt(LocalDateTime createdAt) {
    //     this.createdAt = createdAt;
    // }

    // public List<Long> getCardIds() {
    //     return cardIds;
    // }

    // public void setCardIds(List<Long> cardIds) {
    //     this.cardIds = cardIds;
    // }

    // public List<Card> getCards() {
    //     return cards;
    // }

    // public void setCards(List<Card> cards) {
    //     this.cards = cards;
    // }
}

