package com.Welcome.Welcome.Deck;

import com.Welcome.Welcome.Deck.config.CorsConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;


@SpringBootApplication
@Import(CorsConfig.class)
public class WelcomeDeckApplication {

	public static void main(String[] args) {
		SpringApplication.run(WelcomeDeckApplication.class, args);
	}

}
