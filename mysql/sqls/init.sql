CREATE DATABASE IF NOT EXISTS dockerapp;

USE dockerapp;

CREATE TABLE todo (
    id INTEGER AUTO_INCREMENT PRIMARY KEY ,
    value TEXT
);