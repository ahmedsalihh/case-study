package com.ahmedslaihh.hepsiburadabackend.service.serviceImpl;

import com.ahmedslaihh.hepsiburadabackend.model.Brand;
import com.ahmedslaihh.hepsiburadabackend.model.Color;
import com.ahmedslaihh.hepsiburadabackend.repository.BrandRepository;
import com.ahmedslaihh.hepsiburadabackend.repository.ColorRepository;
import com.ahmedslaihh.hepsiburadabackend.service.FilterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilterServiceImpl implements FilterService {

    private final ColorRepository colorRepository;
    private final BrandRepository brandRepository;

    @Autowired
    public FilterServiceImpl(final ColorRepository colorRepository, final BrandRepository brandRepository) {
        this.colorRepository = colorRepository;
        this.brandRepository = brandRepository;
    }

    @Override
    public List<Color> getColorFilters() {
        return colorRepository.findAll();
    }

    @Override
    public List<Brand> getBrandFilters() {
        return brandRepository.findAll();
    }
}
