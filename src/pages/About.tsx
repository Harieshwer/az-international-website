import React, { useEffect, useState } from "react";
import Chilli from "../assets/Redchilli.png.png";
import Cardamom from "../assets/Cardamom.png";
import Pepper from "../assets/BlackPepper.png";

const About: React.FC = () => {
  
  const [currentImage, setCurrentImage] = useState(0);

  const images = [Chilli, Cardamom, Pepper];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block mb-4">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider bg-teal-50 px-4 py-2 rounded-full">
              About Us
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Crafting Excellence in
            <span className="block text-transparent bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text">
              Every Grain
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to AZ International, a premier Indian export startup since
            2025 specializing in the finest Spices, Pulses, and Cereals. India
            is the world’s spice bowl, and we take pride in bringing that
            authentic flavor and nutritional richness to the global market.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-right">
            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl relative">

                {/* Sliding Images */}
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="AZ International"
                    className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"
                      }`}
                  />
                ))}

                {/* Optional dark overlay */}
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Background Decorations */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-emerald-400 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-500 rounded-full -z-10"></div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-up">
            <h3 className="text-3xl font-bold text-gray-900">
              A Legacy of Flavor & Trust
            </h3>

            <p className="text-gray-700 leading-relaxed text-lg">
              Based in India, AZ International is a fast-growing export startup
              specializing in premium Spices, Pulses, and Cereals. We represent
              the gold standard in Indian agriculture, offering a diverse
              portfolio of ethically sourced and rigorously tested products.
              Whether you are a wholesaler, retailer, or food processor, we
              supply the finest ingredients for global success.
            </p>

            <div className="pt-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 group"
              >
                Explore Our Products
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-teal-300 hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}
              >
                {value.icon}
              </div>

              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h4>

              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div> */}

        {/* Certifications */}
        {/* <div className="mt-20 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Certified & Trusted
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="text-gray-700">
              <div className="text-4xl font-bold text-teal-600 mb-2">
                ISO 9001
              </div>
              <div className="text-sm">Quality Management</div>
            </div>

            <div className="text-gray-700">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                USDA Organic
              </div>
              <div className="text-sm">Certified Organic</div>
            </div>

            <div className="text-gray-700">
              <div className="text-4xl font-bold text-teal-600 mb-2">
                FSSAI
              </div>
              <div className="text-sm">Food Safety</div>
            </div>

            <div className="text-gray-700">
              <div className="text-4xl font-bold text-teal-700 mb-2">
                HACCP
              </div>
              <div className="text-sm">Hazard Analysis</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
