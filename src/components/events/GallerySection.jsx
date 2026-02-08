import React, { useState } from 'react';

const GallerySection = ({ images }) => {
    const topRow = images.slice(0, 6);
    const bottomRow = images.slice(6);
    const [activeImage, setActiveImage] = useState(null);

    return (
        <section className="relative py-16 px-4 bg-pastel-blue/30">
            <div className="container mx-auto relative">
                <h2 className="font-oswald text-5xl font-bold text-primary-dark text-center mb-12">
                    Gallery
                </h2>

                <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className={`relative h-[55vh] w-[55vw] max-w-[520px] max-h-[520px] rounded-3xl border border-black/50 bg-black/20 backdrop-blur-2xl shadow-2xl ring-1 ring-white/20 transition-all ${
                            activeImage
                                ? 'opacity-100 scale-100 duration-700 ease-out'
                                : 'opacity-0 scale-95 duration-500 ease-in'
                        }`}
                    >
                        {activeImage && (
                            <>
                                <img
                                    src={activeImage}
                                    alt="Hovered gallery"
                                    className="w-full h-full object-cover rounded-3xl bg-transparent opacity-75 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                                    <div className="glare-sweep" />
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div className="carousels">
                    <div className="carousel-row group">
                        <div className="carousel-track group-hover:pause-animation animate-scroll">
                            {[...topRow, ...topRow].map((img, idx) => (
                                <div key={`gallery-top-${idx}`} className="carousel-item">
                                    <img
                                        src={img}
                                        alt={`Gallery ${idx + 1}`}
                                        onMouseEnter={() => setActiveImage(img)}
                                        onMouseLeave={() => setActiveImage(null)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="carousel-row group">
                        <div className="carousel-track group-hover:pause-animation animate-scroll-reverse">
                            {[...bottomRow, ...bottomRow].map((img, idx) => (
                                <div key={`gallery-bottom-${idx}`} className="carousel-item">
                                    <img
                                        src={img}
                                        alt={`Gallery ${idx + 7}`}
                                        onMouseEnter={() => setActiveImage(img)}
                                        onMouseLeave={() => setActiveImage(null)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
