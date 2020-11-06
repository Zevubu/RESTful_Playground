DROP DATABASE IF EXISTS Rest_Test;
CREATE DATABASE Rest_Test;

USE Rest_Test;

DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
	user_name varchar(50) NOT NULL,
    password varchar(150) NOT NULL,
    user_type varchar(50) NOT NULL,
    dob date NOT NULL,
    verified boolean
);

INSERT INTO users(first_name, last_name, user_name, password, user_type, dob, verified) VALUES("Jim", "Havington", "Jimmy", "password","user","2020-08-23",true);

SELECT * FROM users;