package com.Welcome.Welcome.Deck.Service;

import com.Welcome.Welcome.Deck.Entity.Manager;
import com.Welcome.Welcome.Deck.Repo.ManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ManagerService {
    @Autowired
    ManagerRepository managerRepository;

    public List<Manager> getAllManager(){
        return managerRepository.findAll();
    }
}
