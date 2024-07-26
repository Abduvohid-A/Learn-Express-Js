const booksAll = "SELECT * FROM books";
const bookOnly = "SELECT * FROM books WHERE id = $1";
const userOnly = "SELECT * FROM users WHERE id = $1";
const createUser =
  "INSERT INTO users (username, email, password, created_at) VALUES ($1, $2, $3, $4) RETURNING *";
const getEmail = "SELECT * FROM users WHERE email = $1";
const addBook =
  "INSERT INTO books (title, author, publication_date, genre, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *";
const changeBook =
  "UPDATE books set publication_date = $1 WHERE id = $2 RETURNING *";
const delBook = "DELETE FROM books WHERE id = $1 RETURNING *";
const allPhotos = "SELECT * FROM photos";
const allComments = "SELECT * FROM comments";

export {
  booksAll,
  delBook,
  bookOnly,
  createUser,
  getEmail,
  addBook,
  userOnly,
  changeBook,
  allPhotos,
  allComments,
};
