package com.ahmedslaihh.hepsiburadabackend.service;

import com.ahmedslaihh.hepsiburadabackend.dto.ProductDto;

public interface ProductService {
    ProductDto getProducts(int page,
                           int size,
                           String name,
                           Long color,
                           Long brand,
                           String orderBy,
                           String direction);
}
