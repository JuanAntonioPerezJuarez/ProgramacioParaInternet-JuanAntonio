
import React, { useState } from "react";
import { challengerModels } from "../data/challengerData";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeImage, setActiveImage] = useState<string | null>(null);
  
  const generations = ["all", ...new Set(challengerModels.map(model => model.generation))];
  
  const filteredModels = activeFilter === "all" 
    ? challengerModels 
    : challengerModels.filter(model => model.generation === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-challenger-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-racing text-white text-center mb-12">
          <span className="text-challenger-red">CHALLENGER</span> GALLERY
        </h2>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Browse photos of different Challenger models throughout the years. 
          Filter by generation to find the perfect era that speaks to you.
        </p>
        
        {/* Gallery Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {generations.map((generation) => (
            <button
              key={generation}
              className={`px-4 py-2 rounded-full border-2 ${
                activeFilter === generation 
                  ? "bg-challenger-red border-challenger-red" 
                  : "border-challenger-gray hover:border-challenger-red"
              } text-white transition-colors duration-200`}
              onClick={() => setActiveFilter(generation)}
            >
              {generation === "all" ? "All Generations" : generation}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredModels.map((model, index) => (
            <div 
              key={index} 
              className="media-card bg-challenger-darkgray rounded-lg overflow-hidden shadow-lg border border-challenger-gray card-hover"
              onClick={() => setActiveImage(model.image)}
            >
              <img 
                src={model.image} 
                alt={`${model.year} Challenger ${model.version}`} 
                className="w-full h-64 object-cover"
              />
              <div className="card-content">
                <h3 className="text-xl font-bold text-white">
                  {model.year} {model.version}
                </h3>
                <p className="text-gray-300 text-sm">{model.generation}</p>
                <p className="text-gray-400 mt-2">{model.specs.engine} • {model.specs.power}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {activeImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh]">
              <button 
                className="absolute top-4 right-4 text-white bg-challenger-red rounded-full w-10 h-10 flex items-center justify-center"
                onClick={() => setActiveImage(null)}
              >
                X
              </button>
              <img 
                src={activeImage} 
                alt="Enlarged view" 
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
