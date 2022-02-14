package com.ahmedsalihh.hepsiburadabackend.controller;

import com.ahmedsalihh.hepsiburadabackend.repository.ProductRepository;
import com.ahmedsalihh.hepsiburadabackend.model.Product;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.ArgumentMatchers.isA;
import static org.mockito.Mockito.doReturn;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
class ProductControllerTest {

    @Autowired
    private ProductController productController;

    @MockBean
    private ProductRepository productRepository;

    private MockMvc mockMvc;

    private Page<Product> pageMock;

    @BeforeEach
    void setUp() {
        this.mockMvc = MockMvcBuilders.standaloneSetup(productController).build();
        pageMock = Mockito.mock(Page.class);
    }

    @Test
    void getAllProducts() throws Exception {

        doReturn(pageMock)
                .when(productRepository)
                .findByNameContaining(isA(String.class), isA(Pageable.class));

        mockMvc.perform(get("/products")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    void getAllProductsWithColorFilter() throws Exception {
        Page<Product> pageMock = Mockito.mock(Page.class);
        doReturn(pageMock)
                .when(productRepository)
                .findBySelectedCriteriaWithColor(isA(String.class), isA(Long.class), isA(Pageable.class));

        mockMvc.perform(get("/products?color=1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    void getAllProductsWithBrandFilter() throws Exception {
        Page<Product> pageMock = Mockito.mock(Page.class);
        doReturn(pageMock)
                .when(productRepository)
                .findBySelectedCriteriaWithBrand(isA(String.class), isA(Long.class), isA(Pageable.class));

        mockMvc.perform(get("/products?brand=1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    void getAllProductsWithAllFilter() throws Exception {
        Page<Product> pageMock = Mockito.mock(Page.class);
        doReturn(pageMock)
                .when(productRepository)
                .findBySelectedCriteria(isA(String.class), isA(Long.class), isA(Long.class), isA(Pageable.class));

        mockMvc.perform(get("/products?brand=1&color=1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }
}