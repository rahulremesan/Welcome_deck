package com.Welcome.Welcome.Deck.Repo;

import com.Welcome.Welcome.Deck.Entity.ImageData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository<ImageData, Long> {
}
