import React, { useState } from "react";
import Form from "./components/Form";
import { LoadingDialog } from "./components/ui/loading-dialog";
import "./styles/global.css";

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  const handleImport = async () => {
    setLoading(true);
    setStatus("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setStatus("success");
      setTimeout(() => setLoading(false), 2000);
    } catch {
      setStatus("error");
      setTimeout(() => setLoading(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Prototype</h1>
      <Form onImport={handleImport} />
      <LoadingDialog status={status} visible={loading} />
    </div>
  );
};

export default App;
