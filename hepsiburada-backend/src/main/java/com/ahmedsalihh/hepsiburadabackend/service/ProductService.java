package com.ahmedsalihh.hepsiburadabackend.service;

import com.ahmedsalihh.hepsiburadabackend.model.ProductRequest;
import com.ahmedsalihh.hepsiburadabackend.dto.ProductDto;

public interface ProductService {
    ProductDto getProducts(ProductRequest request);
}
