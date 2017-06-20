COPY item (name, price, section) FROM :csvPath DELIMITERS ',' CSV HEADER;

INSERT INTO purchase (shopper) VALUES ('Peter'), ('Tony'), ('Steve');

INSERT INTO item_purchase (item_id, purchase_id)
VALUES (1, 1),
(2, 1),
(5, 1),
(6, 1),
(14, 1),
(2, 2),
(5, 2),
(9, 2),
(9, 2),
(1, 3),
(12, 3),
(4, 3);
