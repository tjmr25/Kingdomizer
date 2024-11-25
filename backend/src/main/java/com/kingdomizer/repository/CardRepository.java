package com.kingdomizer.repository;

import com.kingdomizer.entity.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CardRepository extends JpaRepository<Card, Long> {
    
    @Query(value = "SELECT c FROM Card c ORDER BY RAND() LIMIT 10")
    List<Card> findRandom10();
}