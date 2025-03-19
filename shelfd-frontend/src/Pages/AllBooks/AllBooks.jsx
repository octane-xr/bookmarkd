import React, { useState, useEffect } from "react";
import Navbar from "../../components/HomePageComponents/Navbar/Navbar";
import './AllBooks.scss';

function AllBooks() {

  return (
    <div className="AllBooks">
        <Navbar/>

        <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          
          <div className="dropdown-content">
            <a href="#1">Link 1</a>
            <a href="#2">Link 2</a>
            <a href="#3">Link 3</a>
          </div>


        </div>


        
    </div>
  );
}

export default AllBooks;
