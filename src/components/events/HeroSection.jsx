import React from 'react';

const HeroSection = ({ title }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden mt-16">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/50 to-primary-dark/70"></div>
      <h1 className="relative z-10 font-oswald text-7xl md:text-8xl font-bold text-white text-center px-4">
        {title}
      </h1>
    </section>
  );
};

export default HeroSection;
