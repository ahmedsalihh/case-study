package com.ahmedsalihh.hepsiburadabackend.controller;

import com.ahmedsalihh.hepsiburadabackend.dto.ProductDto;
import com.ahmedsalihh.hepsiburadabackend.model.ProductRequest;
import com.ahmedsalihh.hepsiburadabackend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(final ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public ProductDto getAllProducts(@RequestBody ProductRequest request) {
        return productService.getProducts(request);
    }
}
