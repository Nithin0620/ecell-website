import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="relative h-[500px] rounded-2xl overflow-hidden group cursor-pointer shadow-xl">
      <img
        src={event.image}
        alt={event.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-dark/50 to-primary-dark/90"></div>

      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <h3 className="font-oswald text-2xl font-bold text-white">
          {event.title}
        </h3>
      </div>

      <div className="absolute inset-0 bg-primary-dark p-6 flex flex-col justify-between transition-transform duration-500 translate-y-full group-hover:translate-y-0">
        <div>
          <h4 className="font-oswald text-2xl font-bold text-white mb-4">
            {event.title}
          </h4>
          <p className="font-merriweather text-sm text-gray-300 leading-relaxed">
            {event.description}
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 mt-6">
          <div className="flex items-center gap-2 bg-pastel-blue/20 px-4 py-2 rounded-lg">
            <svg className="w-5 h-5 text-main-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-merriweather text-sm text-white">{event.date}</span>
          </div>

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

export default EventCard;
