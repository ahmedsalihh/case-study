package com.ahmedslaihh.hepsiburadabackend.controller;

import com.ahmedslaihh.hepsiburadabackend.dto.ProductDto;
import com.ahmedslaihh.hepsiburadabackend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(final ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public ProductDto getAllProducts(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "12") int size,
            @RequestParam(required = false, defaultValue = "") String name,
            @RequestParam(required = false) Long color,
            @RequestParam(required = false) Long brand,
            @RequestParam(defaultValue = "price") String orderBy,
            @RequestParam(defaultValue = "ASC") String direction) {
        return productService.getProducts(page, size, name, color, brand, orderBy, direction);
    }
}
