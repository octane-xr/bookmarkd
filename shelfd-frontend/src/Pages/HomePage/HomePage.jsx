import React, { useState, useEffect } from "react";
import Hero from '../../components/HomePageComponents/Hero/Hero';
import Features from '../../components/HomePageComponents/Features/Features';
import Trending from '../../components/HomePageComponents/Trending/Trending';
import Navbar from '../../components/HomePageComponents/Navbar/Navbar';
import './HomePage.scss';

function HomePage() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="HomePage">
      <Navbar />
      <Hero />
      <Trending />
      <Features />
      <h1>{message}</h1>
      <h2>Popular reviews</h2>
    </div>
  );
}

export default HomePage;
