package com.kingdomizer.repository;

import com.kingdomizer.entity.Resource;
import com.kingdomizer.entity.Expansion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResourceRepository extends JpaRepository<Resource, Long> {
    
    /**
     * Finds all resources from the specified expansions.
     * Used for consolidated filtering to reduce database calls.
     * @param expansions the list of expansions to filter by
     * @return a list of all resources from the specified expansions
     */
    List<Resource> findByExpansionIn(List<Expansion> expansions);
}

