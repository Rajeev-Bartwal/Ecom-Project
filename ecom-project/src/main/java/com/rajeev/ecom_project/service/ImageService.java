package com.rajeev.ecom_project.service;

import com.rajeev.ecom_project.model.Image;
import com.rajeev.ecom_project.model.Product;
import com.rajeev.ecom_project.repository.ImageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ImageService {
    @Autowired
    private ImageRepo imgRepo;

    public Image saveImage(MultipartFile image, Product product) throws IOException {

        Image img = new Image();

        img.setImageName(image.getOriginalFilename());
        img.setImageType(image.getContentType());
        img.setImageData(image.getBytes());
        img.setProduct(product);

        product.addImage(img);

        return imgRepo.save(img);

    }

    public List<byte[]> getImageByProduct(Product product){

        return imgRepo.findByProduct(product).stream().map(Image::getImageData).collect(Collectors.toList());

    }


}
