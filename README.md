# Creating A Database Architect For Employee Review Application

A place for people to come and review their employees.

## Users

We need a number of things from users.
Their email, password and username(optional?).

We could also get their First and Last names. In order to personalize some information (maybe we need to send an email or something.)

How to create a table in PostgreSQL

```
CREATE TABLE table_name (
column name + data type + constraints if any
)


// Without constraints
CREATE TABLE person (
id int,
first_name VARCHAR(50),
last_name VARCHAR(50),
gender VARCHAR(6),
date_of_birth TIMESTAMP,
)

// With Contraints

CREATE TABLE person (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  first_name VARHCAR(50) NOT NULL
  last_name VARCHAR(50) NOT NULL,
  gender VARCHAR(6) NOT NULL,
  date_of_birth TIMESTAMP NOT NULL,
)

```

## Users Table

| Column    | Type    | Collation | Nullable | Default |
| --------- | ------- | --------- | -------- | ------- |
| id        | bigint  |           |          |         |
| email     | VARCHAR | Unique    |          |         |
| password  | VARCHAR | Hashed    |          |         |
| username  | VARCHAR |           |          |         |
| firstname | VARCHAR |           |          |         |
| lastname  | VARCHAR |           |          |         |
