import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BookDetails() {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/libros`)
            .then(response => response.json())
            .then(data => setBook(data))
            .catch(error => console.error("Error fetching book:", error));
    }, [id]);

    if (!book) return <p>Loading...</p>;

    return (
        <div>
            <h1>{book.title}</h1>
            <p>Autor: {book.author}</p>
        </div>
    );
}

export default BookDetails;
