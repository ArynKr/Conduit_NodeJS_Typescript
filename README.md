# Conduit (Medium clone build on realworld.io)

## Technologies Used

1. NodeJS - Platform
2. Typescript - Programming Language
3. PostgreSQL - Database (can use mySQL/SQLite as well)
4. TypeORM - ORM

## DataBase Setup

1. Enter `psql` as admin
2. Create Database

```psql
create database conduit;
create user conduit with encrypted password 'conduit';
grant all privileges on database conduit to conduit;
```