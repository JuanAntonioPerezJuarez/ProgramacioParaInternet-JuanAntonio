
export interface ChallengerModel {
  year: string;
  generation: string;
  version: string;
  image: string;
  specs: {
    engine: string;
    power: string;
    torque: string;
    transmission: string;
    weight: string;
    acceleration: string;
    topSpeed: string;
    consumption: {
      city: string;
      highway: string;
      combined: string;
    }
  }
  description: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
  generation: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "1970",
    title: "First Generation Launch",
    description: "The Dodge Challenger was introduced as Dodge's answer to the Ford Mustang and Chevrolet Camaro. It was available with a range of engines, from a 225 cubic inch Slant-Six to the legendary 426 Hemi.",
    image: "/img/1970.png",
    generation: "First Generation"
  },
  {
    year: "1971",
    title: "R/T Performance Package",
    description: "The Challenger R/T (Road/Track) featured a performance-tuned suspension, heavy-duty brakes, and high-performance engines, positioning it as the performance variant.",
    image: "/img/1971.png",
    generation: "First Generation"
  },
  {
    year: "1974",
    title: "End of First Generation",
    description: "The first generation came to an end due to changing emissions regulations and the oil crisis, which significantly impacted muscle car sales.",
    image: "/img/1974.png",
    generation: "First Generation"
  },
  {
    year: "1978",
    title: "Challenger Returns as Import",
    description: "The Challenger nameplate returned as a rebadged Mitsubishi Galant Lambda, a completely different vehicle from the original muscle car.",
    image: "/img/1978.png",
    generation: "Mitsubishi Era"
  },
  {
    year: "1983",
    title: "End of Mitsubishi Era",
    description: "The imported Challenger was discontinued, marking the end of the nameplate for over two decades.",
    image: "/img/1983.png",
    generation: "Mitsubishi Era"
  },
  {
    year: "2008",
    title: "Modern Challenger Reborn",
    description: "After a 25-year hiatus, the Challenger returned as a modern muscle car with retro-inspired styling, built on the LX platform.",
    image: "/img/2008.png",
    generation: "Modern Era"
  },
  {
    year: "2015",
    title: "Hellcat Introduction",
    description: "The SRT Hellcat variant debuted with a supercharged 6.2L HEMI V8 producing 707 horsepower, making it the most powerful American production car at the time.",
    image: "/img/2015.png",
    generation: "Modern Era"
  },
  {
    year: "2018",
    title: "Demon Release",
    description: "The limited-production Challenger SRT Demon was released with 840 horsepower, specifically designed for drag racing and capable of 0-60 mph in 2.3 seconds.",
    image: "/img/2018.png",
    generation: "Modern Era"
  },
  {
    year: "2023",
    title: "Last Call Editions",
    description: "As the Challenger's production neared its end, Dodge released seven 'Last Call' special editions to commemorate the model's legacy.",
    image: "/img/2023.png",
    generation: "Modern Era"
  }
];

export const challengerModels: ChallengerModel[] = [
  {
    year: "2023",
    generation: "Modern Era",
    version: "SXT",
    image: "/img/2023.png",
    specs: {
      engine: "3.6L Pentastar V6",
      power: "303 hp",
      torque: "268 lb-ft",
      transmission: "8-speed automatic",
      weight: "3,841 lbs",
      acceleration: "6.3 seconds (0-60 mph)",
      topSpeed: "152 mph",
      consumption: {
        city: "19 mpg",
        highway: "30 mpg",
        combined: "23 mpg"
      }
    },
    description: "The base model Challenger offers impressive V6 power and a comfortable ride with modern amenities."
  },
  {
    year: "2018",
    generation: "Modern Era",
    version: "R/T",
    image: "/img/2018.png",
    specs: {
      engine: "5.7L HEMI V8",
      power: "375 hp",
      torque: "410 lb-ft",
      transmission: "6-speed manual or 8-speed automatic",
      weight: "4,182 lbs",
      acceleration: "5.2 seconds (0-60 mph)",
      topSpeed: "155 mph",
      consumption: {
        city: "16 mpg",
        highway: "25 mpg",
        combined: "19 mpg"
      }
    },
    description: "The R/T model brings classic HEMI V8 power with a perfect balance of performance and daily drivability."
  },
  {
    year: "2015",
    generation: "Modern Era",
    version: "Scat Pack",
    image: "/img/2015.png",
    specs: {
      engine: "6.4L HEMI V8",
      power: "485 hp",
      torque: "475 lb-ft",
      transmission: "6-speed manual or 8-speed automatic",
      weight: "4,233 lbs",
      acceleration: "4.2 seconds (0-60 mph)",
      topSpeed: "174 mph",
      consumption: {
        city: "14 mpg",
        highway: "23 mpg",
        combined: "17 mpg"
      }
    },
    description: "With the larger 392 cubic inch HEMI, the Scat Pack delivers serious performance with distinctive styling."
  },
  {
    year: "2008",
    generation: "Mitsubishi Era",
    version: "SRT Hellcat",
    image: "/img/2008.png",
    specs: {
      engine: "6.2L Supercharged HEMI V8",
      power: "717 hp",
      torque: "656 lb-ft",
      transmission: "6-speed manual or 8-speed automatic",
      weight: "4,428 lbs",
      acceleration: "3.6 seconds (0-60 mph)",
      topSpeed: "199 mph",
      consumption: {
        city: "13 mpg",
        highway: "22 mpg",
        combined: "16 mpg"
      }
    },
    description: "The Hellcat's supercharged engine delivered supercar performance in a muscle car package, changing the game forever."
  },
  {
    year: "1983",
    generation: "Mitsubishi Era",
    version: "SRT Hellcat Redeye",
    image: "/img/1983.png",
    specs: {
      engine: "6.2L High-Output Supercharged HEMI V8",
      power: "797 hp",
      torque: "707 lb-ft",
      transmission: "8-speed automatic",
      weight: "4,451 lbs",
      acceleration: "3.4 seconds (0-60 mph)",
      topSpeed: "203 mph",
      consumption: {
        city: "12 mpg",
        highway: "21 mpg",
        combined: "15 mpg"
      }
    },
    description: "Taking Hellcat performance even further, the Redeye brought near-Demon levels of power to a more street-focused package."
  }
  
];

