
import React, { useState, useRef, useEffect } from "react";
import { engineSounds } from "../data/challengerData";

const SoundSimulator = () => {
  const [selectedModel, setSelectedModel] = useState("SXT");
  const [soundType, setSoundType] = useState("idle");
  const [revLevel, setRevLevel] = useState(1000);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Filter sounds based on model and type
  const filteredSounds = engineSounds.filter(
    sound => sound.model === selectedModel && sound.type === soundType
  );
  
  // Get the first matching sound
  const currentSound = filteredSounds.length > 0 ? filteredSounds[0] : null;
  
  // Handle play/pause
  const togglePlayback = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  
  // Handle rev change
  useEffect(() => {
    if (audioRef.current) {
      // In a real implementation, you would use Web Audio API to adjust playback rate
      // based on the rev level, but this is simplified for this example
      const rateAdjustment = revLevel / 2500;
      audioRef.current.playbackRate = Math.max(0.8, Math.min(1.5, rateAdjustment));
    }
  }, [revLevel]);
  
  // Handle volume change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);
  
  // Handle model or sound type change
  useEffect(() => {
    if (audioRef.current) {
      // Stop current playback
      audioRef.current.pause();
      setIsPlaying(false);
      
      // Reset rev level
      setRevLevel(1000);
    }
  }, [selectedModel, soundType]);
  
  return (
    <section id="sound" className="py-20 bg-gradient-to-b from-challenger-black to-challenger-darkgray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-racing text-white text-center mb-12">
          <span className="text-challenger-red">SOUND</span> SIMULATOR
        </h2>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Experience the distinctive sound of Challenger engines. Select a model, adjust the RPM, and feel the power.
        </p>
        
        <div className="bg-challenger-darkgray rounded-lg p-8 border border-challenger-gray max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-racing text-white mb-6">Engine Selection</h3>
              
              {/* Model Selection */}
              <div className="mb-6">
                <label className="block text-gray-300 mb-2">Model</label>
                <select 
                  className="select-field w-full"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                >
                  <option value="SXT">SXT (3.6L V6)</option>
                  <option value="R/T">R/T (5.7L HEMI V8)</option>
                  <option value="Scat Pack">Scat Pack (6.4L HEMI V8)</option>
                  <option value="Hellcat">Hellcat (6.2L SC HEMI V8)</option>
                </select>
              </div>
              
              {/* Sound Type */}
              <div className="mb-6">
                <label className="block text-gray-300 mb-2">Sound Type</label>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    className={`py-2 px-4 rounded border ${
                      soundType === "idle" 
                        ? "bg-challenger-red border-challenger-red" 
                        : "border-challenger-gray hover:border-challenger-red"
                    } text-white transition-colors duration-200`}
                    onClick={() => setSoundType("idle")}
                  >
                    Idle
                  </button>
                  <button 
                    className={`py-2 px-4 rounded border ${
                      soundType === "rev" 
                        ? "bg-challenger-red border-challenger-red" 
                        : "border-challenger-gray hover:border-challenger-red"
                    } text-white transition-colors duration-200`}
                    onClick={() => setSoundType("rev")}
                  >
                    Revving
                  </button>
                </div>
              </div>
              
              {/* RPM Control */}
              <div className="mb-6">
                <label className="block text-gray-300 mb-2">
                  RPM: <span className="font-bold">{revLevel}</span>
                </label>
                <input 
                  type="range" 
                  min="800" 
                  max="6500" 
                  step="100"
                  value={revLevel}
                  onChange={(e) => setRevLevel(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>800</span>
                  <span>2500</span>
                  <span>4500</span>
                  <span>6500</span>
                </div>
              </div>
              
              {/* Volume Control */}
              <div className="mb-6">
                <label className="block text-gray-300 mb-2">
                  Volume: <span className="font-bold">{volume}%</span>
                </label>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={volume}
                  onChange={(e) => setVolume(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="flex flex-col justify-center items-center">
              <div className="mb-6 text-center">
                <div className="text-white text-xl mb-4">
                  {selectedModel} - {soundType === "idle" ? "Idle" : "Revving"}
                </div>
                
                {currentSound ? (
                  <div>
                    <audio 
                      ref={audioRef}
                      src={currentSound.url}
                      loop
                    />
                    
                    <button
                      className={`h-24 w-24 rounded-full ${
                        isPlaying ? "bg-red-700" : "bg-challenger-red"
                      } text-white flex items-center justify-center transition-all duration-300 hover:scale-105 ${
                        isPlaying && 'animate-rev-engine'
                      }`}
                      onClick={togglePlayback}
                    >
                      <span className="text-2xl font-bold">
                        {isPlaying ? "STOP" : "PLAY"}
                      </span>
                    </button>
                  </div>
                ) : (
                  <div className="text-red-500">
                    Sound not available for this configuration
                  </div>
                )}
              </div>
              
              <p className="text-gray-300 text-sm">
                Note: For demonstration purposes only. Actual engine sounds in person may vary.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-300 mb-4">
              Download this engine sound as a ringtone:
            </p>
            <button className="button-primary">
              Download MP3
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoundSimulator;
