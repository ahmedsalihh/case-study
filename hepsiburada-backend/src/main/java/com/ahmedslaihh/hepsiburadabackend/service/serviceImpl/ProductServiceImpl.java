package com.ahmedslaihh.hepsiburadabackend.service.serviceImpl;

import com.ahmedslaihh.hepsiburadabackend.converter.BrandConverter;
import com.ahmedslaihh.hepsiburadabackend.converter.ColorConverter;
import com.ahmedslaihh.hepsiburadabackend.dto.ProductDto;
import com.ahmedslaihh.hepsiburadabackend.model.Brand;
import com.ahmedslaihh.hepsiburadabackend.model.Color;
import com.ahmedslaihh.hepsiburadabackend.model.Product;
import com.ahmedslaihh.hepsiburadabackend.repository.BrandRepository;
import com.ahmedslaihh.hepsiburadabackend.repository.ColorRepository;
import com.ahmedslaihh.hepsiburadabackend.repository.ProductRepository;
import com.ahmedslaihh.hepsiburadabackend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final ColorRepository colorRepository;
    private final BrandRepository brandRepository;

    @Autowired
    public ProductServiceImpl(final ProductRepository productRepository, final ColorRepository colorRepository, final BrandRepository brandRepository) {
        this.productRepository = productRepository;
        this.colorRepository = colorRepository;
        this.brandRepository = brandRepository;
    }

    @Override
    public ProductDto getProducts(int page,
                                  int size,
                                  String name,
                                  Long color,
                                  Long brand,
                                  String orderBy,
                                  String direction) {
        Pageable paging = PageRequest.of(page, size, getSorting(orderBy, direction));

        Page<Product> pageProducts;
        if (color == null) {
            if (brand == null) {
                pageProducts = productRepository.findAllByNameContaining(name, paging);
            } else {
                pageProducts = productRepository.findBySelectedCriteriaWithBrand(name, brand, paging);
            }
        } else if (brand == null) {
            pageProducts = productRepository.findBySelectedCriteriaWithColor(name, color, paging);
        } else {
            pageProducts = productRepository.findBySelectedCriteria(name, brand, color, paging);
        }

        List<Product> productList = pageProducts.getContent();
        List<Long> productListIds = productList.stream().map(product -> product.getId()).collect(Collectors.toList());
        List<Color> colors = colorRepository.getColorsByProductIds(productListIds);
        List<Brand> brands = brandRepository.getBrandsByProductIds(productListIds);

        ProductDto productDto = new ProductDto();
        productDto.setProductList(productList);
        productDto.setColors(ColorConverter.toColorDto(colors, productList));
        productDto.setBrands(BrandConverter.toBrandDto(brands, productList));

        return productDto;
    }

    private Sort getSorting(String orderBy, String direction) {
        if (direction.equals("ASC")) {
            return Sort.by(orderBy).ascending();
        }
        return Sort.by(orderBy).descending();
    }
}
