package com.ahmedslaihh.hepsiburadabackend.repository;

import com.ahmedslaihh.hepsiburadabackend.model.Color;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ColorRepository extends JpaRepository<Color, Long> {
    @Query(value = "select b.id,b.name from brand b left join product p on p.color = b.id where p.id in ?1 group by b.id",
            nativeQuery = true)
    List<Color> getColorsByProductIds(List<Long> productIds);
}
