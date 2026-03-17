import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Fish } from './Fish';
import { Fish1 } from './Fish1';
import { Fish2 } from './Fish2';
import { Fish3 } from './Fish3';
import { Fish4 } from './Fish4';
import { Fish5 } from './Fish5';
import { Fish6 } from './Fish6';
import { Fish7 } from './Fish7';
import { Fish8 } from './Fish8';
import { Fish9 } from './Fish9';
import { Fish10 } from './Fish10';
import { Fish11 } from './Fish11';
import { FishEel } from './FishEel';
import { FishCrab } from './FishCrab';
import { Sparkle } from './Sparkle';

interface SwimmingFishProps {
  id: string;
  title: string;
  completed: boolean;
  onClick: () => void;
}

const fishComponents = [
  Fish, Fish1, Fish2, Fish3, Fish4, Fish5, Fish6, 
  Fish7, Fish8, Fish9, Fish10, Fish11, FishEel, FishCrab
];

export function SwimmingFish({ id, title, completed, onClick }: SwimmingFishProps) {
  const [FishComponent] = useState(() => {
    // Use id to deterministically select fish type
    const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return fishComponents[hash % fishComponents.length];
  });

  const [path, setPath] = useState(() => generateRandomPath());

  function generateRandomPath() {
    // Generate a smooth path for the fish to swim along
    const numPoints = 8;
    const points = [];
    
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * 80 + 10, // Keep fish in 10-90% range
        y: Math.random() * 70 + 10,
      });
    }
    
    return points;
  }

  useEffect(() => {
    // Regenerate path periodically to keep fish moving
    const interval = setInterval(() => {
      setPath(generateRandomPath());
    }, 60000); // Change path every 60 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute cursor-pointer flex flex-col items-center"
      style={{
        width: completed ? 'clamp(80px, 15vw, 120px)' : 'clamp(60px, 12vw, 100px)',
        height: completed ? 'clamp(80px, 15vw, 120px)' : 'clamp(60px, 12vw, 100px)',
      }}
      animate={{
        x: path.map(p => `${p.x}vw`),
        y: path.map(p => `${p.y}vh`),
      }}
      transition={{
        duration: 80,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
    >
      <div className="relative w-full h-full">
        {completed && (
          <>
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none z-10"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-[-20%] bg-yellow-300/30 rounded-full blur-xl" />
            </motion.div>
            {/* Sparkle effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none z-20"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Sparkle />
            </motion.div>
          </>
        )}
        <div className="relative w-full h-full" style={{
          filter: completed ? 'brightness(1.3) saturate(1.5)' : 'none',
        }}>
          <FishComponent />
        </div>
      </div>
      {title && (
        <div className="absolute top-full mt-1 whitespace-nowrap">
          <p className="font-['Figma_Hand:Regular',sans-serif] text-[clamp(10px,2vw,16px)] text-black bg-white/80 px-2 py-1 rounded-lg shadow-md">
            {title}
          </p>
        </div>
      )}
    </motion.div>
  );
}