package com.cts.project.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class HelloController {
	@RequestMapping("/Hello")
	public String Hello()
	{
		return "helloworld";
	}

}
