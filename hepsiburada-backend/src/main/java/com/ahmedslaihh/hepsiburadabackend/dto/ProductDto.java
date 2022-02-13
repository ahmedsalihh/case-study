package com.ahmedslaihh.hepsiburadabackend.dto;

import com.ahmedslaihh.hepsiburadabackend.model.Product;
import lombok.Data;

import java.util.List;

@Data
public class ProductDto {
    private List<Product> productList;
    private List<ColorDto> colors;
    private List<BrandDto> brands;
}
