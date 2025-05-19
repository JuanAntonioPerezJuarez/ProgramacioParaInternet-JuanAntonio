
import React, { useState } from "react";
import { modelVariants } from "../data/challengerData";

const ModelComparison = () => {
  const [selectedModels, setSelectedModels] = useState(["sxt", "rt", "hellcat"]);
  
  const toggleModel = (modelId: string) => {
    if (selectedModels.includes(modelId)) {
      if (selectedModels.length > 1) {
        setSelectedModels(selectedModels.filter(id => id !== modelId));
      }
    } else {
      if (selectedModels.length < 3) {
        setSelectedModels([...selectedModels, modelId]);
      }
    }
  };
  
  const getModelById = (id: string) => {
    return modelVariants.find(model => model.id === id) || null;
  };
  
  // Custom comparison attributes and metrics
  const comparisonMetrics = [
    { name: "Engine", key: "engine" },
    { name: "Power", key: "basePower", unit: "hp" },
    { name: "Weight", key: "baseWeight", unit: "lbs" },
    { 
      name: "Power-to-Weight", 
      key: "powerToWeight", 
      unit: "hp/ton",
      calculate: (model: any) => ((model.basePower / model.baseWeight) * 1000).toFixed(2)
    },
    { 
      name: "0-60 mph", 
      key: "acceleration", 
      unit: "sec",
      calculate: (model: any) => {
        // Simple estimation based on power-to-weight
        const powerToWeight = model.basePower / model.baseWeight;
        return (5.0 / powerToWeight).toFixed(1);
      }
    },
    { 
      name: "Top Speed", 
      key: "topSpeed", 
      unit: "mph",
      calculate: (model: any) => {
        // Simple estimation based on power
        return Math.round(180 * Math.pow(model.basePower / 400, 0.33));
      }
    },
    { 
      name: "Fuel Economy", 
      key: "mpg", 
      unit: "mpg (est.)",
      calculate: (model: any) => {
        // Simple estimation based on power
        return Math.round(30 - (model.basePower / 100));
      }
    },
    { 
      name: "Price", 
      key: "price", 
      unit: "$",
      calculate: (model: any) => {
        // Approximate base prices
        const basePrices: {[key: string]: number} = {
          sxt: 30000,
          rt: 38000,
          scat: 46000,
          hellcat: 65000,
          redeye: 78000
        };
        return basePrices[model.id].toLocaleString();
      }
    }
  ];

  return (
    <section id="compare" className="py-20 bg-challenger-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-racing text-white text-center mb-12">
          <span className="text-challenger-red">MODEL</span> COMPARISON
        </h2>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Compare different Challenger models side by side to find the perfect match for your style and performance needs.
        </p>
        
        {/* Model Selection Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {modelVariants.map((model) => (
            <button
              key={model.id}
              className={`px-4 py-2 rounded-full border-2 ${
                selectedModels.includes(model.id) 
                  ? "bg-challenger-red border-challenger-red" 
                  : "border-challenger-gray hover:border-challenger-red"
              } text-white transition-colors duration-200`}
              onClick={() => toggleModel(model.id)}
            >
              {model.name}
            </button>
          ))}
        </div>
        
        {/* Comparison Table */}
        <div className="bg-challenger-darkgray rounded-lg overflow-hidden shadow-lg border border-challenger-gray">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-challenger-gray">
                  <th className="py-4 px-6 text-left text-white">Feature</th>
                  {selectedModels.map((modelId) => {
                    const model = getModelById(modelId);
                    return model ? (
                      <th key={model.id} className="py-4 px-6 text-center text-white">
                        {model.name}
                      </th>
                    ) : null;
                  })}
                </tr>
              </thead>
              <tbody>
                {comparisonMetrics.map((metric, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-challenger-darkgray' : 'bg-challenger-gray bg-opacity-30'}>
                    <td className="py-4 px-6 text-left text-white font-medium">
                      {metric.name}
                    </td>
                    {selectedModels.map((modelId) => {
                      const model = getModelById(modelId);
                      if (!model) return null;
                      
                      const value = metric.calculate 
                        ? metric.calculate(model) 
                        : model[metric.key as keyof typeof model];
                        
                      return (
                        <td key={`${model.id}-${metric.key}`} className="py-4 px-6 text-center text-white">
                          {value} {metric.unit ? metric.unit : ''}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Visual Comparison */}
        <div className="mt-16">
          <h3 className="text-2xl font-racing text-white text-center mb-8">Power Comparison</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {selectedModels.map((modelId) => {
              const model = getModelById(modelId);
              if (!model) return null;
              
              // Calculate percentage for visualization
              const powerPercentage = Math.min((model.basePower / 800) * 100, 100);
              
              return (
                <div key={model.id} className="bg-challenger-darkgray rounded-lg p-6 border border-challenger-gray">
                  <h4 className="text-xl text-white mb-4">{model.name}</h4>
                  
                  <div className="text-center">
                    <div className="text-4xl font-racing text-challenger-red mb-2">
                      {model.basePower} HP
                    </div>
                    
                    <div className="mt-4">
                      <div className="progress-bar">
                        <div 
                          className="progress-bar-inner" 
                          style={{ width: `${powerPercentage}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-sm text-gray-300">
                      Engine: {model.engine}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelComparison;
