import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './AlgorithmCard.css';

function AlgorithmCard({ algorithm, isDragging, onCardClick }) {
  const handleClick = (e) => {
    e.stopPropagation();
    onCardClick && onCardClick(algorithm);
  };

  return (
    <div 
      className={`algorithm-card ${isDragging ? 'dragging' : ''}`}
      onClick={handleClick}
    >
      <img src={algorithm.image} alt={algorithm.title} />
      <div className="algorithm-name">
        {algorithm.title}
      </div>
    </div>
  );
}

export default AlgorithmCard;