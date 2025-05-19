
// Utility functions for performance calculations

/**
 * Calculate 0-60 mph time based on power-to-weight ratio
 * @param power - Engine power in hp
 * @param weight - Vehicle weight in lbs
 * @param dragCoefficient - Vehicle drag coefficient
 * @returns Estimated 0-60 mph time in seconds
 */
export const calculate0To60Time = (power: number, weight: number, dragCoefficient: number): number => {
  // Simple formula based on power-to-weight ratio with drag coefficient adjustment
  const powerToWeight = power / weight;
  const baseTime = 5.0 / powerToWeight;
  const dragAdjustedTime = baseTime * (dragCoefficient / 0.33); // Normalize to typical coefficient
  
  // Limit minimum time based on traction physics
  return Math.max(2.3, parseFloat(dragAdjustedTime.toFixed(2)));
};

/**
 * Calculate estimated top speed
 * @param power - Engine power in hp
 * @param dragCoefficient - Vehicle drag coefficient
 * @returns Estimated top speed in mph
 */
export const calculateTopSpeed = (power: number, dragCoefficient: number): number => {
  // Simple formula based on power and drag coefficient
  const baseSpeed = 180 * Math.pow(power / 400, 0.33);
  const dragAdjustedSpeed = baseSpeed * Math.pow(0.33 / dragCoefficient, 0.5);
  
  return Math.round(dragAdjustedSpeed);
};

/**
 * Calculate estimated fuel consumption
 * @param power - Engine power in hp
 * @param weight - Vehicle weight in lbs
 * @param drivingMode - Driving mode factor (0.8 for eco, 1.0 for normal, 1.3 for sport)
 * @returns Estimated MPG values { city, highway, combined }
 */
export const calculateFuelConsumption = (
  power: number, 
  weight: number, 
  drivingMode: number = 1.0
): { city: number; highway: number; combined: number } => {
  // Simple formula based on power, weight and driving mode
  const baseCityMpg = 900 / (power * 0.5 + weight * 0.001);
  const baseHighwayMpg = 1200 / (power * 0.3 + weight * 0.0008);
  
  const cityMpg = Math.round(baseCityMpg / drivingMode);
  const highwayMpg = Math.round(baseHighwayMpg / drivingMode);
  const combinedMpg = Math.round((cityMpg * 0.45 + highwayMpg * 0.55));
  
  return { city: cityMpg, highway: highwayMpg, combined: combinedMpg };
};

/**
 * Calculate quarter mile time and speed
 * @param power - Engine power in hp
 * @param weight - Vehicle weight in lbs
 * @param dragCoefficient - Vehicle drag coefficient
 * @returns Estimated quarter mile performance { time, speed }
 */
export const calculateQuarterMile = (
  power: number, 
  weight: number, 
  dragCoefficient: number
): { time: number; speed: number } => {
  // Power-to-weight ratio is key for quarter mile performance
  const powerToWeight = power / weight;
  const baseTime = 13.0 / powerToWeight;
  const dragAdjustedTime = baseTime * (dragCoefficient / 0.33);
  
  // Trap speed is primarily a function of power and weight
  const baseSpeed = 100 * Math.pow(powerToWeight * 2, 0.3);
  const dragAdjustedSpeed = baseSpeed * Math.pow(0.33 / dragCoefficient, 0.2);
  
  return { 
    time: Math.max(8.5, parseFloat(dragAdjustedTime.toFixed(2))), 
    speed: Math.round(dragAdjustedSpeed)
  };
};

/**
 * Calculate range estimate
 * @param mpg - Miles per gallon
 * @param tankSize - Fuel tank size in gallons
 * @returns Estimated range in miles
 */
export const calculateRange = (mpg: number, tankSize: number = 18.5): number => {
  return Math.round(mpg * tankSize);
};

/**
 * Calculate carbon footprint
 * @param mpg - Miles per gallon
 * @returns CO2 emissions in kg/mile
 */
export const calculateCarbonFootprint = (mpg: number): number => {
  // Average gasoline CO2 emission is 8.887 kg per gallon
  const co2PerGallon = 8.887;
  return parseFloat((co2PerGallon / mpg).toFixed(3));
};

/**
 * Calculate cost per mile
 * @param mpg - Miles per gallon
 * @param fuelPrice - Fuel price per gallon
 * @returns Cost per mile in dollars
 */
export const calculateCostPerMile = (mpg: number, fuelPrice: number = 3.5): number => {
  return parseFloat((fuelPrice / mpg).toFixed(3));
};
