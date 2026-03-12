import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Pepper from "../assets/BlackPepper.png";
import Cumin from "../assets/CuminSeeds.png";
import Cardamom from "../assets/Cardamom.png";
import Cinnamon from "../assets/Cinnamon.png";
import Clove from "../assets/Clove.png";
import StarAnise from "../assets/StarAnise.png";
import Coriander from "../assets/CorianderSeeds.png";
import BayLeaf from "../assets/BayLeaf.png";
import Nutmeg from "../assets/Nutmeg.png";
import RedChilli from "../assets/Redchilli.png.png";
import Ginger from "../assets/Ginger.png";
import Turmeric from "../assets/Turmeric.png";
import Rice from "../assets/Rice.png";
import Wheat from "../assets/Wheat.png";
import Maize from "../assets/Maize.png";
import Barley from "../assets/Barley.png";
import Oats from "../assets/Oats.png";
import Toor from "../assets/Toor.png";
import Moong from "../assets/Moong.png";
import Chana from "../assets/Chana.png";
import Urad from "../assets/Urad.png";
import Masoor from "../assets/Masoor.png";
import Rajma from "../assets/Rajma.png";





interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
}

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);


  const categories = [
    { id: "all", name: "All Products" },
    { id: "spices", name: "Spices" },
    { id: "cereals", name: "Cereals" },
    { id: "pulses", name: "Pulses" },
  ];

  // -------------------------
  // PRODUCTS (From Your Image)
  // -------------------------
  const products: Product[] = [
    // SPICES
    {
      id: 1,
      name: "Black Pepper",
      category: "spices",
      description: "Premium peppercorns with rich aroma.",
      image: Pepper,
    },
    {
      id: 2,
      name: "Cumin Seeds",
      category: "spices",
      description: "High-quality cumin seeds full of flavor.",
      image: Cumin,
    },
    {
      id: 3,
      name: "Coriander Seeds",
      category: "spices",
      description: "Fresh coriander seeds with natural aroma.",
      image: Coriander,
    },
    {
      id: 4,
      name: "Cinnamon",
      category: "spices",
      description: "Authentic cinnamon sticks.",
      image: Cinnamon,
    },
    {
      id: 5,
      name: "Cardamom",
      category: "spices",
      description: "Green cardamom pods.",
      image: Cardamom,
    },
    {
      id: 6,
      name: "Clove",
      category: "spices",
      description: "Whole cloves with intense aroma.",
      image: Clove,
    },
    {
      id: 7,
      name: "Star Anise",
      category: "spices",
      description: "Strong aromatic star anise.",
      image: StarAnise,
    },
    {
      id: 8,
      name: "Bay Leaf",
      category: "spices",
      description: "Natural dried bay leaves.",
      image: BayLeaf,
    },
    {
      id: 9,
      name: "Nutmeg",
      category: "spices",
      description: "Fresh and aromatic nutmeg.",
      image: Nutmeg,
    },
    {
      id: 10,
      name: "Red Chilli Powder",
      category: "spices",
      description: "Bright red and spicy chilli powder.",
      image: RedChilli,
    },
    {
      id: 11,
      name: "Ginger",
      category: "spices",
      description: "Natural dried ginger.",
      image: Ginger,
    },
    {
      id: 12,
      name: "Turmeric",
      category: "spices",
      description: "Golden turmeric roots/powder.",
      image: Turmeric,
    },

    // CEREALS
    {
      id: 13,
      name: "Rice",
      category: "cereals",
      description: "Premium quality rice grains.",
      image: Rice,
    },
    {
      id: 14,
      name: "Wheat Flour",
      category: "cereals",
      description: "Fine quality wheat flour.",
      image: Wheat,
    },
    {
      id: 15,
      name: "Maize",
      category: "cereals",
      description: "High-quality maize grains.",
      image: Maize,
    },
    {
      id: 16,
      name: "Barley",
      category: "cereals",
      description: "Pure and natural barley grains.",
      image: Barley,
    },
    {
      id: 17,
      name: "Oats",
      category: "cereals",
      description: "Healthy natural oats.",
      image: Oats,
    },

    // PULSES
    {
      id: 18,
      name: "Toor Dal",
      category: "pulses",
      description: "Premium arhar dal.",
      image: Toor,
    },
    {
      id: 19,
      name: "Moong Dal",
      category: "pulses",
      description: "High-quality moong lentils.",
      image: Moong,
    },
    {
      id: 20,
      name: "Chana Dal",
      category: "pulses",
      description: "Split chickpeas of top quality.",
      image: Chana,
    },
    {
      id: 21,
      name: "Urad Dal",
      category: "pulses",
      description: "Premium urad dal.",
      image: Urad,
    },
    {
      id: 22,
      name: "Masoor Dal",
      category: "pulses",
      description: "Red lentils full of nutrition.",
      image: Masoor,
    },
    {
      id: 23,
      name: "Rajma",
      category: "pulses",
      description: "High-quality kidney beans.",
      image: Rajma,
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section id="products" className="py-20 bg-white">
      <style>
        {`
          /* Hide scrollbar for all browsers */
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
           @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }

    .animate-fadeIn {
      animation: fadeIn 0.2s ease-out;
    }
        `}
      </style>

      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-teal-700 font-semibold text-sm uppercase bg-white px-4 py-2 rounded-full shadow">
            Our Products
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-teal-900 mt-6">
            Premium Agro
            <span className="block text-teal-600">Product Range</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Authentic spices, cereals and pulses — delivered with unmatched quality.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${activeCategory === c.id
                ? "bg-teal-600 text-white shadow"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-teal-100"
                }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-end gap-3 mb-4 pr-2">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 flex items-center justify-center bg-teal-600 text-white rounded-full hover:bg-teal-700 transition shadow"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={scrollRight}
            className="w-10 h-10 flex items-center justify-center bg-teal-600 text-white rounded-full hover:bg-teal-700 transition shadow"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4"
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="min-w-[260px] snap-start bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-44 object-cover"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold text-teal-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4 text-lg">
            Looking for bulk orders or wholesale pricing?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-teal-600 text-white rounded-full shadow hover:bg-teal-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
      {selectedProduct && (
        <div className="fixed inset-0 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full overflow-hidden animate-fadeIn">

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h2 className="text-3xl font-bold text-teal-800">
                {selectedProduct.name}
              </h2>

              <p className="text-gray-700 mt-4 text-lg">
                {selectedProduct.description}
              </p>

              <button
                className="mt-6 px-6 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition"
                onClick={() => setSelectedProduct(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>

  );
};

export default Products;
