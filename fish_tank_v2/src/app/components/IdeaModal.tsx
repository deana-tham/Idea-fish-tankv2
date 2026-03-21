import { useState, useEffect } from 'react';

interface IdeaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (title: string, content: string) => void;
  onDelete?: () => void;
  onToggleComplete?: () => void;
  idea?: {
    title: string;
    content: string;
    completed: boolean;
  };
}

export function IdeaModal({ isOpen, onClose, onSave, onDelete, onToggleComplete, idea }: IdeaModalProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (idea) {
      setTitle(idea.title);
      setContent(idea.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [idea, isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (content.trim()) {
      onSave(title, content);
      setTitle('');
      setContent('');
      onClose();
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
      onClose();
    }
  };

  const handleToggleComplete = () => {
    if (onToggleComplete) {
      onToggleComplete();
      onClose();
    }
  };

  const isEditing = !!idea;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-[#ffda60] rounded-[40px] p-6 sm:p-8 w-full max-w-[600px] shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Title Input */}
        <div className="mb-6">
          <label className="font-['Figma_Hand:Regular',sans-serif] text-[24px] sm:text-[32px] text-black block mb-2">
            new idea
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-transparent border-b-[3px] border-black pb-1 font-['Figma_Hand:Regular',sans-serif] text-[20px] sm:text-[28px] text-black outline-none placeholder:text-black/50"
            placeholder="title optional"
          />
        </div>

        {/* Content Textarea */}
        <div className="mb-8">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-[200px] sm:h-[250px] bg-transparent font-['Figma_Hand:Regular',sans-serif] text-[18px] sm:text-[24px] text-black outline-none placeholder:text-black/50 resize-none"
            placeholder="Start typing your idea..."
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-nowrap gap-2 sm:gap-3 justify-between items-center">
          {isEditing && onToggleComplete && (
            <button
              onClick={handleToggleComplete}
              className="size-[50px] sm:size-[55px] rounded-full bg-[#18B718] flex items-center justify-center hover:scale-110 transition-transform flex-shrink-0"
              title={idea?.completed ? "Mark as incomplete" : "Mark as complete"}
            >
              <svg className="size-[28px] sm:size-[32px]" fill="none" viewBox="0 0 40 40">
                <path 
                  d="M10 20L18 28L30 12" 
                  stroke="white" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
          
          <div className="flex flex-nowrap gap-2 sm:gap-3 items-center ml-auto">
            <button
              onClick={onClose}
              className="px-4 sm:px-5 py-2 sm:py-3 bg-[#d9d9d9] rounded-[40px] font-['Figma_Hand:Regular',sans-serif] text-[18px] sm:text-[24px] text-black hover:scale-105 transition-transform whitespace-nowrap"
            >
              close
            </button>

            {isEditing && onDelete && (
              <button
                onClick={handleDelete}
                className="px-4 sm:px-5 py-2 sm:py-3 bg-[#ed3838] rounded-[40px] font-['Figma_Hand:Regular',sans-serif] text-[18px] sm:text-[24px] text-black hover:scale-105 transition-transform whitespace-nowrap"
              >
                Delete
              </button>
            )}

            <button
              onClick={handleSave}
              className="px-4 sm:px-5 py-2 sm:py-3 bg-[#faa405] rounded-[40px] font-['Figma_Hand:Regular',sans-serif] text-[18px] sm:text-[24px] text-black hover:scale-105 transition-transform whitespace-nowrap"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}