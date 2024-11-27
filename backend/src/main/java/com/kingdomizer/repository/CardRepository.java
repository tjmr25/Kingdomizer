package com.kingdomizer.repository;

import com.kingdomizer.entity.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CardRepository extends JpaRepository<Card, Long> {
    
    //Filtert alle Karten, die in der übergebenen Liste enthalten sind
    List<Card> findByExpansionIn(List<String> expansions);
}