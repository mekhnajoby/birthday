import { Heart, Gift, Star, Trophy } from 'lucide-react';

export const WishesSection = () => {
  const wishes = [
    {
      icon: Star,
      title: 'Stay Amazing',
      message: 'Keep being the incredible person you are!',
      color: 'from-yellow-400 to-orange-400',
    },
    {
      icon: Trophy,
      title: 'Dream Big',
      message: 'May all your dreams come true this year!',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      icon: Gift,
      title: 'Endless Fun',
      message: 'Hope your day is filled with surprises and joy!',
      color: 'from-pink-400 to-red-400',
    },
    {
      icon: Heart,
      title: 'Love Always',
      message: 'You are loved more than you know!',
      color: 'from-purple-400 to-pink-400',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16 animate-fade-in">
          Special Wishes for You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wishes.map((wish, index) => {
            const Icon = wish.icon;
            return (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${wish.color} rounded-2xl flex items-center justify-center mb-6 animate-pulse`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">{wish.title}</h3>
                <p className="text-xl text-white/90 leading-relaxed">{wish.message}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
