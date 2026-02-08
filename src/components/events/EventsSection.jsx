import React from 'react';
import EventCard from './EventCard';

const EventsSection = ({ events, visibleEvents, onLoadMore }) => {
  return (
    <section className="py-12 sm:py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 sm:gap-10">
          {events.slice(0, visibleEvents).map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
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
