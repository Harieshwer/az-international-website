import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import RedChilli from "../assets/Redchilli.png.png";
import Cardamom from "../assets/Cardamom.png";
import Turmeric from "../assets/Turmeric.png";

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-15 flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700">
        <div className="absolute inset-0 opacity-20 bg-[url('/grain.png')]"></div>
      </div>

      {/* Decorative Glow Effects */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-slide-right">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Sparkles size={16} className="text-emerald-300" />
              <span className="text-sm font-medium">
                Premium Quality Since 2025
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Pure Spices, Cereals and Pulses
              <span className="block text-transparent bg-gradient-to-r from-teal-300 to-emerald-400 bg-clip-text">
                Perfect Flavors
              </span>
            </h1>

            <p className="text-xl text-teal-100 leading-relaxed max-w-xl">
              Discover the finest collection of authentic spices, cereals and pulses from India. Hand-selected, carefully processed, and delivered fresh to
              preserve nature’s perfect flavors.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="group px-8 py-4 bg-white text-teal-700 rounded-full font-semibold text-lg hover:bg-emerald-400 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-2"
              >
                Explore Products
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="#about"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-teal-700 transform hover:scale-105 transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            
          </div>

          {/* Right Side Product Cards */}
          <div className="relative animate-fade-in hidden md:block">
            <div className="relative w-full h-[600px]">
              {/* Card 1 */}
              <div className="absolute top-0 right-0 w-64 h-80 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 transform rotate-6 hover:rotate-0 transition-transform duration-300 shadow-2xl">
                <img
                  src={Turmeric}
                  alt="Turmeric"
                  className="w-full h-32 object-cover rounded-xl mb-4"
                />
                <h3 className="text-white font-bold text-xl mb-2">
                  Turmeric Powder
                </h3>
                <p className="text-teal-100 text-sm">Golden, pure & organic</p>
              </div>

              {/* Card 2 */}
              <div className="absolute bottom-20 left-0 w-64 h-80 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 transform -rotate-6 hover:rotate-0 transition-transform duration-300 shadow-2xl">

                <img
                  src={RedChilli}
                  alt="Red Chilli"
                  className="w-full h-32 object-cover rounded-xl mb-4"
                />

                <h3 className="text-white font-bold text-xl mb-2">Red Chili</h3>
                <p className="text-teal-100 text-sm">Fiery & flavorful</p>

              </div>

              {/* Card 3 */}
              <div className="absolute top-40 left-1/4 w-64 h-80 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 shadow-2xl z-10">
                <img
                  src={Cardamom}
                  alt="Cardamom"
                  className="w-full h-32 object-cover rounded-xl mb-4"
                />
                <h3 className="text-white font-bold text-xl mb-2">
                  Cardamom
                </h3>
                <p className="text-teal-100 text-sm">Aromatic & premium</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#1da199"
          />
        </svg>
      </div>
    </section>
  );
};

export default Home;
