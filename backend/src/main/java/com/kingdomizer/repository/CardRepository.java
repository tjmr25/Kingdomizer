package com.kingdomizer.repository;

import com.kingdomizer.entity.Card;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CardRepository extends JpaRepository<Card, Long> {
    //Vllt. später benutzerdefinierte Abfragen
}