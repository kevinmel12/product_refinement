import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { DayPicker } from "react-day-picker";
import { DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface FormProps {
  onImport: () => void;
}

const Form: React.FC<FormProps> = ({ onImport }) => {
  const [apiKey, setApiKey] = useState("");
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-[400px]">
      <label className="block text-lg font-medium mb-2">API key</label>
      <Input
        placeholder="Enter your API key : Amplitude, Mixpanel..."
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />

      <div className="mt-4">
        <label className="block text-lg font-medium mb-2">Pick a date</label>
        <div
          className="relative"
          onClick={() => setShowPicker((prev) => !prev)}
        >
          <Input
            placeholder="Select the date range for data import"
            value={
              dateRange?.from
                ? `${dateRange.from.toLocaleDateString()} - ${
                    dateRange.to?.toLocaleDateString() || ""
                  }`
                : ""
            }
            readOnly
          />
          {showPicker && (
            <div className="absolute bg-white shadow-lg rounded-lg mt-2 z-10">
              <DayPicker
                mode="range"
                selected={dateRange}
                onSelect={setDateRange}
              />
            </div>
          )}
        </div>
      </div>

      <Button
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white"
        onClick={onImport}
      >
        Import data
      </Button>
    </div>
  );
};

export default Form;
