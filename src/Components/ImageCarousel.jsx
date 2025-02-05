import React, { useState, useEffect } from 'react';

const images = [
    'src/Pictures/img_1.png',
    'src/Pictures/img_5.png',
    'src/Pictures/img_3.png',
    'src/Pictures/img_4.png',
];

const ImageCarousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(false);
            }, 500);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="image-section">
            <div
                className={`current-image ${fade ? 'fade' : ''}`}
                style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
            ></div>
        </section>
    );
};

export default ImageCarousel;
