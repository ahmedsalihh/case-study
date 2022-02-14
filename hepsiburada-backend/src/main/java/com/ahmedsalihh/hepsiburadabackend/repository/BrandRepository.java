package com.ahmedsalihh.hepsiburadabackend.repository;

import com.ahmedsalihh.hepsiburadabackend.model.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BrandRepository extends JpaRepository<Brand, Long> {
    @Query(value = "select c.id,c.name from color c left join product p on p.color = c.id where p.id in ?1 group by c.id",
            nativeQuery = true)
    List<Brand> getBrandsByProductIds(List<Long> productIds);
}
