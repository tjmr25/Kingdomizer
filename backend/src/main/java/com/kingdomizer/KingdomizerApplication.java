package com.kingdomizer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class KingdomizerApplication {

	public static void main(String[] args) {
		SpringApplication.run(KingdomizerApplication.class, args);
	}

	@Configuration
	public class WebConfig {
		@Bean
		public WebMvcConfigurer corsConfigurer() {
			return new WebMvcConfigurer() {
				@Override
				public void addCorsMappings(@SuppressWarnings("null") CorsRegistry registry) {
					registry.addMapping("/api/**")
							.allowedOrigins("http://localhost:5173") // Erlaubt Anfragen vom Frontend
							.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
							.allowedHeaders("*");
				}
			};
		}
	}
}
