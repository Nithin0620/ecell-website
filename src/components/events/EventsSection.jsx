import React from 'react';
import EventCard from './EventCard';

const EventsSection = ({ events, visibleEvents, onLoadMore }) => {
  return (
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
              onClick={onLoadMore}
              className="bg-main-blue hover:bg-blue-700 text-white font-oswald font-bold text-lg px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
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
