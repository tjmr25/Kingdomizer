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
    
    /**
     * Finds landscape-oriented resources from the specified expansions excluding a specific category.
     * @param expansions the list of expansions to filter by
     * @param hasLandscapeOrientation whether the resources should have landscape orientation
     * @param excludedCategory the resource category to exclude
     * @return a list of landscape resources matching the criteria and not in the excluded category
     */
    List<Resource> findByExpansionInAndHasLandscapeOrientationAndResourceCategoryNot(
        List<Expansion> expansions, 
        Boolean hasLandscapeOrientation, 
        ResourceCategory excludedCategory
    );
}

