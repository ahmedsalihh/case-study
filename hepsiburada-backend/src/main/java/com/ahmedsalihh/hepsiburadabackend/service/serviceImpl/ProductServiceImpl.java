package com.ahmedsalihh.hepsiburadabackend.service.serviceImpl;

import com.ahmedsalihh.hepsiburadabackend.converter.BrandConverter;
import com.ahmedsalihh.hepsiburadabackend.converter.ColorConverter;
import com.ahmedsalihh.hepsiburadabackend.model.Brand;
import com.ahmedsalihh.hepsiburadabackend.model.ProductRequest;
import com.ahmedsalihh.hepsiburadabackend.repository.ColorRepository;
import com.ahmedsalihh.hepsiburadabackend.service.ProductService;
import com.ahmedsalihh.hepsiburadabackend.dto.ProductDto;
import com.ahmedsalihh.hepsiburadabackend.model.Color;
import com.ahmedsalihh.hepsiburadabackend.model.Product;
import com.ahmedsalihh.hepsiburadabackend.repository.BrandRepository;
import com.ahmedsalihh.hepsiburadabackend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

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
    public ProductDto getProducts(ProductRequest request) {
        Pageable paging = PageRequest.of(request.getPage(), request.getSize(), getSorting(request.getOrderBy(), request.getDirection()));

        Page<Product> pageProducts;
        if (request.getColor() == null) {
            if (request.getBrand() == null) {
                pageProducts = productRepository.findByNameContaining(request.getName(), paging);
            } else {
                pageProducts = productRepository.findBySelectedCriteriaWithBrand(request.getName(), request.getBrand(), paging);
            }
        } else if (request.getBrand() == null) {
            pageProducts = productRepository.findBySelectedCriteriaWithColor(request.getName(), request.getColor(), paging);
        } else {
            pageProducts = productRepository.findBySelectedCriteria(request.getName(), request.getBrand(), request.getColor(), paging);
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
        if (direction.equalsIgnoreCase("ASC")) {
            return Sort.by(orderBy).ascending();
        }
        return Sort.by(orderBy).descending();
    }
}
