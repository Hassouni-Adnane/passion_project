package com.example.glasse.Entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Entity

@Getter@Setter@AllArgsConstructor@NoArgsConstructor@Builder
public class Glasse {
    @Id
    Integer id;
    String type;
    double price;
    String model;

}
