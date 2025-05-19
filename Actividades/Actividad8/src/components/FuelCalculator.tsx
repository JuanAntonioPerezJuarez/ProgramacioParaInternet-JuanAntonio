
import React, { useState, useEffect } from "react";
import { modelVariants } from "../data/challengerData";
import { calculateFuelConsumption, calculateRange, calculateCarbonFootprint, calculateCostPerMile } from "../utils/performanceCalculator";

const FuelCalculator = () => {
  const [selectedModel, setSelectedModel] = useState(modelVariants[0].id);
  const [drivingMode, setDrivingMode] = useState("normal");
  const [drivingCondition, setDrivingCondition] = useState("mixed");
  const [fuelPrice, setFuelPrice] = useState(3.5);
  
  const [results, setResults] = useState({
    cityMpg: 0,
    highwayMpg: 0,
    combinedMpg: 0,
    range: 0,
    carbonFootprint: 0,
    costPerMile: 0
  });
  
  // Get the base model data
  const getBaseModel = () => {
    return modelVariants.find(model => model.id === selectedModel) || modelVariants[0];
  };
  
  // Calculate fuel metrics
  const calculateFuelMetrics = () => {
    const baseModel = getBaseModel();
    
    // Convert driving mode to factor
    const drivingFactor = {
      eco: 0.8,
      normal: 1.0,
      sport: 1.3,
      track: 1.6
    }[drivingMode as keyof typeof drivingFactor];
    
    // Calculate consumption
    const consumption = calculateFuelConsumption(
      baseModel.basePower, 
      baseModel.baseWeight, 
      drivingFactor
    );
    
    // Get specific MPG based on driving condition
    let effectiveMpg = consumption.combined;
    if (drivingCondition === "city") effectiveMpg = consumption.city;
    if (drivingCondition === "highway") effectiveMpg = consumption.highway;
    
    // Calculate additional metrics
    const range = calculateRange(effectiveMpg);
    const carbonFootprint = calculateCarbonFootprint(effectiveMpg);
    const costPerMile = calculateCostPerMile(effectiveMpg, fuelPrice);
    
    setResults({
      cityMpg: consumption.city,
      highwayMpg: consumption.highway,
      combinedMpg: consumption.combined,
      range,
      carbonFootprint,
      costPerMile
    });
  };
  
  // Calculate on input change
  useEffect(() => {
    calculateFuelMetrics();
  }, [selectedModel, drivingMode, drivingCondition, fuelPrice]);
  
  return (
    <section className="py-20 bg-challenger-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-racing text-white text-center mb-12">
          <span className="text-challenger-red">FUEL</span> CALCULATOR
        </h2>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Calculate fuel consumption, range, and cost based on your driving style and conditions.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Inputs */}
          <div className="bg-challenger-darkgray rounded-lg p-6 border border-challenger-gray">
            <h3 className="text-2xl font-racing text-white mb-6">Driving Parameters</h3>
            
            {/* Model Selection */}
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Challenger Model</label>
              <select 
                className="select-field w-full"
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
              >
                {modelVariants.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name} ({model.engine})
                  </option>
                ))}
              </select>
            </div>
            
            {/* Driving Mode */}
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Driving Mode</label>
              <div className="grid grid-cols-2 gap-4 mb-2">
                <button 
                  className={`py-2 px-4 rounded border ${
                    drivingMode === "eco" 
                      ? "bg-green-700 border-green-700" 
                      : "border-challenger-gray hover:border-green-700"
                  } text-white transition-colors duration-200`}
                  onClick={() => setDrivingMode("eco")}
                >
                  Eco
                </button>
                <button 
                  className={`py-2 px-4 rounded border ${
                    drivingMode === "normal" 
                      ? "bg-blue-700 border-blue-700" 
                      : "border-challenger-gray hover:border-blue-700"
                  } text-white transition-colors duration-200`}
                  onClick={() => setDrivingMode("normal")}
                >
                  Normal
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  className={`py-2 px-4 rounded border ${
                    drivingMode === "sport" 
                      ? "bg-orange-700 border-orange-700" 
                      : "border-challenger-gray hover:border-orange-700"
                  } text-white transition-colors duration-200`}
                  onClick={() => setDrivingMode("sport")}
                >
                  Sport
                </button>
                <button 
                  className={`py-2 px-4 rounded border ${
                    drivingMode === "track" 
                      ? "bg-red-700 border-red-700" 
                      : "border-challenger-gray hover:border-red-700"
                  } text-white transition-colors duration-200`}
                  onClick={() => setDrivingMode("track")}
                >
                  Track
                </button>
              </div>
            </div>
            
            {/* Driving Conditions */}
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Driving Conditions</label>
              <div className="grid grid-cols-3 gap-4">
                <button 
                  className={`py-2 px-4 rounded border ${
                    drivingCondition === "city" 
                      ? "bg-challenger-red border-challenger-red" 
                      : "border-challenger-gray hover:border-challenger-red"
                  } text-white transition-colors duration-200`}
                  onClick={() => setDrivingCondition("city")}
                >
                  City
                </button>
                <button 
                  className={`py-2 px-4 rounded border ${
                    drivingCondition === "highway" 
                      ? "bg-challenger-red border-challenger-red" 
                      : "border-challenger-gray hover:border-challenger-red"
                  } text-white transition-colors duration-200`}
                  onClick={() => setDrivingCondition("highway")}
                >
                  Highway
                </button>
                <button 
                  className={`py-2 px-4 rounded border ${
                    drivingCondition === "mixed" 
                      ? "bg-challenger-red border-challenger-red" 
                      : "border-challenger-gray hover:border-challenger-red"
                  } text-white transition-colors duration-200`}
                  onClick={() => setDrivingCondition("mixed")}
                >
                  Mixed
                </button>
              </div>
            </div>
            
            {/* Fuel Price */}
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">
                Fuel Price ($ per gallon): <span className="font-bold">${fuelPrice.toFixed(2)}</span>
              </label>
              <input 
                type="range" 
                min="2.5" 
                max="6" 
                step="0.1"
                value={fuelPrice}
                onChange={(e) => setFuelPrice(parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>$2.50</span>
                <span>$4.25</span>
                <span>$6.00</span>
              </div>
            </div>
          </div>
          
          {/* Results */}
          <div className="bg-challenger-darkgray rounded-lg p-6 border border-challenger-gray">
            <h3 className="text-2xl font-racing text-white mb-6">Consumption Results</h3>
            
            {/* MPG Results */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-racing text-green-500 mb-1">
                  {results.cityMpg}
                </div>
                <div className="text-white text-sm">City MPG</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-racing text-blue-500 mb-1">
                  {results.highwayMpg}
                </div>
                <div className="text-white text-sm">Highway MPG</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-racing text-purple-500 mb-1">
                  {results.combinedMpg}
                </div>
                <div className="text-white text-sm">Combined MPG</div>
              </div>
            </div>
            
            {/* Range */}
            <div className="mb-8">
              <h4 className="text-lg text-white mb-2">Estimated Range</h4>
              <div className="progress-bar">
                <div 
                  className="progress-bar-inner" 
                  style={{ width: `${Math.min(results.range / 500 * 100, 100)}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-300">0 miles</span>
                <span className="text-2xl font-racing text-challenger-red">{results.range} miles</span>
                <span className="text-gray-300">500 miles</span>
              </div>
            </div>
            
            {/* Cost Per Mile */}
            <div className="mb-8">
              <h4 className="text-lg text-white mb-2">Cost Per Mile</h4>
              <div className="text-3xl font-racing text-challenger-red mb-1">
                ${results.costPerMile}
              </div>
              <p className="text-gray-300 text-sm">
                Based on fuel price of ${fuelPrice.toFixed(2)}/gallon
              </p>
            </div>
            
            {/* Carbon Footprint */}
            <div>
              <h4 className="text-lg text-white mb-2">Carbon Footprint</h4>
              <div className="text-3xl font-racing text-green-500 mb-1">
                {results.carbonFootprint} kg CO₂/mile
              </div>
              <p className="text-gray-300 text-sm">
                Based on average emissions from gasoline combustion
              </p>
            </div>
            
            {/* Annual Costs */}
            <div className="mt-8 p-4 border border-gray-700 rounded-lg bg-challenger-gray bg-opacity-20">
              <h4 className="text-lg text-white mb-2">Annual Estimates (12,000 miles)</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-gray-300">Fuel Cost:</div>
                  <div className="text-xl font-bold text-white">
                    ${(results.costPerMile * 12000).toFixed(2)}
                  </div>
                </div>
                <div>
                  <div className="text-gray-300">Gallons Used:</div>
                  <div className="text-xl font-bold text-white">
                    {Math.round(12000 / results.combinedMpg)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuelCalculator;
