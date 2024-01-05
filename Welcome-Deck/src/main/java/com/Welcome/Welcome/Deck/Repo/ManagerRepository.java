package com.Welcome.Welcome.Deck.Repo;

import com.Welcome.Welcome.Deck.Entity.Manager;
import org.hibernate.sql.exec.spi.JdbcParameters;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ManagerRepository extends JpaRepository <Manager, Long>{
}
