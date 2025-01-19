import React from "react";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface DatePickerProps {
  selected: DateRange | undefined;
  onSelect: (range: DateRange | undefined) => void;
  className?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({ selected, onSelect, className }) => {
  return (
    <DayPicker
      mode="range"
      selected={selected}
      onSelect={onSelect}
      className={className}
      numberOfMonths={1}
    />
  );
};
