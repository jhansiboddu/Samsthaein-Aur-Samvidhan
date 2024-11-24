import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Search query submitted:", searchQuery);
    // Implement your search logic here (e.g., filter items, navigate to search page, etc.)
  };

  return (
    <header className="navbar">
      <div className="logo">
        <a href="/" className="logo-link">
          <span className="logo-icon">
            <span className="material-symbols-outlined">auto_stories</span> {/* Your icon here */}
          </span>
          <span className="logo-text">Samsthaein Aur Samvidhan</span>
        </a>
      </div>

      {/* Search Bar */}
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="search-icon">
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>

      <div className="user-dashboard">
        <button className="user-btn" onClick={toggleDropdown}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="user-icon">
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {dropdownOpen && (
          <div className="dropdown-menu">
            <a href="/profile" className="dropdown-item">My Profile</a>
            <a href="/change-password" className="dropdown-item">Change Password</a>
            <a href="/logout" className="dropdown-item">Logout</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
