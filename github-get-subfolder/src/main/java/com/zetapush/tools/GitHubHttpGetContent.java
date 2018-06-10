package com.zetapush.tools;

import org.springframework.cloud.openfeign.FeignClient;

import feign.Headers;
import feign.Param;
import feign.RequestLine;

@FeignClient("github-content")
@Headers("Authorization: token 94512fa10296ba76472d3293c583ac5242b49805")
public interface GitHubHttpGetContent {

	@RequestLine("GET {path}")
	String getFileContent(@Param("path") String path);
}
