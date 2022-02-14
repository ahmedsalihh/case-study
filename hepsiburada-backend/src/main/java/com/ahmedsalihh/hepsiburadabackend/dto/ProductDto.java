package com.ahmedsalihh.hepsiburadabackend.dto;

import com.ahmedsalihh.hepsiburadabackend.model.Product;
import lombok.Data;

import java.util.List;

@Data
public class ProductDto {
    private List<Product> productList;
    private List<ColorDto> colors;
    private List<BrandDto> brands;
}
