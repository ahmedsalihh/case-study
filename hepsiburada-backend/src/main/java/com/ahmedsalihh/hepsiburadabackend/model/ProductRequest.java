package com.ahmedsalihh.hepsiburadabackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductRequest {
    private int page;
    private int size = 12;
    private String name;
    private Long color;
    private Long brand;
    private String orderBy;
    private String direction;

}
