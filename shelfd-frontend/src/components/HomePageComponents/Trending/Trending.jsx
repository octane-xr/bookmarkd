import React from "react";
import './Trending.scss';
import { FaBook, FaReadme, FaStar, FaTextHeight, FaThumbsUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 


const Trending = () => {
    const trendingBooks = [
        {
            id: 1,
            title: "The Midnight Library",
            db_title: "the-midnight-library",
            author: "Matt Haig",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg",
            rating: 4.2,
            likes: 8500,
            reads: 22000
        },
        {
            id: 2,
            title: "Tomorrow, and Tomorrow, and Tomorrow",
            db_title: "tomorrow-and-tomorrow-and-tomorrow",
            author: "Gabrielle Zevin",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1636978687i/58784475.jpg",
            rating: 4.3,
            likes: 6700,
            reads: 18000
        },
        {
            id: 3,
            title: "Demon Copperhead",
            db_title: "demon-copperhead",
            author: "Barbara Kingsolver",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660050779i/60194162.jpg",
            rating: 4.5,
            likes: 9200,
            reads: 25000
        },
        {
            id: 4,
            title: "Lessons in Chemistry",
            db_title: "lessons-in-chemistry",
            author: "Bonnie Garmus",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1634748496i/58065033.jpg",
            rating: 4.4,
            likes: 7800,
            reads: 20000
        },
        {
            id: 5,
            title: "Feed",
            db_title: "feed",
            author: "Mira Grant",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1408500437i/7094569.jpg",
            rating: 3.8,
            likes: 5000,
            reads: 9000
        },
        {
            id: 6,
            title: "Life of Pi",
            db_title: "life_of_pi",
            author: "Yann Martel",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631251689i/4214.jpg",
            rating: 3.9,
            likes: 15000,
            reads: 17000
        }
    ];

    const navigate = useNavigate();

    const handleBookClick = (db_title) =>{
        navigate(`/book/${db_title}`);
    };

    return (
        <section className="trending">
            <h2>Trending Books</h2>
            <div className="trending__books">
                {trendingBooks.map((book) => (
                    <div key={book.id} className="trending__book" onClick={() => handleBookClick(book.db_title)} style={{cursor:"pointer"}}>
                        <div className="trending__book-cover">
                            <img src={book.cover} alt={book.title} />
                        </div>
                        <div className="trending__book-info">
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                        </div>
                        <div className="trending__book-hover">
                            <p><FaReadme/> {book.reads.toLocaleString()}</p>
                            <p><FaThumbsUp/>{book.likes.toLocaleString()}</p>
                            <p><FaStar /> {book.rating}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Trending;
