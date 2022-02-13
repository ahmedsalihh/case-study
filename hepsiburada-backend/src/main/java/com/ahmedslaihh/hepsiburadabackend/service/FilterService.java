package com.ahmedslaihh.hepsiburadabackend.service;

import com.ahmedslaihh.hepsiburadabackend.model.Brand;
import com.ahmedslaihh.hepsiburadabackend.model.Color;

import java.util.List;

public interface FilterService {

    List<Color> getColorFilters();
    List<Brand> getBrandFilters();
}
