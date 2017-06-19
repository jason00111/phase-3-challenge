DROP TABLE IF EXISTS item_purchase;
DROP TABLE IF EXISTS item;
DROP TABLE IF EXISTS purchase;

CREATE TABLE item (
  id serial PRIMARY KEY,
  name varchar(40),
  price money,
  section varchar(40)
);

CREATE TABLE purchase (
  id serial PRIMARY KEY,
  shopper varchar(40),
  creation_date timestamp DEFAULT now()
);

CREATE TABLE item_purchase (
  item_id int REFERENCES item,
  purchase_id int REFERENCES purchase
);