export const modelVariants = [
  {
    id: "sxt",
    name: "SXT",
    engine: "3.6L V6",
    basePower: 303,
    baseWeight: 3841,
  },
  {
    id: "rt",
    name: "R/T",
    engine: "5.7L HEMI V8",
    basePower: 375,
    baseWeight: 4182,
  },
  {
    id: "scat",
    name: "Scat Pack",
    engine: "6.4L HEMI V8",
    basePower: 485,
    baseWeight: 4233,
  },
  {
    id: "hellcat",
    name: "Hellcat",
    engine: "6.2L SC HEMI V8",
    basePower: 717,
    baseWeight: 4428,
  },
  {
    id: "redeye",
    name: "Hellcat Redeye",
    engine: "6.2L HO SC HEMI V8",
    basePower: 797,
    baseWeight: 4451,
  }
];

export const engineSounds = [
  {
    id: "v6-idle",
    name: "3.6L V6 Idle",
    model: "SXT",
    type: "idle",
    url: "https://assets.codepen.io/engine-sound-placeholder.mp3"
  },
  {
    id: "v6-rev",
    name: "3.6L V6 Rev",
    model: "SXT",
    type: "rev",
    url: "https://assets.codepen.io/engine-sound-placeholder.mp3"
  },
  {
    id: "v8-57-idle",
    name: "5.7L HEMI Idle",
    model: "R/T",
    type: "idle",
    url: "https://assets.codepen.io/engine-sound-placeholder.mp3"
  },
  {
    id: "v8-57-rev",
    name: "5.7L HEMI Rev",
    model: "R/T",
    type: "rev",
    url: "https://assets.codepen.io/engine-sound-placeholder.mp3"
  },
  {
    id: "v8-64-idle",
    name: "6.4L HEMI Idle",
    model: "Scat Pack",
    type: "idle",
    url: "https://assets.codepen.io/engine-sound-placeholder.mp3"
  },
  {
    id: "v8-64-rev",
    name: "6.4L HEMI Rev",
    model: "Scat Pack",
    type: "rev",
    url: "https://assets.codepen.io/engine-sound-placeholder.mp3"
  },
  {
    id: "hellcat-idle",
    name: "Hellcat Idle",
    model: "Hellcat",
    type: "idle",
    url: "https://assets.codepen.io/engine-sound-placeholder.mp3"
  },
  {
    id: "hellcat-rev",
    name: "Hellcat Rev",
    model: "Hellcat",
    type: "rev",
    url: "https://assets.codepen.io/engine-sound-placeholder.mp3"
  }
];

export const modifications = {
  engine: [
    { id: "stock", name: "Stock", powerBoost: 0, weightChange: 0 },
    { id: "intake", name: "Cold Air Intake", powerBoost: 15, weightChange: 0 },
    { id: "exhaust", name: "Performance Exhaust", powerBoost: 25, weightChange: -10 },
    { id: "pulley", name: "Smaller Supercharger Pulley", powerBoost: 50, weightChange: 0 },
    { id: "tune", name: "ECU Tune", powerBoost: 35, weightChange: 0 },
    { id: "headers", name: "Long-tube Headers", powerBoost: 30, weightChange: -15 }
  ],
  transmission: [
    { id: "stock", name: "Stock", powerLoss: 0, weightChange: 0 },
    { id: "shifter", name: "Short Throw Shifter", powerLoss: 0, weightChange: -5 },
    { id: "converter", name: "High-Stall Torque Converter", powerLoss: -5, weightChange: 0 },
    { id: "gears", name: "Performance Gear Ratio", powerLoss: -10, weightChange: 0 }
  ],
  weight: [
    { id: "stock", name: "Stock", weightChange: 0 },
    { id: "carbon", name: "Carbon Fiber Hood", weightChange: -40 },
    { id: "seats", name: "Racing Seats", weightChange: -60 },
    { id: "wheels", name: "Lightweight Wheels", weightChange: -30 },
    { id: "battery", name: "Lightweight Battery", weightChange: -20 },
    { id: "brakes", name: "Performance Brakes", weightChange: 15 }
  ],
  aero: [
    { id: "stock", name: "Stock", dragCoefficient: 0.35 },
    { id: "splitter", name: "Front Splitter", dragCoefficient: 0.34 },
    { id: "spoiler", name: "Rear Spoiler", dragCoefficient: 0.33 },
    { id: "diffuser", name: "Rear Diffuser", dragCoefficient: 0.32 },
    { id: "full", name: "Full Aero Package", dragCoefficient: 0.30 }
  ]
};
