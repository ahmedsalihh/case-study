package com.ahmedsalihh.hepsiburadabackend.converter;

import com.ahmedsalihh.hepsiburadabackend.dto.ColorDto;
import com.ahmedsalihh.hepsiburadabackend.model.Color;
import com.ahmedsalihh.hepsiburadabackend.model.Product;

import java.util.List;
import java.util.stream.Collectors;

public class ColorConverter {
    public static List<ColorDto> toColorDto(List<Color> colorList, List<Product> productList) {
        return colorList.stream().map(color ->
                new ColorDto(
                        color.getId(),
                        color.getName(),
                        productList.stream().filter(product -> product.getColor().getId() == color.getId()).collect(Collectors.toList()).size()
                )).collect(Collectors.toList());
    }
}
