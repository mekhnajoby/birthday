import { useState } from 'react';
import { Camera, Film, ChevronLeft, ChevronRight } from 'lucide-react';

export const MemoryLane = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const memories = [
    {
      type: 'placeholder',
      title: 'Your Special Moments',
      description: 'Add your favorite photos here!',
      icon: Camera,
    },
    {
      type: 'placeholder',
      title: 'Amazing Adventures',
      description: 'Upload memories from your adventures!',
      icon: Camera,
    },
    {
      type: 'placeholder',
      title: 'Fun Videos',
      description: 'Add videos of your best moments!',
      icon: Film,
    },
    {
      type: 'placeholder',
      title: 'Happy Times',
      description: 'More memories to come!',
      icon: Camera,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % memories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  return (
    <section className="py-20 px-4 bg-white/10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-4">
          Memory Lane
        </h2>
        <p className="text-xl text-white/80 text-center mb-12">
          A journey through your amazing years!
        </p>

        <div className="relative">
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center p-12">
              {memories.map((memory, index) => {
                const Icon = memory.icon;
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 flex flex-col items-center justify-center p-12 transition-all duration-500 ${
                      index === currentIndex
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-95'
                    }`}
                  >
                    <div className="bg-white/30 backdrop-blur-md rounded-full p-8 mb-6 animate-pulse">
                      <Icon className="w-24 h-24 text-white" />
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-4 text-center">
                      {memory.title}
                    </h3>
                    <p className="text-2xl text-white/90 text-center max-w-md">
                      {memory.description}
                    </p>
                    <div className="mt-8 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full">
                      <p className="text-white font-medium">
                        To add your photos/videos: Replace the placeholder content in this component
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-6 flex items-center justify-between bg-white/10">
              <button
                onClick={prevSlide}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-md p-4 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <div className="flex gap-3">
                {memories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-md p-4 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-white/80 mb-4">
              📸 To add your own photos and videos:
            </p>
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 max-w-3xl mx-auto">
              <ol className="text-left text-white space-y-2 text-lg">
                <li>1. Create a folder called <code className="bg-black/20 px-2 py-1 rounded">public/memories</code></li>
                <li>2. Add your photos and videos to that folder</li>
                <li>3. Update the <code className="bg-black/20 px-2 py-1 rounded">memories</code> array in MemoryLane.tsx</li>
                <li>4. Replace placeholder objects with paths like <code className="bg-black/20 px-2 py-1 rounded">/memories/photo1.jpg</code></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
