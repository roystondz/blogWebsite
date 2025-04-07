'use client';
import React, { useState, useLayoutEffect } from 'react';
import Image from 'next/image';
import IonIcon from './IonIcon';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';

const Header: React.FC = () => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState<boolean>(false);
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const toggleSearchBar = () => {
    setIsSearchBarVisible((prev) => !prev);
    if (isMenuVisible) setIsMenuVisible(false);
  };

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
    if (isSearchBarVisible) setIsSearchBarVisible(false);
  };
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'enabled';
    }
    return false;
  });

  useLayoutEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
    }
  }, [darkMode]);

  const handleDarkModeToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(e.target.checked);
  };

  return (


    <header className="header section" data-header>
      <div className="container">
        {/* Logo */}
        <a href="#" className="logo">
          <Image
            src="/assets/images/BlogSit (1).png"
            width={129}
            height={40}
            alt="Blogsite logo"
          />
        </a>

        {/* Navigation Menu */}
        <nav className={`navbar ${isMenuVisible ? 'active' : ''}`} data-navbar>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#" className="navbar-link hover:underline" data-nav-link>
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link hover:underline" data-nav-link>
                Recent Post
              </a>
            </li>
          </ul>
        </nav>

        {/* Wrapper for Search, Login, and Menu Toggle Buttons */}
        <div className="wrapper">
          {/* Search Button (Visible on Mobile) */}
          <button
            className="search-btn"
            aria-label="search"
            onClick={toggleSearchBar}
          >
            <SearchIcon />
          </button>


          {/* Login Button */}
          <Link href="/auth/">
            <button className="btn mobile-login-btn">Login</button>
          </Link>

          {/* Toggle */}
          <div className="checkbox-wrapper-41">
            <input
              type="checkbox"
              id="darkModeToggle"
              checked={darkMode}
              onChange={handleDarkModeToggle}
            />
            <span className="slider"></span>
          </div>



          {/* Mobile Menu Toggle Button */}
          <button
            className={`nav-toggle-btn ${isMenuVisible ? 'active' : ''}`}
            aria-label="toggle menu"
            onClick={toggleMenu}
            data-nav-toggler
          >
            <span className="span one"></span>
            <span className="span two"></span>
            <span className="span three"></span>
          </button>
        </div>
      </div>

      {/* Search Bar (Conditionally Rendered) */}
      {isSearchBarVisible && (
        <div className={`search-bar ${isSearchBarVisible ? 'active' : ''}`} data-search-bar>
          <div className="input-wrapper">
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="input-field"
            />
            {/* Search Icon Inside the Search Bar */}
            <button
              className="search-submit-btn"
              aria-label="submit search"
              type="submit"
            >
              <IonIcon name="search-outline" ariaHidden={true} />
            </button>
            {/* Close Button */}
            <button
              className="search-close-btn"
              aria-label="close search bar"
              onClick={toggleSearchBar}
              data-search-toggler
            >
              <IonIcon name="close-outline" ariaHidden={true} />
            </button>
          </div>
          <p className="search-bar-text">Please enter at least 3 characters</p>
        </div>
      )}

      {/* Overlay (Conditionally Rendered) */}
      {(isSearchBarVisible || isMenuVisible) && (
        <div
          className={`overlay ${isSearchBarVisible || isMenuVisible ? 'active' : ''}`}
          data-overlay
          onClick={() => {
            setIsSearchBarVisible(false);
            setIsMenuVisible(false);
          }}
        ></div>
      )}


    </header>
  );
};

export default Header;