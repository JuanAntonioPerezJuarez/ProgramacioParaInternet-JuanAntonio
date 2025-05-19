
import React, { useState, useEffect } from "react";
import { 
  modelVariants, 
  modifications 
} from "../data/challengerData";
import {
  calculate0To60Time,
  calculateTopSpeed,
  calculateQuarterMile
} from "../utils/performanceCalculator";

const PerformanceCalculator = () => {
  const [selectedModel, setSelectedModel] = useState(modelVariants[0].id);
  const [selectedYear, setSelectedYear] = useState("2023");
  const [selectedEngine, setSelectedEngine] = useState("stock");
  const [selectedTransmission, setSelectedTransmission] = useState("stock");
  const [selectedWeight, setSelectedWeight] = useState("stock");
  const [selectedAero, setSelectedAero] = useState("stock");
  
  const [results, setResults] = useState({
    zeroToSixty: 0,
    topSpeed: 0,
    quarterMileTime: 0,
    quarterMileSpeed: 0,
    totalPower: 0,
    finalWeight: 0
  });
  
  // Get the base model data
  const getBaseModel = () => {
    return modelVariants.find(model => model.id === selectedModel) || modelVariants[0];
  };
  
  // Calculate performance metrics
  const calculatePerformance = () => {
    const baseModel = getBaseModel();
    
    // Get modifications
    const engineMod = modifications.engine.find(mod => mod.id === selectedEngine) || modifications.engine[0];
    const transmissionMod = modifications.transmission.find(mod => mod.id === selectedTransmission) || modifications.transmission[0];
    const weightMod = modifications.weight.find(mod => mod.id === selectedWeight) || modifications.weight[0];
    const aeroMod = modifications.aero.find(mod => mod.id === selectedAero) || modifications.aero[0];
    
    // Calculate power and weight
    const totalPower = baseModel.basePower + engineMod.powerBoost + transmissionMod.powerLoss;
    const finalWeight = baseModel.baseWeight + engineMod.weightChange + transmissionMod.weightChange + weightMod.weightChange;
    
    // Calculate performance metrics
    const zeroToSixty = calculate0To60Time(totalPower, finalWeight, aeroMod.dragCoefficient);
    const topSpeed = calculateTopSpeed(totalPower, aeroMod.dragCoefficient);
    const quarterMile = calculateQuarterMile(totalPower, finalWeight, aeroMod.dragCoefficient);
    
    setResults({
      zeroToSixty,
      topSpeed,
      quarterMileTime: quarterMile.time,
      quarterMileSpeed: quarterMile.speed,
      totalPower,
      finalWeight
    });
  };
  
  // Calculate on input change
  useEffect(() => {
    calculatePerformance();
  }, [selectedModel, selectedYear, selectedEngine, selectedTransmission, selectedWeight, selectedAero]);
  
  return (
    <section id="performance" className="py-20 bg-gradient-to-b from-challenger-darkgray to-challenger-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-racing text-white text-center mb-12">
          <span className="text-challenger-red">PERFORMANCE</span> CALCULATOR
        </h2>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16">
          See how different modifications affect your Challenger's performance.
          Adjust engine, transmission, weight, and aerodynamics to create your dream build.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Inputs */}
          <div className="bg-challenger-darkgray rounded-lg p-6 border border-challenger-gray">
            <h3 className="text-2xl font-racing text-white mb-6">Build Your Challenger</h3>
            
            {/* Base Model & Year */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-gray-300 mb-2">Base Model</label>
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
              <div>
                <label className="block text-gray-300 mb-2">Year</label>
                <select 
                  className="select-field w-full"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  {["2023", "2022", "2021", "2020", "2019", "2018"].map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <h4 className="text-xl text-white mb-4">Modifications</h4>
            
            {/* Engine Mods */}
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Engine Modifications</label>
              <select 
                className="select-field w-full"
                value={selectedEngine}
                onChange={(e) => setSelectedEngine(e.target.value)}
              >
                {modifications.engine.map((mod) => (
                  <option key={mod.id} value={mod.id}>
                    {mod.name} {mod.powerBoost > 0 ? `(+${mod.powerBoost} HP)` : ''}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Transmission Mods */}
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Transmission</label>
              <select 
                className="select-field w-full"
                value={selectedTransmission}
                onChange={(e) => setSelectedTransmission(e.target.value)}
              >
                {modifications.transmission.map((mod) => (
                  <option key={mod.id} value={mod.id}>
                    {mod.name}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Weight Reduction */}
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Weight Modifications</label>
              <select 
                className="select-field w-full"
                value={selectedWeight}
                onChange={(e) => setSelectedWeight(e.target.value)}
              >
                {modifications.weight.map((mod) => (
                  <option key={mod.id} value={mod.id}>
                    {mod.name} {mod.weightChange !== 0 ? `(${mod.weightChange > 0 ? '+' : ''}${mod.weightChange} lbs)` : ''}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Aerodynamics */}
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Aerodynamics</label>
              <select 
                className="select-field w-full"
                value={selectedAero}
                onChange={(e) => setSelectedAero(e.target.value)}
              >
                {modifications.aero.map((mod) => (
                  <option key={mod.id} value={mod.id}>
                    {mod.name} (Cd: {mod.dragCoefficient})
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Results */}
          <div className="bg-challenger-darkgray rounded-lg p-6 border border-challenger-gray">
            <h3 className="text-2xl font-racing text-white mb-6">Performance Results</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 0-60 Time */}
              <div className="text-center">
                <div className="text-5xl font-racing text-challenger-red mb-2">
                  {results.zeroToSixty}s
                </div>
                <div className="text-white text-lg">0-60 mph</div>
              </div>
              
              {/* Top Speed */}
              <div className="text-center">
                <div className="text-5xl font-racing text-challenger-red mb-2">
                  {results.topSpeed}
                </div>
                <div className="text-white text-lg">Top Speed (mph)</div>
              </div>
              
              {/* Quarter Mile */}
              <div className="text-center">
                <div className="text-5xl font-racing text-challenger-red mb-2">
                  {results.quarterMileTime}s
                </div>
                <div className="text-white text-lg">1/4 Mile Time</div>
              </div>
              
              {/* Quarter Mile Speed */}
              <div className="text-center">
                <div className="text-5xl font-racing text-challenger-red mb-2">
                  {results.quarterMileSpeed}
                </div>
                <div className="text-white text-lg">1/4 Mile Speed (mph)</div>
              </div>
            </div>
            
            {/* Power and Weight */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg text-white mb-2">Total Power</h4>
                <div className="progress-bar">
                  <div 
                    className="progress-bar-inner" 
                    style={{ width: `${Math.min(results.totalPower / 900 * 100, 100)}%` }}
                  ></div>
                </div>
                <div className="text-right text-gray-300 mt-1">{results.totalPower} HP</div>
              </div>
              
              <div>
                <h4 className="text-lg text-white mb-2">Final Weight</h4>
                <div className="progress-bar">
                  <div 
                    className="progress-bar-inner" 
                    style={{ width: `${Math.min(results.finalWeight / 5000 * 100, 100)}%` }}
                  ></div>
                </div>
                <div className="text-right text-gray-300 mt-1">{results.finalWeight} lbs</div>
              </div>
            </div>
            
            {/* Power-to-Weight Ratio */}
            <div className="mt-8">
              <h4 className="text-lg text-white mb-2">Power-to-Weight Ratio</h4>
              <div className="text-3xl font-racing text-challenger-red">
                {(results.totalPower / results.finalWeight * 1000).toFixed(2)} hp/ton
              </div>
              <p className="text-gray-300 mt-2">
                The power-to-weight ratio is a key indicator of a vehicle's performance potential.
              </p>
            </div>
            
            {/* Share Build Button */}
            <div className="mt-8 text-center">
              <button className="button-primary">
                Save & Share This Build
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceCalculator;
