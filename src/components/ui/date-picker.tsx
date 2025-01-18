import * as React from "react";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";

export interface DatePickerProps {
  id: string;
  selected: Date | null;
  onSelect: (date: Date | null) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({ id, selected, onSelect }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button id={id} variant="outline">
          {selected ? selected.toDateString() : "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar
          mode="single"
          selected={selected || undefined}
          onSelect={(date) => onSelect(date || null)}
        />
      </PopoverContent>
    </Popover>
  );
};
