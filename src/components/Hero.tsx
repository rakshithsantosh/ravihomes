import { useEffect, useState } from "react";

const Hero = () => {
  const images = [
    "/images/dragon_1.jpg",
    "/images/dragon_2.jpg",
    "/images/dragon_3.jpg",
    "/images/dragon_4.jpg",
    "/images/dragon_5.jpg",
    "/images/dragon_6.jpg",
    "/images/dragon_7.jpg",
    "/images/dragon_8.jpg",
    "/images/dragon_9.jpg",
    "/images/dragon_10.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(true);

      // After fade-in, set new current image and prepare the next
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setNextIndex((prev) => (prev + 1) % images.length);
        setFadeIn(false);
      }, 1000); // match the CSS transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Base background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          transition: "background-image 1s ease-in-out",
        }}
      />

      {/* Overlay fade-in image */}
      {fadeIn && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-0 animate-fadeIn"
          style={{
            backgroundImage: `url(${images[nextIndex]})`,
          }}
        />
      )}

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Your Dream Home
            <span className="block text-yellow-400">Awaits You</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Discover premium properties and exceptional living spaces with Ravi
            Homes. Your trusted partner in finding the perfect home.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
