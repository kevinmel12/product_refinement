import * as React from "react";
import { DayPicker, DateRange } from "react-day-picker";

export interface CalendarProps {
  selected: DateRange | undefined;
  onSelect: (range: DateRange | undefined) => void;
}

export function Calendar({ selected, onSelect }: CalendarProps) {
  return (
    <DayPicker
      mode="range"
      selected={selected}
      onSelect={onSelect}
      numberOfMonths={2}
      className="p-4 border rounded-lg"
    />
  );
}
