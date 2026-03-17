import { useState, useEffect } from 'react';
import imgFishTankSketch from "../assets/Fish tank sketch.png";
import { SwimmingFish } from './components/SwimmingFish';
import { AddIdeaButton } from './components/AddIdeaButton';
import { IdeaModal } from './components/IdeaModal';

interface Idea {
  id: string;
  title: string;
  content: string;
  completed: boolean;
}

export default function App() {
  const [ideas, setIdeas] = useState<Idea[]>(() => {
    try {
      const saved = localStorage.getItem('idea-fish-tank');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIdea, setEditingIdea] = useState<Idea | null>(null);

  // Persist ideas to localStorage on every change
  useEffect(() => {
    try {
      localStorage.setItem('idea-fish-tank', JSON.stringify(ideas));
    } catch {
      // localStorage may be blocked in some environments
    }
  }, [ideas]);

  const handleAddIdea = (title: string, content: string) => {
    const newIdea: Idea = {
      id: Date.now().toString(),
      title,
      content,
      completed: false,
    };
    setIdeas([...ideas, newIdea]);
  };

  const handleUpdateIdea = (title: string, content: string) => {
    if (editingIdea) {
      setIdeas(ideas.map(idea => 
        idea.id === editingIdea.id 
          ? { ...idea, title, content }
          : idea
      ));
    }
  };

  const handleFishClick = (idea: Idea) => {
    setEditingIdea(idea);
    setIsModalOpen(true);
  };

  const handleToggleComplete = () => {
    if (editingIdea) {
      setIdeas(ideas.map(idea => 
        idea.id === editingIdea.id 
          ? { ...idea, completed: !idea.completed }
          : idea
      ));
    }
  };

  const handleDeleteIdea = () => {
    if (editingIdea) {
      setIdeas(ideas.filter(idea => idea.id !== editingIdea.id));
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingIdea(null);
  };

  const handleOpenAddModal = () => {
    setEditingIdea(null);
    setIsModalOpen(true);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#d4e8eb]">
      {/* Tank Background */}
      <div className="absolute inset-0">
        <img 
          src={imgFishTankSketch} 
          alt="Fish Tank" 
          className="w-full h-full object-fill"
        />
      </div>

      {/* Swimming Fish */}
      {ideas.map((idea) => (
        <SwimmingFish
          key={idea.id}
          id={idea.id}
          title={idea.title}
          completed={idea.completed}
          onClick={() => handleFishClick(idea)}
        />
      ))}

      {/* Add Idea Button */}
      <AddIdeaButton onClick={handleOpenAddModal} />

      {/* Modal */}
      <IdeaModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={editingIdea ? handleUpdateIdea : handleAddIdea}
        onDelete={editingIdea ? handleDeleteIdea : undefined}
        onToggleComplete={editingIdea ? handleToggleComplete : undefined}
        idea={editingIdea || undefined}
      />
    </div>
  );
}
