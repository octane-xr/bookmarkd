import React, { useState, useEffect } from 'react';
import './PopularBooks.scss';

const PopularBooks = () => {
    const [popularBooks, setPopularBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(true);
    const booksPerPage = 5;

    useEffect(() => {
        const fetchPopularBooks = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/top-books-week');
                const data = await response.json();
                setPopularBooks(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching popular books:', error);
                setLoading(false);
            }
        };

        fetchPopularBooks();
    }, []);

    const totalPages = Math.ceil(popularBooks.length / booksPerPage);

    const handleNextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const handlePrevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="popular-books">
            <h2>Popular this month</h2>
            
            <div className="carousel-container">
                <button 
                    className="carousel-button prev" 
                    onClick={handlePrevPage}
                    disabled={currentPage === 0}
                >
                    &#8249;
                </button>

                <div className="books-grid">
                    {popularBooks
                        .slice(currentPage * booksPerPage, (currentPage + 1) * booksPerPage)
                        .map((book) => (
                            <div key={book.id} className="book-card">
                                <div className="book-cover">
                                    <img src={book.cover} alt={book.title} />
                                </div>
                                <div className="book-info">
                                    <h3>{book.title}</h3>
                                    <p>{book.author}</p>
                                    <div className="book-stats">
                                        <span>★ {book.rating}</span>
                                        <span>{book.reads.toLocaleString()} reads</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

                <button 
                    className="carousel-button next" 
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages - 1}
                >
                    &#8250;
                </button>
            </div>

            <div className="carousel-dots">
                {[...Array(totalPages)].map((_, index) => (
                    <span 
                        key={index} 
                        className={`dot ${index === currentPage ? 'active' : ''}`}
                        onClick={() => setCurrentPage(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default PopularBooks;