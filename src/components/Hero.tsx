import { Cake, PartyPopper, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float">
          <Sparkles className="w-12 h-12 text-yellow-300" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <Sparkles className="w-16 h-16 text-pink-300" />
        </div>
        <div className="absolute bottom-32 left-20 animate-float">
          <Sparkles className="w-10 h-10 text-blue-300" />
        </div>
        <div className="absolute bottom-20 right-32 animate-float-delayed">
          <Sparkles className="w-14 h-14 text-purple-300" />
        </div>
      </div>

      <div
        className={`text-center z-10 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        <div className="flex justify-center mb-6 gap-4">
          <PartyPopper className="w-16 h-16 text-yellow-300 animate-bounce" />
          <Cake className="w-20 h-20 text-white animate-pulse" />
          <PartyPopper className="w-16 h-16 text-pink-300 animate-bounce" />
        </div>

        <h1 className="text-7xl md:text-9xl font-bold text-white mb-4 drop-shadow-lg animate-slide-in">
          Happy Birthday
        </h1>

        <h2 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 mb-8 animate-slide-in-delayed">
          AKKU!
        </h2>

        <div className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
          Turning 11 Today! 🎉
        </div>

        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-delayed">
          Wishing you the most amazing birthday filled with joy, laughter, and all your favorite things!
        </p>
      </div>
    </section>
  );
};
