import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
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
          <h2>{algorithm.title}</h2>
          
          {algorithm.imageSource ? (
            <img 
              src={algorithm.image} 
              alt={algorithm.title}
              className="tooltip-image clickable-image" 
              onClick={() => window.open(algorithm.imageSource, '_blank')}
              title="Click to view image source"
            />
          ) : (
            <img 
              src={algorithm.image} 
              alt={algorithm.title}
              className="tooltip-image" 
            />
          )}
          
          <div className="algorithm-meta">
            <div className="meta-item">
              <strong>Year:</strong> {algorithm.year || 'Unknown'}
            </div>
            <div className="meta-item">
              <strong>Author:</strong> {algorithm.author || 'Unknown'}
            </div>
            <div className="meta-item">
              <strong>Time Complexity:</strong> {' '}
              {algorithm.timeComplexity ? (
                <InlineMath math={algorithm.timeComplexity} />
              ) : (
                'Unknown'
              )}
            </div>
          </div>

          <div className="tooltip-description">
            <ReactMarkdown>{description}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlgorithmTooltip;