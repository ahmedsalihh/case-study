CREATE TABLE `color` (
  `id` bigint NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `brand` (
  `id` bigint NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `product` (
  `id` bigint NOT NULL,
  `discount` int NOT NULL,
  `image` longblob,
  `name` varchar(255) DEFAULT NULL,
  `price` float NOT NULL,
  `brand` bigint DEFAULT NULL,
  `color` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKti0lsgnnoerhclcve20iho3un` (`brand`),
  KEY `FKd9xfvu19wt1cwxbr5ax0gwkpk` (`color`),
  CONSTRAINT `FKd9xfvu19wt1cwxbr5ax0gwkpk` FOREIGN KEY (`color`) REFERENCES `color` (`id`),
  CONSTRAINT `FKti0lsgnnoerhclcve20iho3un` FOREIGN KEY (`brand`) REFERENCES `brand` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `color` (`id`,`name`) VALUES (1,'Lacivert');
INSERT INTO `color` (`id`,`name`) VALUES (2,'Sarı');
INSERT INTO `color` (`id`,`name`) VALUES (3,'Siyah');
INSERT INTO `color` (`id`,`name`) VALUES (4,'Beyaz');
INSERT INTO `color` (`id`,`name`) VALUES (5,'Kırmızı');

INSERT INTO `brand` (`id`,`name`) VALUES (1,'Apple');
INSERT INTO `brand` (`id`,`name`) VALUES (2,'Samsung');
INSERT INTO `brand` (`id`,`name`) VALUES (3,'Nokia');
INSERT INTO `brand` (`id`,`name`) VALUES (4,'LG');
INSERT INTO `brand` (`id`,`name`) VALUES (5,'Huawei');
INSERT INTO `brand` (`id`,`name`) VALUES (6,'Xiaomi');
INSERT INTO `brand` (`id`,`name`) VALUES (7,'General Mobile');

INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (1,12,NULL,'Apple iPhone 11',900,1,2);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (2,5,NULL,'Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...',900,1,3);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (3,12,NULL,'iPhone 11 Kırmızı Kılıf',1200,2,3);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (4,20,NULL,'Apple Telefon',1500,1,4);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (5,4,NULL,'Apple iPhone 11',500,1,2);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (6,15,NULL,'Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...',1900,2,2);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (7,10,NULL,'iPhone 11 Kırmızı Kılıf',200,1,1);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (8,12,NULL,'Apple iPhone 11',900,1,2);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (9,5,NULL,'Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...',900,1,3);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (10,12,NULL,'iPhone 11 Kırmızı Kılıf',1200,2,3);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (11,20,NULL,'Apple Telefon',1500,1,4);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (12,4,NULL,'Apple iPhone 11',500,1,2);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (13,15,NULL,'Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...',1900,2,2);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (14,10,NULL,'iPhone 11 Kırmızı Kılıf',200,1,2);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (15,12,NULL,'Apple iPhone 11',900,1,2);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (16,5,NULL,'Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...',900,1,3);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (17,12,NULL,'iPhone 11 Kırmızı Kılıf',1200,2,3);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (18,20,NULL,'Apple Telefon',1500,1,4);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (19,4,NULL,'Apple iPhone 11',500,1,2);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (20,15,NULL,'Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...',1900,2,2);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (21,10,NULL,'iPhone 11 Kırmızı Kılıf',500,1,1);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (22,12,NULL,'Apple iPhone 11',900,1,2);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (23,5,NULL,'Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...',900,1,3);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (24,12,NULL,'iPhone 11 Kırmızı Kılıf',1200,2,3);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (25,20,NULL,'Apple Telefon',1500,1,4);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (26,4,NULL,'Apple iPhone 11',500,1,2);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (27,15,NULL,'Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...',1900,2,2);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (28,10,NULL,'iPhone 11 Kırmızı Kılıf',200,1,1);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (29,12,NULL,'Apple iPhone 11',900,1,2);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (30,5,NULL,'Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...',900,1,3);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (31,12,NULL,'iPhone 11 Kırmızı Kılıf',1200,2,3);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (32,20,NULL,'Apple Telefon',1500,1,4);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (33,4,NULL,'Apple iPhone 11',500,1,2);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (34,15,NULL,'Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...',1900,2,2);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (35,10,NULL,'iPhone 11 Kırmızı Kılıf',200,1,2);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (36,12,NULL,'Apple iPhone 11',900,3,2);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (37,5,NULL,'Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...',900,3,3);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (38,12,NULL,'iPhone 11 Kırmızı Kılıf',1200,2,3);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (39,20,NULL,'Apple Telefon',1500,2,4);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (40,4,NULL,'Apple iPhone 11',500,1,4);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (41,15,NULL,'Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...',1900,2,3);
INSERT INTO `product` (`id`,`discount`,`image`,`name`,`price`,`brand`,`color`) VALUES (42,10,NULL,'iPhone 11 Kırmızı Kılıf',200,3,2);
