import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { DayPicker, DateRange } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

interface FormProps {
  onSubmit: () => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  const [isProcessing, setProcessing] = useState(false);

  const handleDateChange = (range: DateRange | undefined) => {
    setDateRange(range);
    setDatePickerOpen(false); // Ferme le Date Picker après sélection
  };

  const formatDateRange = () => {
    if (!dateRange?.from || !dateRange?.to) {
      return "Select the date range for data import";
    }
    return `${format(dateRange.from, "dd/MM/yyyy")} - ${format(
      dateRange.to,
      "dd/MM/yyyy"
    )}`;
  };

  const handleImport = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false); // Simule la fin du traitement
    }, 3000);
  };

  return (
    <>
      {/* Flou d'arrière-plan */}
      {isProcessing && <div className="fixed inset-0 backdrop-blur-md z-10"></div>}

      {/* Popup de progression */}
      {isProcessing && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-lg">
            <p className="text-center font-medium mb-4">
              Data processing in progress...
            </p>
            <div className="relative h-2 w-full bg-gray-200 rounded-full">
              <div
                className="absolute h-2 bg-blue-900 rounded-full transition-all"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </div>
      )}

      <form className="space-y-6">
        <div className="field">
          <label htmlFor="apiKey" className="text-sm font-medium">
            API key
          </label>
          <Input
            id="apiKey"
            placeholder="Enter your API key : Amplitude, Mixpanel..."
          />
        </div>

        <div className="field relative">
          <label htmlFor="datePicker" className="text-sm font-medium">
            Pick a date
          </label>
          <Input
            id="datePicker"
            readOnly
            value={formatDateRange()}
            onClick={() => setDatePickerOpen(!isDatePickerOpen)}
            className="cursor-pointer"
          />
          {isDatePickerOpen && (
            <div className="absolute z-10 bg-white border rounded-md p-2 shadow-md mt-2">
              <DayPicker
                mode="range"
                selected={dateRange}
                onSelect={handleDateChange}
                className="rounded-md"
              />
            </div>
          )}
        </div>

        <div className="flex justify-end">
          <Button onClick={handleImport}>Import data</Button>
        </div>
      </form>
    </>
  );
};

export default Form;