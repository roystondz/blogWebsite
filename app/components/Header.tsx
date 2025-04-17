'use client';
import React, { useState, useLayoutEffect } from 'react';
import Image from 'next/image';
import IonIcon from './IonIcon';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import Menu from './Menu';

const Header: React.FC = () => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState<boolean>(false);
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleSearchBar = () => {
    setIsSearchBarVisible((prev) => !prev);
    if (isMenuVisible) setIsMenuVisible(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality here
    console.log('Searching for:', searchQuery);
    // You might want to navigate to a search page or filter results
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
            className="light-logo"
          />
          <Image
            src="/assets/images/BlogSit-White.png"
            width={200}
            height={100}
            alt="Blogsite logo"
            className="dark-logo"
          />
        </a>
        
        {/* Menu Component - Now wrapped with navbar */}
        <div className={`navbar ${isMenuVisible ? 'active' : ''}`}>
        <Menu toggleSearchBar={toggleSearchBar} />
        </div>
        
        {/* Wrapper for Search, Login, and Menu Toggle Buttons */}
        <div className="wrapper">
          {/* Hamburger Menu Toggle Button */}
          <button 
            className={`nav-toggle-btn ${isMenuVisible ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="span one"></span>
            <span className="span two"></span>
            <span className="span three"></span>
          </button>

          {/* Dark Mode Toggle */}
          <div className="checkbox-wrapper-41">
            <input
              type="checkbox"
              id="darkModeToggle"
              checked={darkMode}
              onChange={handleDarkModeToggle}
            />
            <span className="slider"></span>
          </div>
        </div>
      </div>

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