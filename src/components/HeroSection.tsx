import React, { useState, useEffect } from "react";
import { Search, MapPin, Clock, ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary-black/70 z-10"></div>
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-man-working-on-car-engine-4460-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform -translate-y-10"
            }`}
          >
            <span className="text-neon-yellow">Professional</span> Vehicle
            <br />
            Repair Services
          </h1>
          <p
            className={`text-lg md:text-xl mb-8 text-gray-300 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform -translate-y-10"
            }`}
          >
            Expert mechanics at your service, anytime, anywhere.
            <br />
            Fast, reliable, and transparent vehicle repair solutions.
          </p>

          <div
            className={`bg-dark-gray p-4 rounded-lg shadow-lg mb-8 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform -translate-y-10"
            }`}
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="relative flex-grow">
                <MapPin
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="w-full pl-10 pr-4 py-3 bg-primary-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-yellow text-gray-200"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
              </div>
              <div className="relative w-full md:w-auto">
                <Clock
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <select className="w-full md:w-48 pl-10 pr-4 py-3 bg-primary-black border border-gray-700 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-neon-yellow text-gray-200">
                  <option value="">Service Time</option>
                  <option value="asap">As Soon As Possible</option>
                  <option value="today">Today</option>
                  <option value="tomorrow">Tomorrow</option>
                  <option value="week">This Week</option>
                </select>
              </div>
              <button className="w-full md:w-auto bg-neon-yellow text-primary-black px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center glow">
                <Search size={20} className="mr-2" />
                Find Mechanic
              </button>
            </div>
          </div>

          <div
            className={`flex flex-wrap justify-center gap-6 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform -translate-y-10"
            }`}
          >
            <div className="flex items-center bg-dark-gray/50 backdrop-blur-sm px-4 py-2 rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-300">
                <span className="font-bold text-neon-yellow">247</span> Active
                Mechanics
              </span>
            </div>
            <div className="flex items-center bg-dark-gray/50 backdrop-blur-sm px-4 py-2 rounded-lg">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-300">
                <span className="font-bold text-neon-yellow">24/7</span>{" "}
                Emergency Service
              </span>
            </div>
            <div className="flex items-center bg-dark-gray/50 backdrop-blur-sm px-4 py-2 rounded-lg">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-300">
                <span className="font-bold text-neon-yellow">4.9</span> Customer
                Rating
              </span>
            </div>
          </div>

          <div
            className={`mt-12 transition-all duration-1000 delay-1000 ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform -translate-y-10"
            }`}
          >
            <a
              href="#services"
              className="inline-flex items-center text-neon-yellow hover:underline group"
            >
              Explore our services
              <ArrowRight
                size={16}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Emergency SOS Button (Mobile Only) */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <button className="bg-neon-yellow text-primary-black w-14 h-14 rounded-full flex items-center justify-center shadow-lg pulse">
          <span className="font-bold text-xs">SOS</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;