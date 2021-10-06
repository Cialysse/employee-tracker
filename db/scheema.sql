drop database if exists employees;

create database employees;

use employees;

create TABLE department (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY , 
    name VARCHAR(15)UNIQUE not null 
);

create TABLE role (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30)UNIQUE not null,
    salary decimal unsigned not null,
    deprtment_id INT UNSIGNED not null,
    INDEX dep_ind (department_id),
    constraint fk_department foreign key (department_id) references department(id) on delete cascade
);