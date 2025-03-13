import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import BookDetails from './Pages/BookDetails/BookDetails';
import AllBooks from './Pages/AllBooks/AllBooks';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/api/book/:db_title" element={<BookDetails />} />
        <Route path="/books" element={<AllBooks/>}/>
      </Routes>
    </Router>
  );
}

export default App;
