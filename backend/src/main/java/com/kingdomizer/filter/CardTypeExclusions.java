package com.kingdomizer.filter;

/**
 * Filter class for card type exclusions.
 */
public class CardTypeExclusions {
    private boolean curses;
    private boolean victoryTokens;
    private boolean tableaus;
    private boolean treasures;
    private boolean events;
    private boolean landmarks;
    
    // Getters and setters
    public boolean isCurses() {
        return curses;
    }
    
    public void setCurses(boolean curses) {
        this.curses = curses;
    }
    
    public boolean isVictoryTokens() {
        return victoryTokens;
    }
    
    public void setVictoryTokens(boolean victoryTokens) {
        this.victoryTokens = victoryTokens;
    }
    
    public boolean isTableaus() {
        return tableaus;
    }
    
    public void setTableaus(boolean tableaus) {
        this.tableaus = tableaus;
    }
    
    public boolean isTreasures() {
        return treasures;
    }
    
    public void setTreasures(boolean treasures) {
        this.treasures = treasures;
    }
    
    public boolean isEvents() {
        return events;
    }
    
    public void setEvents(boolean events) {
        this.events = events;
    }
    
    public boolean isLandmarks() {
        return landmarks;
    }
    
    public void setLandmarks(boolean landmarks) {
        this.landmarks = landmarks;
    }
} 