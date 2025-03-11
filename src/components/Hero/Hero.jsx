import React, { useEffect, useState, useCallback } from 'react';
import './Hero.scss';

const Hero = () => {
  const [offset, setOffset] = useState(0);
  const [books, setBooks] = useState([]);

  const featuredBooks = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg",
      rating: 4.2
    },
    {
      id: 2,
      title: "Tomorrow, and Tomorrow, and Tomorrow",
      author: "Gabrielle Zevin",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1636978687i/58784475.jpg",
      rating: 4.3
    },
    {
      id: 3,
      title: "Demon Copperhead",
      author: "Barbara Kingsolver",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660050779i/60194162.jpg",
      rating: 4.5
    },
    {
      id: 4,
      title: "Lessons in Chemistry",
      author: "Bonnie Garmus",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1634748496i/58065033.jpg",
      rating: 4.4
    },
    {
      id: 5,
      title: "House of Sky and Breath",
      author: "Sarah J. Maas",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1633097753i/40132775.jpg",
      rating: 4.6
    },
    {
      id: 6,
      title: "Atlas: The Story of Pa Salt",
      author: "Lucinda Riley",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1666535049i/58528573.jpg",
      rating: 4.1
    }
  ];

  // Primero, movemos createInfiniteBooks dentro del componente pero fuera de cualquier efecto
  // y lo envolvemos en useCallback
  const createInfiniteBooks = useCallback(() => {
    return Array(30).fill(featuredBooks).flat();
  }, [featuredBooks]); // featuredBooks como dependencia

  useEffect(() => {
    setBooks(createInfiniteBooks());
  }, [createInfiniteBooks]); // Ahora incluimos createInfiniteBooks como dependencia

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prev => {
        const newOffset = prev + 1;
        // Ajustamos el punto de reset basado en la cantidad total de libros
        if (newOffset >= featuredBooks.length * 200) {
          setBooks(prevBooks => {
            const booksToMove = prevBooks.slice(0, featuredBooks.length);
            return [...prevBooks.slice(featuredBooks.length), ...booksToMove];
          });
          return 0;
        }
        return newOffset;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [featuredBooks.length]);

  const getCenterBookIndex = useCallback(() => {
    const gridSize = featuredBooks.length;
    // Calculamos el índice basado en el offset actual
    const centerPosition = Math.floor(offset / 200);
    // Usamos el módulo para mantener el índice dentro del rango de libros disponibles
    return centerPosition % featuredBooks.length;
  }, [offset, featuredBooks.length]);

  return (
    <section className="hero">
      <div className="hero__content">
        <h1 id="hero-title">bookmarkd.</h1>
        <h1>Track your reading journey</h1>
        <p>Rate, review and share your favorite books with friends</p>
        <button className="hero__cta">Get Started</button>
      </div>
      <div className="hero__featured">
        <div className="hero__featured-grid" style={{ transform: `translateY(-${offset}px)` }}>
          {books.map((book, index) => (
            <div 
              key={`${book.id}-${index}`}
              className={`hero__book ${index === getCenterBookIndex() ? 'active' : ''}`}
            >
              <div className="hero__book-cover">
                <img src={book.cover} alt={book.title} />
              </div>
              {index === getCenterBookIndex() && (
                <div className="hero__book-info">
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                  <div className="hero__book-rating">★ {book.rating}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;