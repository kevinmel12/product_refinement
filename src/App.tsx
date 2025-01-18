import React, { useState } from 'react';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { DatePicker } from './components/ui/date-picker';

const App: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [date, setDate] = useState<Date | null>(null);

  const handleImport = () => {
    console.log('API Key:', apiKey);
    console.log('Selected Date:', date);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Data Import</h1>
      <div className="mb-4">
        <label htmlFor="apiKeyInput" className="block text-sm font-medium text-gray-700">
          Enter your API key
        </label>
        <Input
          id="apiKeyInput"
          placeholder="Enter your API key : Amplitude, Mixpanel..."
          value={apiKey}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setApiKey(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="datePicker" className="block text-sm font-medium text-gray-700">
          Pick a date
        </label>
        <DatePicker
          id="datePicker"
          selected={date}
          onSelect={(selectedDate: Date | null) => setDate(selectedDate)}
        />
      </div>
      <Button variant="default" onClick={handleImport}>
        Import Data
      </Button>
    </div>
  );
};

export default App;
