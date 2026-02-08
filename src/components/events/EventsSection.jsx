import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import EventCard from './EventCard';

const EventsSection = ({ events, visibleEvents, onLoadMore }) => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRefs.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.18,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [visibleEvents]);

  return (
    <section className="py-12 sm:py-16 px-4" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 sm:gap-10">
          {events.slice(0, visibleEvents).map((event, index) => (
            <div
              key={event.id}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
            >
              <EventCard event={event} index={index} />
            </div>
          ))}
        </div>

        {visibleEvents < events.length && (
          <div className="flex justify-center mt-10 sm:mt-12">
            <button
              onClick={onLoadMore}
              className="bg-main-blue hover:bg-blue-700 text-white font-oswald font-bold text-base sm:text-lg px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
