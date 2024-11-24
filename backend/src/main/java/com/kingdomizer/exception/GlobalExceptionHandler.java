package com.kingdomizer.exception;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.http.ResponseEntity;
import org.springframework.web.context.request.WebRequest;
import org.springframework.http.HttpStatus;

@ControllerAdvice
public class GlobalExceptionHandler {

    // Handler für IllegalArgumentException (400 Bad Request), z.B. wird nach 11 Karten gefragt
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ErrorResponse> handleIllegalArgumentException(IllegalArgumentException ex,
            WebRequest request) {
        
        ErrorResponse errorResponse = new ErrorResponse("Ungültige Anfrage", ex.getMessage());
       
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    // Allgemeiner Handler für RuntimeException (500 Internal Server Error)
    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ErrorResponse> handleRuntimeException(RuntimeException ex, WebRequest request) {
        
        ErrorResponse errorResponse = new ErrorResponse("Interner Fehler", ex.getMessage());
        
        return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
