package com.Welcome.Welcome.Deck.Service;

import com.Welcome.Welcome.Deck.Entity.Ibu;
import com.Welcome.Welcome.Deck.Repo.IbuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IbuService {
    @Autowired
    IbuRepository ibuRepository;


    public List<Ibu> getAllIbus() {
        return ibuRepository.findAll();
    }

}
