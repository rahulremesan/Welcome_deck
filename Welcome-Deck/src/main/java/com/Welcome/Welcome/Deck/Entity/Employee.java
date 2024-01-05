package com.Welcome.Welcome.Deck.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Employee {
    @Id
    private Long id;
    private  String name;
    private  String contactMobile;
    private String contactEmail;
    private String hometown;
    private String educationQualification;
    private String experience;
    private String hobbies;
    private String coreSkill;
    private String favouriteQuote;
    private String anotherProfession;
    private String assignedIbuName;
    private String assignedManagerName;

}
