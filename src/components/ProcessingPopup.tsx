import React, { useState, useEffect } from 'react';
import { styles } from '../services/pipelineService';

interface ProcessingPopupProps {
  isOpen: boolean;
  onClose: () => void;
  apiKey: string;
  dateRange: string;
}

export const ProcessingPopup: React.FC<ProcessingPopupProps> = ({
  isOpen,
  onClose,
  apiKey,
  dateRange
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setProgress(0);
      const duration = 5000; // 5 secondes
      const interval = 50; // mise à jour tous les 50ms
      const steps = duration / interval;
      const increment = 100 / steps;
      
      let currentProgress = 0;
      const timer = setInterval(() => {
        currentProgress += increment;
        if (currentProgress >= 100) {
          clearInterval(timer);
          currentProgress = 100;
          setTimeout(onClose, 200);
        }
        setProgress(currentProgress);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div style={styles.popupContainer}>
        <h3 className="text-lg font-semibold">Traitement en cours...</h3>
        <div style={styles.progressBarContainer}>
          <div 
            style={{
              ...styles.progressBar,
              width: `${progress}%`
            }}
          />
        </div>
      </div>
    </div>
  );
}; 