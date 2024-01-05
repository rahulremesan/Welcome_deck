package com.Welcome.Welcome.Deck.Controller;

import com.Welcome.Welcome.Deck.Entity.Ibu;
import com.Welcome.Welcome.Deck.Service.IbuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/ibu")
public class IbuController {
@Autowired
    IbuService ibuService;

@GetMapping("/ibulist")
    public ResponseEntity<List<Ibu>> getAllIbu(){
        List<Ibu> ibus = ibuService.getAllIbus();
        return new ResponseEntity<>(ibus, HttpStatus.OK);
    }
}
