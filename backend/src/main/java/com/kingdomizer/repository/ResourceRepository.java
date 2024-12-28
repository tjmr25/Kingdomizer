package com.kingdomizer.repository;

import com.kingdomizer.entity.Resource;
import com.kingdomizer.entity.ResourceCategory;
import com.kingdomizer.entity.Expansion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResourceRepository extends JpaRepository<Resource, Long> {
    List<Resource> findByExpansionInAndResourceCategory(List<Expansion> expansions, ResourceCategory category);
}

