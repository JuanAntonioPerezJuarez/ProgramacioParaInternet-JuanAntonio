
import React, { useState } from "react";
import { timelineEvents } from "../data/challengerData";

const Timeline = () => {
  const [activeEvent, setActiveEvent] = useState<string | null>(null);

  const generations = [...new Set(timelineEvents.map(event => event.generation))];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-challenger-black to-challenger-darkgray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-racing text-white text-center mb-12">
          <span className="text-challenger-red">CHALLENGER</span> TIMELINE
        </h2>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Explore the evolution of the Dodge Challenger from its origins in 1970 to the modern era.
          Click on any event to learn more about that milestone in Challenger history.
        </p>

        {/* Generations Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {generations.map((generation) => (
            <button
              key={generation}
              className="px-4 py-2 rounded-full border-2 border-challenger-red text-white hover:bg-challenger-red transition-colors duration-200"
            >
              {generation}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-challenger-gray z-0"></div>
          
          {/* Timeline Events */}
          <div className="relative z-10">
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className={`timeline-item mb-16 ${index % 2 === 0 ? 'md:ml-auto md:mr-[50%] md:pr-12' : 'md:mr-auto md:ml-[50%] md:pl-12'} md:w-[45%]`}
                onClick={() => setActiveEvent(activeEvent === event.year ? null : event.year)}
              >
                <div className="bg-challenger-darkgray rounded-lg overflow-hidden shadow-lg border border-challenger-gray hover:border-challenger-red transition-colors duration-300">
                  <div className="relative">
                    <img 
                      src={event.image} 
                      alt={`${event.year} ${event.title}`} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-challenger-red text-white px-4 py-2 font-racing">
                      {event.year}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-300">{event.description}</p>
                    
                    {/* Expanded Content */}
                    {activeEvent === event.year && (
                      <div className="mt-4 pt-4 border-t border-challenger-gray animate-fade-in">
                        <p className="text-gray-300 mb-2">Generation: {event.generation}</p>
                        <a href="#" className="text-challenger-red hover:underline">
                          See photos from this era
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
