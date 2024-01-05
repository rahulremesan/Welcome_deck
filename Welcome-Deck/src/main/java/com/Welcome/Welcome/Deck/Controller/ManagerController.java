package com.Welcome.Welcome.Deck.Controller;

import com.Welcome.Welcome.Deck.Entity.Manager;
import com.Welcome.Welcome.Deck.Service.ManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/manager")
public class ManagerController {
    @Autowired
    ManagerService managerService;
@GetMapping("managerlist")
    public ResponseEntity<List<Manager>> getAllManager(){
        List<Manager> managers= managerService.getAllManager();
        return new ResponseEntity<>(managers, HttpStatus.OK);
    }
}
