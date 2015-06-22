package com.toyBox.controller;

import com.toyBox.service.ToyBoxSerivce;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.HashMap;
import java.util.Random;

/**
 * Created by 201210098 on 2015-04-07.
 */

@Controller
@RequestMapping("/")
public class ToyBoxContorller {


    @Autowired
    ToyBoxSerivce toyBoxSerivce;

    @RequestMapping("/index")
    String index() {
        return "index";
    }

    @RequestMapping("/home")
    String test() {
        return "home";
    }

    @RequestMapping("/temperature/{data}")
    ResponseEntity<String> temperature (@PathVariable String data){

       String result = toyBoxSerivce.getTemperature(data);
       return new ResponseEntity<String>(result, HttpStatus.OK);
    }
    @RequestMapping("/humidity/{data}")
    ResponseEntity<String> humidity (@PathVariable String data){
        String result = toyBoxSerivce.getHumidity(data);
        return new ResponseEntity<String>(result, HttpStatus.OK);
    }

    @RequestMapping("/dust/{data}")
    ResponseEntity<String> dust (@PathVariable String data){
        String result = toyBoxSerivce.getDust(data);
        return new ResponseEntity<String>(result, HttpStatus.OK);
    }

    @RequestMapping("/elevator/{data}")
    ResponseEntity<String> elevator (@PathVariable String data){
        String result = toyBoxSerivce.getElevator(data);
        return new ResponseEntity<String>(result, HttpStatus.OK);
    }
}
