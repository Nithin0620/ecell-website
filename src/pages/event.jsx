import React, { useState } from 'react';

const Event = () => {
  const [visibleEvents, setVisibleEvents] = useState(3);

  const events = [
    {
      id: 1,
      title: "PATENTS AND COPYRIGHT SESSION",
      description: "The E-Cell MSIT hosted a webinar on 21st August 2024, featuring Ms. Pooja Sood, to educate participants on patents and copyrights. The session covered the importance of protecting ideas and inventions, especially for startups, and provided practical guidance on applying for intellectual property rights. An engaging Q&A rounded off the event, leaving attendees with valuable insights to safeguard their innovations.",
      date: "21/08/2024",
      registrations: "150+",
      image: "/images/pc1.png"
    },
    {
      id: 2,
      title: "MASTERS ABROAD SESSION",
      description: "The E-Cell MSIT organized a seminar on 30th August 2024, featuring Mr. Naveen Rai from Hello Study Global, who provided insights into pursuing a Master's degree abroad. The session covered the benefits of studying overseas, guidance for Ivy League applications, and global career opportunities. The interactive Q&A session allowed participants to seek tailored advice and clarified doubts, making the seminar highly impactful and engaging.",
      date: "30/08/2024",
      registrations: "200+",
      image: "/images/ma1.png"
    },
    {
      id: 3,
      title: "MAIN ORIENTATION",
      description: "The eCell MSIT Orientation 2024-25 was held on 2nd September 2024, in the auditorium, introducing students to entrepreneurship. Key highlights included introductory speeches by Sarthak Dhankar and Akanksha Verma, electrifying performances, insights from eCell convener Neeru Rathee, and speeches by the core team. The event also featured alumni sharing success stories, fun activities, and a sponsor presentation by Coding Blocks. It concluded with enthusiastic participation, fostering innovation and collaboration.",
      date: "02/09/2024",
      registrations: "300+",
      image: "/images/e2.jpg"
    },
    {
      id: 4,
      title: "ECE ORIENTATION",
      description: "The orientation concluded with vibrant audience engagement, strengthening team bonds and offering valuable insights to budding entrepreneurs and students. The eCell MSIT team's dedication, marked by tireless effort, culminated in a resounding success, resulting in a fun and informative event guided by the exemplary leadership of the eCell convener Mrs Neeru Rathee mam, President Shaurya Mishra and Vice President Harshika Drall.",
      date: "06/09/2024",
      registrations: "180+",
      image: "/images/ece2.JPG"
    },
    {
      id: 5,
      title: "STUDY ABROAD SEMINAR",
      description: "The eCell MSIT Study Abroad Seminar 2024-25, held on 23rd September in Seminar Hall 206, featured Dr. Bill Van Heyst, Dean of the University of Windsor. The session explored air quality issues, global and Indian pollution scenarios, historical events like Bhopal Gas Tragedy, and environmental solutions. Highlights included an engaging presentation, team acknowledgments, and mementos, fostering environmental awareness and responsibility.",
      date: "23/09/2024",
      registrations: "150+",
      image: "/images/sa1.JPG"
    },
    {
      id: 6,
      title: "MSME",
      description: "The MSME Entrepreneurship Awareness Programme for SC/ST Youths, held on 28th November 2024 in Seminar Hall 206, was organized by eCell MSIT under Dr. Neeru Rathee's guidance. Featuring experts like Dr. Sunil Kumar and Dr. Rajpal Solanki, the event covered UDYAM registration, IPR, and government schemes. It emphasized fostering entrepreneurship and provided practical insights, leaving participants inspired to explore entrepreneurial opportunities.",
      date: "28/11/2024",
      registrations: "120+",
      image: "/images/msme3.jpg"
    }
  ];

  const galleryImages = [
    "/images/audit1.JPG",
    "/images/cl1.JPG",
    "/images/e2.jpg",
    "/images/ece1.JPG",
    "/images/msme1.JPG",
    "/images/or1.JPG",
    "/images/cl2.JPG",
    "/images/audit2.JPG",
    "/images/sa1.JPG",
    "/images/msme3.jpg",
    "/images/ece2.JPG",
    "/images/audit3.JPG"
  ];

  const loadMore = () => {
    setVisibleEvents(prev => Math.min(prev + 3, events.length));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
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
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
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
          OUR EVENTS
        </h1>
      </section>

      {/* Events Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.slice(0, visibleEvents).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          
          {visibleEvents < events.length && (
            <div className="flex justify-center mt-12">
              <button 
                onClick={loadMore}
                className="bg-main-blue hover:bg-blue-700 text-white font-oswald font-bold text-lg px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-pastel-blue/30">
        <div className="container mx-auto">
          <h2 className="font-oswald text-5xl font-bold text-primary-dark text-center mb-12">
            Gallery
          </h2>
          
          {/* First Row - Left to Right */}
          <div className="flex gap-4 mb-4 overflow-hidden">
            <div className="flex gap-4 animate-scroll">
              {[...galleryImages.slice(0, 6), ...galleryImages.slice(0, 6)].map((img, idx) => (
                <div key={idx} className="flex-shrink-0 w-80 h-64 rounded-lg overflow-hidden">
                  <img 
                    src={img} 
                    alt={`Gallery ${idx + 1}`} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="flex gap-4 overflow-hidden">
            <div className="flex gap-4 animate-scroll-reverse">
              {[...galleryImages.slice(6), ...galleryImages.slice(6)].map((img, idx) => (
                <div key={idx} className="flex-shrink-0 w-80 h-64 rounded-lg overflow-hidden">
                  <img 
                    src={img} 
                    alt={`Gallery ${idx + 7}`} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Contact */}
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

            {/* Site Map */}
            <div className="font-merriweather">
              <h3 className="font-oswald text-xl font-bold mb-3">Site Map</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-muted hover:text-main-blue transition-colors">Home</a></li>
                <li><a href="/about" className="text-muted hover:text-main-blue transition-colors">About</a></li>
                <li><a href="/events" className="text-muted hover:text-main-blue transition-colors">Events</a></li>
                <li><a href="/contact" className="text-muted hover:text-main-blue transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Socials */}
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
    </div>
  );
};

// EventCard Component
const EventCard = ({ event }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative h-[500px] rounded-2xl overflow-hidden group cursor-pointer shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <img 
        src={event.image} 
        alt={event.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-dark/50 to-primary-dark/90"></div>
      
      {/* Title - Always Visible */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <h3 className="font-oswald text-2xl font-bold text-white">
          {event.title}
        </h3>
      </div>

      {/* Info Panel - Slides up on hover */}
      <div 
        className={`absolute inset-0 bg-primary-dark p-6 flex flex-col justify-between transition-transform duration-500 ${
          isHovered ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div>
          <h4 className="font-oswald text-2xl font-bold text-white mb-4">
            {event.title}
          </h4>
          <p className="font-merriweather text-sm text-gray-300 leading-relaxed">
            {event.description}
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 mt-6">
          {/* Date Badge */}
          <div className="flex items-center gap-2 bg-pastel-blue/20 px-4 py-2 rounded-lg">
            <svg className="w-5 h-5 text-main-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-merriweather text-sm text-white">{event.date}</span>
          </div>

          {/* Registrations Badge */}
          <div className="flex items-center gap-2 bg-pastel-green/20 px-4 py-2 rounded-lg">
            <svg className="w-5 h-5 text-main-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="font-merriweather text-sm text-white font-semibold">{event.registrations}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
