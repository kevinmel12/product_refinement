import React, { useState } from "react";
import Form from "./components/Form";
import { LoadingDialog } from "./components/ui/loading-dialog";
import "./styles/global.css";

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleImport = () => {
    setLoading(true);

    // Simule une tâche
    setTimeout(() => {
      setLoading(false); // Cacher la popup après 2s
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="dialog">
        <h1 className="title">Prototype</h1>
        <Form onSubmit={handleImport} />
      </div>
      {loading && (
        <LoadingDialog
          message="Data processing in progress..."
          isVisible={loading}
        />
      )}
    </div>
  );
};

export default App;
