import React from 'react';
import './Header.css'; // Import your CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Seekers Wave</div>
      <nav className="navigation">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="signup-button">Signup</button>
        <button className="login-button">Login</button>
      </div>
    </header>
  );
}

export default Header;
