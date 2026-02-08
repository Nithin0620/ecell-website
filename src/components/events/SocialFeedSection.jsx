import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SocialFeedSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        }
      );

      gsap.fromTo(
        cardRefs.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.18,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const feeds = [
    {
      id: 1,
      platform: 'Instagram',
      handle: '@ecellmsit',
      link: 'https://www.instagram.com/ecellmsit/',
      excerpt:
        'Behind the scenes moments, event highlights, and stories from our community.',
      gradient: 'from-pink-200/70 via-rose-200/70 to-orange-200/70',
      icon: (
        <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm7-2a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-7 3a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
      ),
    },
    {
      id: 2,
      platform: 'LinkedIn',
      handle: 'ecellmsit',
      link: 'https://in.linkedin.com/company/ecellmsit',
      excerpt:
        'Professional updates, announcements, and partnerships with our ecosystem.',
      gradient: 'from-sky-200/70 via-cyan-200/70 to-blue-200/70',
      icon: (
        <path d="M4 3a2 2 0 110 4 2 2 0 010-4zm-1 6h2v12H3V9zm6 0h2v2.2h.03A2.2 2.2 0 0113 9c2.5 0 4 1.4 4 4.5V21h-2v-7c0-1.8-.7-2.7-2.1-2.7-1.5 0-2.4 1-2.4 2.7v7H8V9z" />
      ),
    },
    {
      id: 3,
      platform: 'Facebook',
      handle: 'ecellmsit',
      link: 'https://www.facebook.com/ecellmsit/',
      excerpt:
        'Community posts, photos, and updates that capture our latest initiatives.',
      gradient: 'from-emerald-200/70 via-teal-200/70 to-sky-200/70',
      icon: (
        <path d="M13 3h4v4h-3c-.6 0-1 .4-1 1v3h4l-1 4h-3v6h-4v-6H7v-4h2V8a5 5 0 015-5z" />
      ),
    },
  ];

  return (
    <section
      className="py-16 px-4 bg-gradient-to-br from-sky-50 via-emerald-50 to-white"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto" ref={headingRef}>
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-primary-dark">
            Social Feed
          </h2>
          <p className="mt-4 text-slate-600 font-merriweather">
            Follow our latest updates across platforms and stay connected with every event.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {feeds.map((feed, index) => (
            <a
              key={feed.id}
              href={feed.link}
              target="_blank"
              rel="noreferrer"
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/40 backdrop-blur-2xl shadow-xl transition-transform duration-500 hover:-translate-y-2"
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${feed.gradient}`}
              />
              <div className="relative p-6 h-full flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 rounded-2xl bg-white/70 border border-white/60 flex items-center justify-center text-primary-dark shadow">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        {feed.icon}
                      </svg>
                    </span>
                    <div>
                      <p className="font-oswald text-lg text-primary-dark">
                        {feed.platform}
                      </p>
                      <p className="text-sm text-slate-600">{feed.handle}</p>
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Follow
                  </span>
                </div>

                <p className="text-sm text-slate-700 font-merriweather leading-relaxed">
                  {feed.excerpt}
                </p>

                <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-primary-dark">
                  Explore updates
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialFeedSection;
