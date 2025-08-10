import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import AlgorithmCard from './AlgorithmCard';
import AlgorithmTooltip from './AlgorithmTooltip';
import './TierList.css';

const TIERS = [
  { id: 'S', label: 'S', color: '#ff7f7f', stars: 5 },
  { id: 'A', label: 'A', color: '#ffbf7f', stars: 4 },
  { id: 'B', label: 'B', color: '#ffff7f', stars: 3 },
  { id: 'C', label: 'C', color: '#7fff7f', stars: 2 },
  { id: 'D', label: 'D', color: '#7fbfff', stars: 1 },
];

function TierList() {
  const [algorithms, setAlgorithms] = useState([]);
  const [tiers, setTiers] = useState({});
  const [unranked, setUnranked] = useState([]);
  const [globalRankings, setGlobalRankings] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiUrl, setApiUrl] = useState('https://your-worker.workers.dev');
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);

  useEffect(() => {
    console.log('Fetching algorithms...');
    fetch('/tier-list/data/algorithms.json')
      .then(res => {
        console.log('Fetch response:', res.status, res.statusText);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log('Loaded algorithms:', data);
        setAlgorithms(data);
        const savedTiers = localStorage.getItem('tierList');
        if (savedTiers) {
          const parsed = JSON.parse(savedTiers);
          setTiers(parsed);
          const rankedIds = new Set(Object.values(parsed).flat().map(a => a.id));
          setUnranked(data.filter(a => !rankedIds.has(a.id)));
        } else {
          const initialTiers = {};
          TIERS.forEach(tier => {
            initialTiers[tier.id] = [];
          });
          setTiers(initialTiers);
          setUnranked(data);
        }
        console.log('Set unranked algorithms:', data);
      })
      .catch(err => {
        console.error('Failed to load algorithms:', err);
        console.error('Error details:', err.message);
      });
  }, []);

  const saveTiers = (newTiers) => {
    setTiers(newTiers);
    localStorage.setItem('tierList', JSON.stringify(newTiers));
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    
    if (!destination) return;
    
    if (source.droppableId === destination.droppableId && 
        source.index === destination.index) return;

    const sourceList = source.droppableId === 'unranked' 
      ? [...unranked]
      : [...(tiers[source.droppableId] || [])];
    
    const destList = destination.droppableId === 'unranked'
      ? [...unranked]
      : [...(tiers[destination.droppableId] || [])];

    const [removed] = sourceList.splice(source.index, 1);
    
    if (source.droppableId === destination.droppableId) {
      sourceList.splice(destination.index, 0, removed);
      if (source.droppableId === 'unranked') {
        setUnranked(sourceList);
      } else {
        saveTiers({ ...tiers, [source.droppableId]: sourceList });
      }
    } else {
      destList.splice(destination.index, 0, removed);
      
      if (source.droppableId === 'unranked') {
        setUnranked(sourceList);
        saveTiers({ ...tiers, [destination.droppableId]: destList });
      } else if (destination.droppableId === 'unranked') {
        saveTiers({ ...tiers, [source.droppableId]: sourceList });
        setUnranked(destList);
      } else {
        saveTiers({
          ...tiers,
          [source.droppableId]: sourceList,
          [destination.droppableId]: destList
        });
      }
    }
  };

  const submitRankings = async () => {
    setIsLoading(true);
    const rankings = {};
    
    Object.entries(tiers).forEach(([tierId, algos]) => {
      const tier = TIERS.find(t => t.id === tierId);
      algos.forEach(algo => {
        rankings[algo.id] = tier.stars;
      });
    });

    try {
      const response = await fetch(`${apiUrl}/api/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tiers: rankings })
      });
      
      if (response.ok) {
        alert('Rankings submitted successfully!');
        fetchGlobalRankings();
      } else {
        alert('Failed to submit rankings');
      }
    } catch (error) {
      console.error('Error submitting rankings:', error);
      alert('Error submitting rankings');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchGlobalRankings = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/aggregate`);
      if (response.ok) {
        const data = await response.json();
        setGlobalRankings(data);
      }
    } catch (error) {
      console.error('Error fetching global rankings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetTiers = () => {
    const emptyTiers = {};
    TIERS.forEach(tier => {
      emptyTiers[tier.id] = [];
    });
    saveTiers(emptyTiers);
    setUnranked(algorithms);
  };

  const handleCardClick = (algorithm) => {
    setSelectedAlgorithm(algorithm);
  };

  const closeTooltip = () => {
    setSelectedAlgorithm(null);
  };

  return (
    <div className="tier-list-container">
      <header className="tier-list-header">
        <h1>Algorithm Tier List Maker</h1>
        <div className="controls">
          <button onClick={resetTiers}>Reset</button>
        </div>
      </header>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="tiers-container">
          {TIERS.map(tier => (
            <div key={tier.id} className="tier-row">
              <div 
                className="tier-label" 
                style={{ backgroundColor: tier.color }}
              >
                {tier.label}
              </div>
              <Droppable droppableId={tier.id} direction="horizontal">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`tier-content ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
                  >
                    {(tiers[tier.id] || []).map((algo, index) => (
                      <Draggable key={algo.id} draggableId={algo.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <AlgorithmCard 
                              algorithm={algo} 
                              isDragging={snapshot.isDragging}
                              onCardClick={handleCardClick}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>

        <div className="unranked-section">
          <h2>Available Algorithms</h2>
          <Droppable droppableId="unranked" direction="horizontal">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`unranked-container ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
              >
                {unranked.map((algo, index) => (
                  <Draggable key={algo.id} draggableId={algo.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <AlgorithmCard 
                          algorithm={algo} 
                          isDragging={snapshot.isDragging}
                          onCardClick={handleCardClick}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>

      
      {selectedAlgorithm && (
        <AlgorithmTooltip 
          algorithm={selectedAlgorithm} 
          onClose={closeTooltip} 
        />
      )}
    </div>
  );
}

export default TierList;