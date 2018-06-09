package com.zetapush.tools;

import org.springframework.cloud.openfeign.FeignClient;

import feign.Headers;
import feign.Param;
import feign.RequestLine;

@FeignClient("github-folder")
@Headers("Authorization: token fdeccdf4420f8f25c074046bb3996ef4832eef88")
public interface GitHubHttpClientFolder {
	
	@RequestLine("GET /{path}")
	String getSubfolder(@Param("path") String path);
}
