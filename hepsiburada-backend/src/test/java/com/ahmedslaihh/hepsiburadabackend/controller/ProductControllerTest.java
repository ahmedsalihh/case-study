package com.ahmedslaihh.hepsiburadabackend.controller;

import com.ahmedslaihh.hepsiburadabackend.model.Color;
import com.ahmedslaihh.hepsiburadabackend.repository.BrandRepository;
import com.ahmedslaihh.hepsiburadabackend.repository.ColorRepository;
import com.ahmedslaihh.hepsiburadabackend.repository.ProductRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.junit.jupiter.api.Assertions.*;

@WebMvcTest(ProductController.class)
class ProductControllerTest {

    @Autowired
    private ProductController productController;

    @MockBean
    private ProductRepository productRepository;

    @MockBean
    private ColorRepository colorRepository;

    @MockBean
    private BrandRepository brandRepository;

    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        this.mockMvc = MockMvcBuilders.standaloneSetup(productController).build();
//        Color c1 = new Color(1,"Sarı");
    }

    @Test
    void getAllProducts() {

    }
}