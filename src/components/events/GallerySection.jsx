import React from 'react';

const GallerySection = ({ images }) => {
    const topRow = images.slice(0, 6);
    const bottomRow = images.slice(6);

    return (
        <section className="py-16 px-4 bg-pastel-blue/30">
            <div className="container mx-auto">
                <h2 className="font-oswald text-5xl font-bold text-primary-dark text-center mb-12">
                    Gallery
                </h2>

                <div className="carousels">
                    <div className="carousel-row group">
                        <div className="carousel-track group-hover:pause-animation animate-scroll">
                            {[...topRow, ...topRow].map((img, idx) => (
                                <div key={`gallery-top-${idx}`} className="carousel-item">
                                    <img src={img} alt={`Gallery ${idx + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="carousel-row group">
                        <div className="carousel-track group-hover:pause-animation animate-scroll-reverse">
                            {[...bottomRow, ...bottomRow].map((img, idx) => (
                                <div key={`gallery-bottom-${idx}`} className="carousel-item">
                                    <img src={img} alt={`Gallery ${idx + 7}`} />
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
