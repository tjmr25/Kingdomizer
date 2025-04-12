package com.kingdomizer.exception;

/**
 * Exception thrown when a kingdom cannot be generated with the given filter criteria.
 * This occurs when the requested configuration is impossible to fulfill due to:
 * - Insufficient cards matching mandatory requirements
 * - Conflicting filter criteria
 * - Not enough cards available from selected expansions
 */
public class ImpossibleKingdomException extends RuntimeException {
    
    /**
     * Constructs a new ImpossibleKingdomException with the specified detail message.
     * 
     * @param message the detail message
     */
    public ImpossibleKingdomException(String message) {
        super(message);
    }
}
