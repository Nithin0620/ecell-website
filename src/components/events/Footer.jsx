import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img src="/images/logo.png" alt="ECELL Logo" className="h-16 w-16" />
            </div>
            <div className="font-merriweather">
              <h3 className="font-oswald text-xl font-bold mb-3">Contact Us</h3>
              <p className="text-muted">
                eCell MSIT, Maharaja Surajmal Institute of Technology,
                C-4 Janakpuri, New Delhi - 110059
              </p>
            </div>
          </div>

          <div className="font-merriweather">
            <h3 className="font-oswald text-xl font-bold mb-3">Site Map</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted hover:text-main-blue transition-colors">Home</a></li>
              <li><a href="/about" className="text-muted hover:text-main-blue transition-colors">About</a></li>
              <li><a href="/events" className="text-muted hover:text-main-blue transition-colors">Events</a></li>
              <li><a href="/contact" className="text-muted hover:text-main-blue transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div className="font-merriweather">
            <h3 className="font-oswald text-xl font-bold mb-3">Socials</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.instagram.com/ecellmsit/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-main-blue transition-colors flex items-center gap-2">
                  <span>📷</span> Instagram
                </a>
              </li>
              <li>
                <a href="https://in.linkedin.com/company/ecellmsit" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-main-blue transition-colors flex items-center gap-2">
                  <span>💼</span> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/ecellmsit/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-main-blue transition-colors flex items-center gap-2">
                  <span>📘</span> Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 pt-6">
          <p className="text-center font-merriweather text-muted">
            © 2024 eCell MSIT. All rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
