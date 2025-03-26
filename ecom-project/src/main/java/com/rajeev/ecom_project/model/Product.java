package com.rajeev.ecom_project.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {

       @Id
       @GeneratedValue(strategy = GenerationType.IDENTITY)
       private int id;
       private String name;
       private String description;
       private BigDecimal price;
       private String brand;
       private String category;
       private Date releaseDate;
       private boolean  productAvailable;
       private int stockQuantity;

       @OneToMany(mappedBy = "product" ,cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
       private List<Image> images = new ArrayList<>();

       public void addImage(Image img){
              images.add(img);
              img.setProduct(this);
       }

       public  void setImages(List<Image> images){
              this.images.clear();
              images.forEach(this::addImage);
       }

       public boolean isProductAvailable() {
              return productAvailable;
       }

}
