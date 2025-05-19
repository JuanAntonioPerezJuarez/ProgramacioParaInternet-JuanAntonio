
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import Gallery from '@/components/Gallery';
import PerformanceCalculator from '@/components/PerformanceCalculator';
import ModelComparison from '@/components/ModelComparison';
import SoundSimulator from '@/components/SoundSimulator';
import FuelCalculator from '@/components/FuelCalculator';

const Index = () => {
  return (
    <div className="min-h-screen bg-challenger-black text-white">
      <Navbar />
      <Hero />
      <Timeline />
      <Gallery />
      <PerformanceCalculator />
      <ModelComparison />
      <SoundSimulator />
      <FuelCalculator />
      <Footer />
    </div>
  );
};

export default Index;
