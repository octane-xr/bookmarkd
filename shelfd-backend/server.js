import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const GOOGLE_BOOKS_API_KEY = process.env.GOOGLE_BOOKS_API_KEY;

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/api/book/:db_title",(req,res) => {
    console.log(`Conectado a ${req.params.db_title}`); 
    res.json({ message: `Libro solicitado: ${req.params.db_title}` });
}); 

app.get('/api/search', async (req, res) => {
  const { query } = req.query;
  const startIndex = req.query.startIndex || 0;
  const maxResults = req.query.maxResults || 20;

  if (!query) {
    return res.status(400).json({ error: "A search term is required" });
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&startIndex=${startIndex}&maxResults=${maxResults}&key=${GOOGLE_BOOKS_API_KEY}`
    );

    const data = await response.json();

    if (!data.items) {
      return res.status(404).json({ error: "No books found" });
    }

    const books = data.items.map(book => ({
      id: book.id,
      title: book.volumeInfo.title,
      db_title: book.volumeInfo.title.toLowerCase().replace(/\s+/g, '-'),
      author: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown',
      rating: book.volumeInfo.averageRating || 0,
      ratingsCount: book.volumeInfo.ratingsCount || 0,
      description: book.volumeInfo.description || "No description",
      publishedDate: book.volumeInfo.publishedDate || "Unknown",
      cover: book.volumeInfo.imageLinks?.thumbnail || "https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif"
    }));

    res.json(books);
  } catch (error) {
    console.error("Error searching for books: ", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.get('/api/all-books', async (req, res) => {
  const startIndex = req.query.startIndex || 0; 
  const maxResults = req.query.maxResults || 40;

  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&startIndex=${startIndex}&maxResults=${maxResults}&key=${GOOGLE_BOOKS_API_KEY}`
    );

    const data = await response.json();

    if (!data.items) {
      return res.status(404).json({ error: "No books found" });
    }

    const books = data.items.map(book => ({
      id: book.id,
      title: book.volumeInfo.title,
      db_title: book.volumeInfo.title.toLowerCase().replace(/\s+/g, '-'),
      author: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown',
      rating: book.volumeInfo.averageRating || 0,
      ratingsCount: book.volumeInfo.ratingsCount || 0,
      description: book.volumeInfo.description || "No description",
      publishedDate: book.volumeInfo.publishedDate || "Unknown",
      cover: book.volumeInfo.imageLinks?.thumbnail || "https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif"
    }));

    books.sort((a, b) => a.title.localeCompare(b.title));

    res.json(books);
  } catch (error) {
    console.error("Error fetching all books: ", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.get('/api/top-books', async (req, res) => {
  const startIndex = req.query.startIndex || 0; // Paginación opcional
  const maxResults = req.query.maxResults || 40; // Google Books permite hasta 40 libros por búsqueda

  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&orderBy=newest&startIndex=${startIndex}&maxResults=${maxResults}&key=${GOOGLE_BOOKS_API_KEY}`
    );

    const data = await response.json();

    if (!data.items) {
      return res.status(404).json({ error: "No books found" });
    }

    // Extraer y filtrar información
    let books = data.items.map(book => ({
      id: book.id,
      title: book.volumeInfo.title,
      db_title: book.volumeInfo.title.toLowerCase().replace(/\s+/g, '-'),
      author: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown',
      rating: book.volumeInfo.averageRating || 0,
      ratingsCount: book.volumeInfo.ratingsCount || 0,
      description: book.volumeInfo.description || "No description",
      publishedDate: book.volumeInfo.publishedDate || "Unknown",
      cover: book.volumeInfo.imageLinks?.thumbnail || "https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif"
    }));

    books = books.sort((a, b) => b.ratingsCount - a.ratingsCount);

    res.json(books.slice(0, 10));
  } catch (error) {
    console.error("Error fetching top books: ", error);
    res.status(500).json({ error: "Server error" });
  }
});




app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});

