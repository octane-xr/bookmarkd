import React, { useState } from "react";
import Navbar from "../../components/HomePageComponents/Navbar/Navbar";
import './AllBooks.scss';
import PopularBooks from "../../components/AllBooksComponents/PopularBooks/PopularBooks";

function AllBooks() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('all-time');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="AllBooks">
      <Navbar/>
      
      <div className="browse-container">
        <div className="filters-section">
          
        
          <span className="browse-text">BROWSE BY</span>
          
          <div className="dropdown">
            <button className="dropbtn">Year</button>
            <div className="dropdown-content">
              <a href="#2020">2020s</a>
              <a href="#2010">2010s</a>
              <a href="#2000">2000s</a>
              <a href="#1990">1990s</a>
              <a href="#1980">1980s</a>
              <a href="#1970">1970s</a>
              <a href="#1960">1960s</a>
              <a href="#1950">1950s</a>
              <a href="#1940">1940s</a>
              <a href="#1930">1930s</a>
              <a href="#1920">1920s</a>
              <a href="#1910">1910s</a>
              <a href="#1900">1900s</a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Rating</button>
            <div className="dropdown-content">
              <a href="#highest">Highest First</a>
              <a href="#lowest">Lowest First</a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Popular</button>
            <div className="dropdown-content">
              <a href="#all-time">All Time</a>
              <a href="#this-month">This Month</a>
              <a href="#this-year">This Year</a>
              <a href="#this-week">This Week</a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Genre</button>
            <div className="dropdown-content">
              <a href="#fiction">Fiction</a>
              <a href="#non-fiction">Non-Fiction</a>
              <a href="#mystery">Mystery</a>
              <a href="#sci-fi">Science Fiction</a>
              <a href="#fantasy">Fantasy</a>
            </div>
          </div>
        </div>

        <div className="search-section">
          <span className="search-text">FIND A BOOK</span>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
      </div>

      <PopularBooks/>

    </div>
  );
}

export default AllBooks;
