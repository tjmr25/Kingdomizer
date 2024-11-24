
package com.kingdomizer.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api")
public class ErrorController {
    
    @GetMapping("/illegal-argument")
    public String throwIllegalArgumentException() {
        throw new IllegalArgumentException("Dies ist eine IllegalArgumentException, Statuscode 400.");
    }

    @GetMapping("/runtime")
    public String throwRuntimeException() {
        throw new RuntimeException("Dies ist eine RuntimeException, Statuscode 500.");
    }
}
