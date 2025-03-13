import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import BookDetails from './Pages/BookDetails/BookDetails';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/api/book/:db_title" element={<BookDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
