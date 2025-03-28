package com.rajeev.ecom_project.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rajeev.ecom_project.model.Product;
import com.rajeev.ecom_project.service.ImageService;
import com.rajeev.ecom_project.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.DataInput;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService service;

    @Autowired
    private ImageService imgService;

     @GetMapping("/products")
     public ResponseEntity<List<Product>> getAllProducts(){
          return  new ResponseEntity<>(service.getAllProducts(), HttpStatus.OK);
     }

     @GetMapping("/product/{id}")
     public ResponseEntity<Product> getProduct(@PathVariable int id){
         Product product = service.getProductById(id);
         if(product != null)
             return  new ResponseEntity<>(product,HttpStatus.OK);
         else
             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
     }

     @PostMapping("/product")
     public ResponseEntity<?> addProduct(@RequestParam(value = "product",required = true) String product,
                                         @RequestParam("images") List<MultipartFile> images){
         try{
             ObjectMapper obj = new ObjectMapper();
             Product produ = obj.readValue( product,Product.class);
             System.out.println(produ.getId());
             System.out.println(produ);
             System.out.println(images.size());
             Product prod = service.addProductWithImage(produ, images);
             return new ResponseEntity<>(prod,HttpStatus.CREATED);
         }catch(Exception e){
              return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
         }
     }


     @PutMapping("/product/{id}")
     public ResponseEntity<String> updateProduct(@PathVariable int id
                                                 ,@RequestBody Product product)  {
         Product prod = service.updateProduct(id,product);
         if(prod != null){
             return  new ResponseEntity<>("Updated",HttpStatus.OK);
         }else
             return  new ResponseEntity<>("failed to update",HttpStatus.BAD_REQUEST);
     }

     @DeleteMapping("/product/{id}")
     public ResponseEntity<String> deleteProductById(@PathVariable int id){
          Product prod = service.getProductById(id);
          if(prod != null) {
              service.deleteProductById(id);
              return  new ResponseEntity<>("Deleted",HttpStatus.OK);
          }else
              return new ResponseEntity<>("product not found",HttpStatus.NOT_FOUND);
     }


     @GetMapping("/products/search")
     public ResponseEntity<List<Product>> searchProducts(@RequestParam String keyword){
         List<Product> products = service.searchProducts(keyword);
         return new ResponseEntity<>(products,HttpStatus.OK);
     }
}
