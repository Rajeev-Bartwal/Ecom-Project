package com.rajeev.ecom_project.controller;

import com.rajeev.ecom_project.model.Product;
import com.rajeev.ecom_project.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService service;

    @RequestMapping("/")
     public String ex(){
         return "hello world";
     }

     @RequestMapping("/products")
     public List<Product> getAllProducts(){
          return  service.getAllProducts();
     }

     @RequestMapping("/product/{id}")
     public ResponseEntity<Product> getProduct(@PathVariable int id){
         Product product = service.getProductById(id);
         if(product != null)
             return  new ResponseEntity<>(product,HttpStatus.OK);
         else
             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
     }
}
