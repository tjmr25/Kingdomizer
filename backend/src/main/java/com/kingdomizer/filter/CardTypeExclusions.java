package com.kingdomizer.filter;

import java.util.ArrayList;
import java.util.List;

/**
 * Filter class for card type exclusions.
 */
public class CardTypeExclusions {
    private boolean curses;
    private boolean tokens;
    private boolean tableaus;
    private boolean treasures;
    private boolean events;
    private boolean traits;
    
    // Getters and setters
    public boolean isCurses() {
        return curses;
    }
    
    public void setCurses(boolean curses) {
        this.curses = curses;
    }
    
    public boolean isTokens() {
        return tokens;
    }
    
    public void setTokens(boolean tokens) {
        this.tokens = tokens;
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
    
    public boolean isTraits() {
        return traits;
    }
    
    public void setTraits(boolean traits) {
        this.traits = traits;
    }
    
    /**
     * Returns a list of all active exclusions (those set to true).
     * This is useful for filtering and makes the code more maintainable.
     * 
     * @return List of strings representing the active exclusion types
     */
    public List<String> getActiveExclusions() {
        List<String> activeExclusions = new ArrayList<>();
        
        if (curses) activeExclusions.add("curses");
        if (tokens) activeExclusions.add("tokens");
        if (tableaus) activeExclusions.add("tableaus");
        if (treasures) activeExclusions.add("treasures");
        if (events) activeExclusions.add("events");
        if (traits) activeExclusions.add("traits");
        
        return activeExclusions;
    }
    
    /**
     * Checks if any exclusions are active.
     * 
     * @return true if at least one exclusion is active, false otherwise
     */
    public boolean hasActiveExclusions() {
        return curses || tokens || tableaus || treasures || events || traits;
    }
} 