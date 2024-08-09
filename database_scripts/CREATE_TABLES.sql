-- @block
CREATE TABLE books (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  pros TEXT,
  cons TEXT,
  file_url VARCHAR(255),
  amazon_product_id VARCHAR(20),
  google_play_product_id VARCHAR(20),
  apple_product_id VARCHAR(20)
);
CREATE INDEX book_index ON books(id);
-- @block
CREATE TABLE great_books (
  ranking INT NOT NULL UNIQUE,
  book_id INT NOT NULL UNIQUE
);
-- @block
CREATE TABLE good_books (
  ranking INT NOT NULL UNIQUE,
  book_id INT NOT NULL UNIQUE
);
-- @block
CREATE TABLE alright_books (
  ranking INT NOT NULL UNIQUE,
  book_id INT NOT NULL UNIQUE
);
