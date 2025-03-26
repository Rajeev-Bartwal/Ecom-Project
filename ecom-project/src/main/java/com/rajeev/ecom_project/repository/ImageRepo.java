package com.rajeev.ecom_project.repository;

import com.rajeev.ecom_project.model.Image;
import com.rajeev.ecom_project.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImageRepo extends JpaRepository< Image, Integer> {

    List<Image> findByProduct(Product product);

}
