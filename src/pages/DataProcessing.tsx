import React, { useState } from 'react';
import { ProcessingPopup } from '../components/ProcessingPopup';
import { simulatePipeline } from '../services/pipelineService';

export const DataProcessing: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [apiKey] = useState("votre-api-key");
  const [dateRange] = useState("2024-03");

  const handleStartProcessing = async () => {
    setIsProcessing(true);
    try {
      await simulatePipeline(apiKey, dateRange, () => {});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button 
        onClick={handleStartProcessing}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Démarrer le traitement
      </button>

      <ProcessingPopup
        isOpen={isProcessing}
        onClose={() => setIsProcessing(false)}
        apiKey={apiKey}
        dateRange={dateRange}
      />
    </div>
  );
}; 