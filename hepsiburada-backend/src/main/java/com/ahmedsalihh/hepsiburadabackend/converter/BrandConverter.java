package com.ahmedsalihh.hepsiburadabackend.converter;

import com.ahmedsalihh.hepsiburadabackend.model.Brand;
import com.ahmedsalihh.hepsiburadabackend.dto.BrandDto;
import com.ahmedsalihh.hepsiburadabackend.model.Product;

import java.util.List;
import java.util.stream.Collectors;

public class BrandConverter {
    public static List<BrandDto> toBrandDto(List<Brand> brandList, List<Product> productList) {
        return brandList.stream().map(brand ->
                new BrandDto(
                        brand.getId(),
                        brand.getName(),
                        productList.stream().filter(product -> product.getBrand().getId() == brand.getId()).collect(Collectors.toList()).size()
                )).collect(Collectors.toList());
    }
}
