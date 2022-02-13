package com.ahmedslaihh.hepsiburadabackend.repository;

import com.ahmedslaihh.hepsiburadabackend.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends PagingAndSortingRepository<Product, Long> {
    @Query(value = "SELECT * FROM product WHERE product.name LIKE CONCAT('%', ?1, '%') AND brand = ?2 AND color = ?3 \n-- #pageable\n",
            countQuery = "SELECT count(*) FROM product WHERE product.name LIKE CONCAT('%', ?1, '%') AND brand = ?2 AND color = ?3",
            nativeQuery = true)
    Page<Product> findBySelectedCriteria(String name,
                                         Long brand,
                                         Long color,
                                         Pageable pageable);
    @Query(value = "SELECT * FROM product WHERE product.name LIKE CONCAT('%', ?1, '%') AND color = ?2 \n-- #pageable\n",
            countQuery = "SELECT count(*) FROM product WHERE product.name LIKE CONCAT('%', ?1, '%') AND color = ?2",
            nativeQuery = true)
    Page<Product> findBySelectedCriteriaWithColor(String name,
                                         Long color,
                                         Pageable pageable);

    @Query(value = "SELECT * FROM product WHERE product.name LIKE CONCAT('%', ?1, '%') AND brand = ?2 \n-- #pageable\n",
            countQuery = "SELECT count(*) FROM product WHERE product.name LIKE CONCAT('%', ?1, '%') AND brand = ?2",
            nativeQuery = true)
    Page<Product> findBySelectedCriteriaWithBrand(String name,
                                         Long brand,
                                         Pageable pageable);

    @Query(value = "SELECT * FROM product WHERE product.name LIKE CONCAT('%', ?1, '%') \n-- #pageable\n",
            countQuery = "SELECT count(*) FROM product WHERE product.name LIKE CONCAT('%', ?1, '%')",
            nativeQuery = true)
    Page<Product> findAllByNameContaining(String name, Pageable pageable);
}
