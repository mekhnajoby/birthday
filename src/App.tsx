import { Hero } from './components/Hero';
import { MemoryLane } from './components/MemoryLane';
import { WishesSection } from './components/WishesSection';
import { Confetti } from './components/Confetti';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-purple-400 to-pink-400">
      <Confetti />
      <Hero />
      <WishesSection />
      <MemoryLane />
    </div>
  );
}

export default App;
