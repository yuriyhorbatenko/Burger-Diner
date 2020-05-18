DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE menu
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(100) NULL,
    price DECIMAL(10,2) NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

INSERT INTO menu (name, price, devoured) VALUES ('Hamburger', 7.85, true);
INSERT INTO menu (name, price, devoured) VALUES ('Cheeseburger', 8.55, true);
INSERT INTO menu (name, price, devoured) VALUES ('Bacon Burger', 8.95, true);
INSERT INTO menu (name, price, devoured) VALUES ('Bacon Cheeseburger', 9.65, true);
INSERT INTO menu (name, price) VALUES ('Veggie Burger', 6.05);
INSERT INTO menu (name, price) VALUES ('French Fries', 4.69);
INSERT INTO menu (name, price) VALUES ('Cajun Style Fries', 4.69);
INSERT INTO menu (name, price) VALUES ('Banana Milkshake', 5.05);
INSERT INTO menu (name, price) VALUES ('Chocolate Milkshake', 5.05);
INSERT INTO menu (name, price) VALUES ('Coffee Milkshake', 5.05);