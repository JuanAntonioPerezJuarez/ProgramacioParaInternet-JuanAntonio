
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('/img/inicio.png')`,
          filter: "brightness(0.5)",
          transform: scrolled ? "scale(1.05)" : "scale(1)",
          transition: "transform 0.5s ease-out",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 h-full w-full flex flex-col justify-center items-center text-white p-4 hero-gradient">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-racing text-center mb-4 animate-fade-in">
          <span className="text-challenger-red">DODGE</span> CHALLENGER
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-3xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Experience the evolution of an American icon - from classic muscle to modern performance
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <a
            href="#timeline"
            className="button-primary px-8 py-3 text-lg hover:animate-rev-engine"
          >
            Explore Timeline
          </a>
          <a
            href="#performance"
            className="button-secondary px-8 py-3 text-lg hover:animate-rev-engine"
          >
            Test Performance
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
