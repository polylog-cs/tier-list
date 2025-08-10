import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './AlgorithmTooltip.css';

function AlgorithmTooltip({ algorithm, onClose }) {
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetch(algorithm.descriptionPath)
      .then(res => res.text())
      .then(text => setDescription(text))
      .catch(err => console.error('Failed to load description:', err));
  }, [algorithm.descriptionPath]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="tooltip-backdrop" onClick={handleBackdropClick}>
      <div className="algorithm-tooltip">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="tooltip-content">
          <img 
            src={algorithm.image} 
            alt={algorithm.title}
            className="tooltip-image" 
          />
          <div className="tooltip-info">
            <h2>{algorithm.title}</h2>
            <div className="tooltip-description">
              <ReactMarkdown>{description}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlgorithmTooltip;