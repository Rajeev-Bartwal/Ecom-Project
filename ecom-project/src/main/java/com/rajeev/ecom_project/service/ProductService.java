package com.rajeev.ecom_project.service;

import com.rajeev.ecom_project.model.Product;
import com.rajeev.ecom_project.repository.ProductRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepo repo;

    @Autowired
    private ImageService imgService;

    public List<Product> getAllProducts(){
        return repo.findAll();
    }

    public Product getProductById(int id){
        return repo.findById(id).orElse(new Product());
    }


    public void deleteProductById(int id) {
        repo.deleteById(id);
    }


    public List<Product> searchProducts(String keyword) {
        return repo.searchProducts(keyword);
    }

    @Transactional
    public Product addProductWithImage(Product product, List<MultipartFile> images) throws IOException {

        Product prod = repo.save(product);

        for(MultipartFile image : images){
             imgService.saveImage(image , prod);
        }
        repo.save(prod);
        repo.flush();
        return  repo.findById(prod.getId()).orElse(null);
    }

    public Product updateProduct(int id, Product product) {
        Product prod = repo.findById(id).orElse(null);

        prod.setName(product.getName());
        prod.setBrand(product.getBrand());
        prod.setDescription(product.getDescription());
        prod.setCategory(product.getCategory());
        prod.setPrice(product.getPrice());
        prod.setProductAvailable(product.isProductAvailable());
        prod.setStockQuantity(product.getStockQuantity());
        prod.setReleaseDate(product.getReleaseDate());

        return repo.save(prod);
    }
}
