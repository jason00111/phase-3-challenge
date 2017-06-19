DROP TABLE IF EXISTS item;
DROP TABLE IF EXISTS section;
DROP TABLE IF EXISTS shopper;
DROP TABLE IF EXISTS purchase;
DROP TABLE IF EXISTS item_section;
DROP TABLE IF EXISTS item_purchase;

CREATE TABLE item (
  id serial PRIMARY KEY,
  name varchar(40),
  price money
);

CREATE TABLE section (
  id serial PRIMARY KEY,
  name varchar(40)
);

CREATE TABLE shopper (
  id serial PRIMARY KEY,
  name varchar(40)
);

CREATE TABLE purchase (
  id serial PRIMARY KEY,
  shopper_id int REFERENCES shopper,
  creation_date timestamp
);

CREATE TABLE item_section (
  item_id int REFERENCES item,
  section_id int REFERENCES section
);

CREATE TABLE item_purchase (
  item_id int REFERENCES item,
  purchase_id int REFERENCES purchase
);
