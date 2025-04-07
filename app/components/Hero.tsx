"use client"
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


import TypingAnimation from './TypingAnimation';
const Hero = () => {
  return (
    <section className="section hero" aria-label="home">
      <div className="container">
        <section className="hero">
          <TypingAnimation />
        </section>
        <div className="hero-right">
       <DotLottieReact
        src="https://lottie.host/523d5a0a-f41b-4180-9c0d-c7bac1bbb703/ipMtwafhb7.lottie"
        loop
        autoplay
        style={{ width: '660px', height: '660px' }}
      />
    </div>
        <div className="wrapper">
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
            Get the <strong> email newsletter</strong> and acces to updates
          </p>
        </div>
      </div>

      {/* <div className="gradient-line"></div> */}
    </section>
  );
};

export default Hero;