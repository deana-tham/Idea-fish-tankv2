import { useState } from 'react';
import Idle from '../../imports/Idle';
import Hover from '../../imports/Hover';

interface AddIdeaButtonProps {
  onClick: () => void;
}

export function AddIdeaButton({ onClick }: AddIdeaButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-[5%] sm:bottom-[10%] left-1/2 -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform z-10"
      style={{
        width: 'clamp(120px, 20vw, 200px)',
        height: 'clamp(120px, 20vw, 200px)',
      }}
    >
      <div className="relative w-full h-full">
        {isHovered ? <Hover /> : <Idle />}
      </div>
    </button>
  );
}