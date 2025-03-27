package com.kingdomizer.filter;

import java.util.Map;

/**
 * Main filter class representing the comprehensive criteria for kingdom generation.
 */
public class KingdomFilter {
    
    // Selected expansions (e.g., BASE: true, BASE_1ST: false, etc.)
    private Map<String, Boolean> expansions;
    
    // Card feature filters (e.g., hasMultipleActions: true, hasBuy: false, etc.)
    private CardFeatureFilters cardFeatures;
    
    // Card type exclusions (e.g., curses: true, treasures: false, etc.)
    private CardTypeExclusions exclusions;
    
    // Card count filters
    private Integer minActionCards;
    private Integer minAttackCards;
    
    // Landscape settings
    private int landscapeCount;
    
    // Getters and setters
    public Map<String, Boolean> getExpansions() {
        return expansions;
    }
    
    public void setExpansions(Map<String, Boolean> expansions) {
        this.expansions = expansions;
    }
    
    public CardFeatureFilters getCardFeatures() {
        return cardFeatures;
    }
    
    public void setCardFeatures(CardFeatureFilters cardFeatures) {
        this.cardFeatures = cardFeatures;
    }
    
    public CardTypeExclusions getExclusions() {
        return exclusions;
    }
    
    public void setExclusions(CardTypeExclusions exclusions) {
        this.exclusions = exclusions;
    }
    
    public Integer getMinActionCards() {
        return minActionCards;
    }
    
    public void setMinActionCards(Integer minActionCards) {
        this.minActionCards = minActionCards;
    }
    
    public Integer getMinAttackCards() {
        return minAttackCards;
    }
    
    public void setMinAttackCards(Integer minAttackCards) {
        this.minAttackCards = minAttackCards;
    }
    
    public int getLandscapeCount() {
        return landscapeCount;
    }
    
    public void setLandscapeCount(int landscapeCount) {
        this.landscapeCount = landscapeCount;
    }
} 