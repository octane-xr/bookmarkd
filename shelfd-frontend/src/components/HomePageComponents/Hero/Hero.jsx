import React, { useEffect, useState, useCallback } from 'react';
import './Hero.scss';

const Hero = () => {
  const [offset, setOffset] = useState(0);
  const [books, setBooks] = useState([]);
  const [featuredBooks, setTrendingBooks] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
  
      useEffect(()=>{
          const fetchTrendingBooks = async () => {
              try{
                  const response = await fetch("http://localhost:8000/api/top-books");
                  if (!response.ok) throw new Error("Cannot get books");
  
                  const data = await response.json();
                  setTrendingBooks(data);
              }catch(err){
                  setError(err.message);
              } finally{
                  setLoading(false);
              }
          };
          
          fetchTrendingBooks();
      },[])
  
  
      

  //sorprendentemente anda, no se como, pero anda. Revisar igualmente.
  //si se rompe, dejarlo asi, pero revisar una vez implementado el back

  // primero, movemos createInfiniteBooks dentro del componente pero fuera de cualquier efecto
  // y lo envolvemos en useCallback
  const createInfiniteBooks = useCallback(() => {
    return Array(30).fill(featuredBooks).flat();
  }, [featuredBooks]); // featuredBooks como dependencia

  useEffect(() => {
    setBooks(createInfiniteBooks());
  }, [createInfiniteBooks]); // ahora incluimos createInfiniteBooks como dependencia


  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prev => {
        const newOffset = prev + 1;
        // ajustamos el punto de reset basado en la cantidad total de libros
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

  //esta funcion de mierda funciona pero no, no se por que tarda tanto en moverse
  //y deja de ser aleatorio. Revisar.
  const getCenterBookIndex = useCallback(() => {
    const gridSize = featuredBooks.length;
    // calculamos el indice basado en el offset actual
    const centerPosition = Math.floor(offset / 200);
    // usamos el modulo para mantener el indice dentro del rango de libros disponibles
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