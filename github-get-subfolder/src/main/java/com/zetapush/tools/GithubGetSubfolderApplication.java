package com.zetapush.tools;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class GithubGetSubfolderApplication {

	public static void main(String[] args) {
		SpringApplication.run(GithubGetSubfolderApplication.class, args);
	}
}
