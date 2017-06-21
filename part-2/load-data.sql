DROP TABLE IF EXISTS temp;

CREATE TABLE temp (
  name varchar(40),
  price money,
  section varchar(40)
);

COPY temp (name, price, section) FROM :csvPath DELIMITERS ',' CSV HEADER;

INSERT INTO section (name)
SELECT DISTINCT section FROM temp;

INSERT INTO item (name, price)
SELECT name, price FROM temp;

INSERT INTO item_section
SELECT item.id AS item_id, section.id AS section_id FROM temp
JOIN section ON section.name = temp.section
JOIN item ON item.name = temp.name;

DROP TABLE temp;

INSERT INTO shopper (name) VALUES ('Peter'), ('Tony'), ('Steve');

INSERT INTO purchase (shopper_id, creation_date)
VALUES  (1, now()),
        (2, now() + interval '1 hour'),
        (3, now() + interval '2 hours');

INSERT INTO item_purchase (item_id, purchase_id)
VALUES  (1, 1),
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
