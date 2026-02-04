import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-primary-dark text-white z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src="/images/logo.png" alt="ECELL Logo" className="h-12 w-12" />
          <h2 className="font-oswald text-2xl font-bold">ECELL MSIT</h2>
        </div>
        <ul className="hidden md:flex gap-8 font-merriweather">
          <li><a href="/" className="hover:text-main-blue transition-colors">Home</a></li>
          <li><a href="/about" className="hover:text-main-blue transition-colors">About</a></li>
          <li><a href="/events" className="hover:text-main-blue transition-colors">Events</a></li>
          <li><a href="/contact" className="hover:text-main-blue transition-colors">Contact Us</a></li>
        </ul>
        <button className="md:hidden" aria-label="Open menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
