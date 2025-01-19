import React, { useEffect, useState } from "react";

export const Progress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100); // Remplir à 100% avec une animation
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{
          width: `${progress}%`,
        }}
      ></div>
    </div>
  );
};
