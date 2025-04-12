package com.kingdomizer.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;

/**
 * Global exception handler for centralizing error handling across the application.
 * Provides consistent error responses for specific exception types.
 */
@ControllerAdvice
public class GlobalExceptionHandler {
    private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    /**
     * Handles ImpossibleKingdomException thrown when kingdom generation criteria cannot be met.
     * Returns a 400 Bad Request response with a structured error message.
     *
     * @param ex The ImpossibleKingdomException that was thrown
     * @return ResponseEntity with error details and appropriate HTTP status
     */
    @ExceptionHandler(ImpossibleKingdomException.class)
    public ResponseEntity<Map<String, String>> handleImpossibleKingdomException(ImpossibleKingdomException ex) {
        logger.warn("ImpossibleKingdomException: {}", ex.getMessage());
        
        Map<String, String> response = new HashMap<>();
        response.put("error", ex.getMessage());
        response.put("errorType", "IMPOSSIBLE_KINGDOM");
        
        // Return a 400 Bad Request status since this is a client error (invalid filter criteria)
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }
    
    /**
     * Handles general exceptions that aren't caught by more specific handlers.
     * Returns a 500 Internal Server Error response.
     *
     * @param ex The Exception that was thrown
     * @return ResponseEntity with error details and appropriate HTTP status
     */
    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, String>> handleGenericException(Exception ex) {
        logger.error("Unhandled exception occurred", ex);
        
        Map<String, String> response = new HashMap<>();
        response.put("error", "An unexpected error occurred: " + ex.getMessage());
        response.put("errorType", "INTERNAL_ERROR");
        
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
