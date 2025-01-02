package com.kingdomizer.repository;

import com.kingdomizer.entity.Resource;
import com.kingdomizer.entity.ResourceCategory;
import com.kingdomizer.entity.Expansion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResourceRepository extends JpaRepository<Resource, Long> {

    /**
     * Finds resources by their expansion and category.
     * @param expansions the list of expansions to filter by
     * @param category the resource category to filter by
     * @return a list of resources matching the criteria
     */
    List<Resource> findByExpansionInAndResourceCategory(List<Expansion> expansions, ResourceCategory category);
}

