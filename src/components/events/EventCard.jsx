import React, { useEffect, useMemo, useState } from 'react';

const EventCard = ({ event, index }) => {
  const isReversed = index % 2 !== 0;
  const [isHovered, setIsHovered] = useState(false);
  const iconPalette = [
    {
      bg: 'bg-emerald-200/70',
      text: 'text-emerald-700',
      path: 'M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7zm0 9a2 2 0 100-4 2 2 0 000 4z',
    },
    {
      bg: 'bg-sky-200/70',
      text: 'text-sky-700',
      path: 'M8 3h8a5 5 0 015 5v5a8 8 0 11-16 0V8a5 5 0 015-5zm4 6a3 3 0 100 6 3 3 0 000-6z',
    },
    {
      bg: 'bg-amber-200/70',
      text: 'text-amber-700',
      path: 'M4 6h16v12H4z M8 2h8v4H8z',
    },
    {
      bg: 'bg-violet-200/70',
      text: 'text-violet-700',
      path: 'M12 2l2.2 4.6 5.1.7-3.7 3.6.9 5.1L12 13.8 7.5 16l.9-5.1L4.7 7.3l5.1-.7L12 2z',
    },
    {
      bg: 'bg-rose-200/70',
      text: 'text-rose-700',
      path: 'M12 4a4 4 0 014 4c0 3-4 8-4 8s-4-5-4-8a4 4 0 014-4zm0 14a8 8 0 01-8-8h3a5 5 0 1010 0h3a8 8 0 01-8 8z',
    },
    {
      bg: 'bg-teal-200/70',
      text: 'text-teal-700',
      path: 'M4 5h16v4H4z M4 11h16v8H4z M8 13h4v4H8z',
    },
  ];

  const displayIcons = iconPalette
    .slice(index % iconPalette.length)
    .concat(iconPalette)
    .slice(0, 3);

  const rawRegistrations = useMemo(() => {
    if (event?.registrations === undefined || event?.registrations === null) {
      return '';
    }

    return String(event.registrations);
  }, [event?.registrations]);

  const registrationNumber = useMemo(() => {
    const numeric = rawRegistrations.replace(/\D/g, '');
    return Number.parseInt(numeric, 10) || 0;
  }, [rawRegistrations]);

  const registrationSuffix = useMemo(() => {
    return rawRegistrations.replace(/\d/g, '').trim();
  }, [rawRegistrations]);

  const [displayedRegistrations, setDisplayedRegistrations] = useState(
    rawRegistrations
  );
  const [displayedDate, setDisplayedDate] = useState(event?.date || '');

  useEffect(() => {
    setDisplayedRegistrations(rawRegistrations);
  }, [rawRegistrations]);

  useEffect(() => {
    setDisplayedDate(event?.date || '');
  }, [event?.date]);

  useEffect(() => {
    if (!isHovered) {
      setDisplayedRegistrations(rawRegistrations);
      setDisplayedDate(event?.date || '');
      return undefined;
    }

    let isActive = true;
    let tick = 0;
    const totalTicks = 16;
    const scramble = (value) => {
      const letters = 'JANFEBMARAPRMAYJUNJULAUGSEPOCTNOVDEC0123456789';
      return value
        .split('')
        .map((char) => {
          if (char === ' ' || char === '-' || char === '/') return char;
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join('');
    };

    const intervalId = setInterval(() => {
      if (!isActive) return;
      tick += 1;

      const jitter = Math.max(0, registrationNumber + (Math.random() > 0.5 ? 12 : -8));
      const fluctuating = Math.max(0, Math.floor(Math.random() * jitter));
      const suffix = registrationSuffix ? ` ${registrationSuffix}` : '';

      setDisplayedRegistrations(`${fluctuating}${suffix}`.trim());
      setDisplayedDate(scramble(event?.date || ''));

      if (tick >= totalTicks) {
        setDisplayedRegistrations(rawRegistrations);
        setDisplayedDate(event?.date || '');
        clearInterval(intervalId);
      }
    }, 70);

    return () => {
      isActive = false;
      clearInterval(intervalId);
    };
  }, [
    event?.date,
    isHovered,
    rawRegistrations,
    registrationNumber,
    registrationSuffix,
  ]);

  return (
    <div
      className={`group relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-2xl border border-white/20 ring-1 ring-white/20 transition-transform duration-500 ${
        isReversed ? 'md:-translate-x-8' : 'md:translate-x-8'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex flex-col md:flex-row ${
          isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
        }`}
      >
        <div className="relative md:w-1/2 h-64 md:h-[480px] overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/70 via-transparent to-primary-dark/70"></div>
        </div>

        <div className="relative md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-emerald-50/80 via-cyan-50/70 to-sky-50/80 backdrop-blur-2xl border border-white/40">
          <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-100 transition-all duration-500 group-hover:opacity-0">
            {displayIcons.map((icon, iconIndex) => (
              <div
                key={`${event?.id ?? 'event'}-icon-${iconIndex}`}
                className={`w-16 h-16 rounded-2xl ${icon.bg} ${icon.text} flex items-center justify-center shadow-lg`}
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor" aria-hidden="true">
                  <path d={icon.path} />
                </svg>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:-translate-y-2">
              <h3 className="font-oswald text-3xl md:text-4xl font-bold text-primary-dark">
                {event.title}
              </h3>
            </div>
            <div className="transition-all duration-500 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
              <p className="font-merriweather text-sm md:text-base text-slate-800 leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-sky-200/70 shadow-lg shadow-sky-200/30 opacity-0 translate-y-4 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
              <svg className="w-5 h-5 text-main-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-merriweather text-sm text-slate-900">
                {displayedDate}
              </span>
            </div>

            <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-emerald-200/70 shadow-lg shadow-emerald-200/30 opacity-0 translate-y-4 transition-all duration-500 delay-200 group-hover:opacity-100 group-hover:translate-y-0">
              <svg className="w-5 h-5 text-main-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="font-merriweather text-sm text-slate-900 font-semibold">
                {displayedRegistrations}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
