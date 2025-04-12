"use client"
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import TypingAnimation from './TypingAnimation';
import '../hexagon.css';
import HexagonLoader from './HexLoader';
const Hero = () => {
  return (
    <section className="hero-section" aria-label="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="typing-animation-wrapper">
            <TypingAnimation />
          </div>
          
          <HexagonLoader/>

          
          {/* <div className="hero-right">
            <DotLottieReact
              src="https://lottie.host/523d5a0a-f41b-4180-9c0d-c7bac1bbb703/ipMtwafhb7.lottie"
              loop
              autoplay
              style={{ width: '660px', height: '660px' }}
            />
          </div> */}
        </div>

        <div className="newsletter-wrapper">
          <form action="" className="newsletter-form">
            <input
              type="email"
              name="email_address"
              placeholder="Your email address"
              className="email-field"
            />
            <button type="submit" className="btn">Subscribe</button>
          </form>

          <p className="newsletter-text">
            Get the <strong>email newsletter</strong> and access to updates
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;