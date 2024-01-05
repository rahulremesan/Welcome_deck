package com.Welcome.Welcome.Deck.Repo;

import com.Welcome.Welcome.Deck.Entity.Ibu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IbuRepository extends JpaRepository<Ibu, Integer> {
}
