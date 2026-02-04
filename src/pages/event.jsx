import React, { useState } from 'react';
import Navbar from '../components/events/Navbar';
import HeroSection from '../components/events/HeroSection';
import EventsSection from '../components/events/EventsSection';
import GallerySection from '../components/events/GallerySection';
import Footer from '../components/events/Footer';

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
      <Navbar />
      <HeroSection title="OUR EVENTS" />
      <EventsSection events={events} visibleEvents={visibleEvents} onLoadMore={loadMore} />
      <GallerySection images={galleryImages} />
      <Footer />
    </div>
  );
};

export default Event;
