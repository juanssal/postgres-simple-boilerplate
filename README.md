# postgres-simple-boilerplate
Simple inventory management app.

## Description

The idea is to have an inventory (list of items) with:
- a simple handle to add or substract quantities for each
- an option to delete an item
- an option to create an item
- a submit button that will save the state of the inventory at a given date
- an option to go back in time to see inventory at other times

## Postgres setup

Installing postgres:
https://www.postgresql.org/download/linux/ubuntu/

Accessing the superuser postgres:
'''
sudo -i -u postgres
'''

Accessing the client

'''
psql
'''

Creating user:

'''
CREATE ROLE inventory WITH LOGIN PASSWORD 'inventory';
'''

Creating database:

'''
CREATE DATABASE inventory OWNER inventory;
'''

Exit superuser session with 'exit' command, then enter newly create database with user:

'''
psql -U inventory -d inventory
'''

Create a table:
'''
CREATE TABLE inventory (
product varchar NOT NULL,
price integer NOT NULL,
quantity integer NOT NULL,
date date);
'''

## Postgres client setup


## Postgres queries

