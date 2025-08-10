import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './AlgorithmCard.css';

function AlgorithmCard({ algorithm, isDragging }) {
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetch(algorithm.descriptionPath)
      .then(res => res.text())
      .then(text => setDescription(text))
      .catch(err => console.error('Failed to load description:', err));
  }, [algorithm.descriptionPath]);

  return (
    <div className={`algorithm-card ${isDragging ? 'dragging' : ''}`}>
      <img src={algorithm.image} alt={algorithm.title} />
      <div className="algorithm-info">
        <h3>{algorithm.title}</h3>
        <div className="algorithm-description">
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default AlgorithmCard;