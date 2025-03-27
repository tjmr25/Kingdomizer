package com.kingdomizer.filter;

/**
 * Filter class for card feature requirements.
 */
public class CardFeatureFilters {
    private boolean hasMultipleActions;
    private boolean hasMultipleCards;
    private boolean hasBuy;
    private boolean hasReaction;
    private boolean hasTrash;
    
    // Getters and setters
    public boolean isHasMultipleActions() {
        return hasMultipleActions;
    }
    
    public void setHasMultipleActions(boolean hasMultipleActions) {
        this.hasMultipleActions = hasMultipleActions;
    }
    
    public boolean isHasMultipleCards() {
        return hasMultipleCards;
    }
    
    public void setHasMultipleCards(boolean hasMultipleCards) {
        this.hasMultipleCards = hasMultipleCards;
    }
    
    public boolean isHasBuy() {
        return hasBuy;
    }
    
    public void setHasBuy(boolean hasBuy) {
        this.hasBuy = hasBuy;
    }
    
    public boolean isHasReaction() {
        return hasReaction;
    }
    
    public void setHasReaction(boolean hasReaction) {
        this.hasReaction = hasReaction;
    }
    
    public boolean isHasTrash() {
        return hasTrash;
    }
    
    public void setHasTrash(boolean hasTrash) {
        this.hasTrash = hasTrash;
    }
} 