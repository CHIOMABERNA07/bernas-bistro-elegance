import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RestaurantAmbiance = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-black/80 backdrop-blur-sm rounded-full p-3 shadow-lg border border-accent/20">
        <div className="flex items-center space-x-2">
          <Button
            onClick={togglePlay}
            size="sm"
            variant="ghost"
            className="h-8 w-8 p-0 text-white hover:text-accent"
          >
            {isPlaying ? (
              <div className="w-3 h-3 flex space-x-0.5">
                <div className="w-0.5 h-full bg-current animate-pulse"></div>
                <div className="w-0.5 h-full bg-current animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-0.5 h-full bg-current animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              </div>
            ) : (
              <div className="w-0 h-0 border-l-[6px] border-l-current border-y-[4px] border-y-transparent ml-0.5"></div>
            )}
          </Button>
          
          <Button
            onClick={toggleMute}
            size="sm"
            variant="ghost"
            className="h-8 w-8 p-0 text-white hover:text-accent"
          >
            {audioRef.current?.muted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </Button>
          
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-16 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, hsl(var(--accent)) 0%, hsl(var(--accent)) ${volume * 100}%, rgba(255,255,255,0.2) ${volume * 100}%, rgba(255,255,255,0.2) 100%)`
            }}
          />
        </div>
      </div>
      
      <audio
        ref={audioRef}
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src="https://www.soundjay.com/misc/sounds-765.wav" type="audio/wav" />
        <source src="https://freesound.org/data/previews/316/316847_4939433-lq.mp3" type="audio/mpeg" />
        <source src="https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-one/zapsplat_ambiences_restaurant_busy_general_ambience_people_talking_eating_drinking_cutlery_009_42696.mp3" type="audio/mpeg" />
        {/* Fallback to a data URL with a simple restaurant ambiance simulation */}
        <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYbCEOY2+7Sgi4LJHnK8OKR9wYWYLfm7KpXEw1Epd7U1mcIGjyMzOVzRgOZ2+DT3" type="audio/wav" />
      </audio>
    </div>
  );
};

export default RestaurantAmbiance;