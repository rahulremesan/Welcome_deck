package com.Welcome.Welcome.Deck.Repo;

import com.Welcome.Welcome.Deck.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
