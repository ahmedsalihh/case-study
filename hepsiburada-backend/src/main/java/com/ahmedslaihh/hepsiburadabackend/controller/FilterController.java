package com.ahmedslaihh.hepsiburadabackend.controller;

import com.ahmedslaihh.hepsiburadabackend.model.Brand;
import com.ahmedslaihh.hepsiburadabackend.model.Color;
import com.ahmedslaihh.hepsiburadabackend.service.FilterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/filter")
public class FilterController {

    private final FilterService filterService;

    @Autowired
    public FilterController(FilterService filterService) {
        this.filterService = filterService;
    }

    @GetMapping("/colors")
    public List<Color> getColorFilters() {
        return filterService.getColorFilters();
    }

    @GetMapping("/brands")
    public List<Brand> getBrandsFilters() {
        return filterService.getBrandFilters();
    }

}
