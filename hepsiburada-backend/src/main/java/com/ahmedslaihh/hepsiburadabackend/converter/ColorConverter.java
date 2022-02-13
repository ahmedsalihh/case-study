package com.ahmedslaihh.hepsiburadabackend.converter;

import com.ahmedslaihh.hepsiburadabackend.dto.ColorDto;
import com.ahmedslaihh.hepsiburadabackend.model.Color;
import com.ahmedslaihh.hepsiburadabackend.model.Product;

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
