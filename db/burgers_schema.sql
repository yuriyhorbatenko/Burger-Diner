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


INSERT INTO menu (name) VALUES ('Cheeseburger');
INSERT INTO menu (name) VALUES ('Bacon Cheeseburger');
INSERT INTO menu (name) VALUES ('Veggie Burger');
INSERT INTO menu (name) VALUES ('French Fries');
INSERT INTO menu (name) VALUES ('Cajun Style Fries');
INSERT INTO menu (name) VALUES ('Banana Milkshake');
INSERT INTO menu (name) VALUES ('Coffee Milkshake');