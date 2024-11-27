package com.kingdomizer.repository;

import com.kingdomizer.entity.Kingdom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KingdomRepository extends JpaRepository<Kingdom, Long> {
    // Standardmethoden wie save(), findAll(), findById(), deleteById() sind hier verfügbar
}
