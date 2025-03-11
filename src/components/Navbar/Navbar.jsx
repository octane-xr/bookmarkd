import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <h1>bookmarkd.</h1>
        </div>
        <div className="navbar__links">
          <a href="/">Home</a>
          <a href="/books">Books</a>
          <a href="/lists">Lists</a>
          <a href="/reviews">Reviews</a>
        </div>
        <div className="navbar__auth">
          <button className="btn-sign-in">Sign In</button>
          <button className="btn-create-account">Create Account</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;