sudo -u postgres psql
-- password kiritasiz


-- database yaratish
CREATE DATABASE books_store;


-- DATABASE GA ulanish
\c books_store;-- DATABASE GA ulanish

-- Users jadvali 
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(40) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR (100) NOT NULL,
    created_at TIMESTAMP
);

-- Books jadvali 
CREATE TABLE IF NOT EXISTS books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    author VARCHAR(30) NOT NULL,
    publication_date DATE,
    genre VARCHAR(60),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
);

-- comments jadvali
CREATE TABLE IF NOT EXISTS comments (
    id SERIAL PRIMARY KEY,
    text text NOT NULL,
    created_at DATE,
    book_id INT,
    user_id INT,
    FOREIGN KEY (book_id) REFERENCES books(id)
    ON DELETE CASCADE ON UPDATE NO ACTION,
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE CASCADE ON UPDATE NO ACTION
);

-- photos jadvali
CREATE TABLE IF NOT EXISTS photos (
    id SERIAL PRIMARY KEY,
    url VARCHAR(60) NOT NULL,
    book_id INT,
    FOREIGN KEY (book_id) REFERENCES books(id)
    ON DELETE CASCADE ON UPDATE NO ACTION
);







