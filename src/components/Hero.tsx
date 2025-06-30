import { useEffect, useState } from "react";

const Hero = () => {
  const images = [
    "./images/dragon_1.jpg",
    "./images/dragon_2.jpg",
    "./images/dragon_3.jpg",
    "./images/dragon_4.jpg",
    "./images/dragon_5.jpg",
    "./images/dragon_6.jpg",
    "./images/dragon_7.jpg",
    "./images/dragon_8.jpg",
    "./images/dragon_9.jpg",
    "./images/dragon_10.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change image every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      />

      {/* Content */}
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
