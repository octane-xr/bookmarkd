import React, {useState,useEffect} from "react";
import './Trending.scss';
import { FaBook, FaReadme, FaStar, FaTextHeight, FaThumbsUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 


const Trending = () => {
    const [trendingBooks, setTrendingBooks] = useState([]);
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


    const navigate = useNavigate();

    const handleBookClick = (db_title) =>{
        navigate(`/api/book/${db_title}`);
    
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
