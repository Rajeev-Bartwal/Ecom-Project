package com.rajeev.ecom_project.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Image {

     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     private int id;
     private String imageName;
     private String imageType;
     @Lob
     private byte[] imageData;

     @ManyToOne
     @JoinColumn(name ="Product_id" , nullable = false)
     private Product product;
}
