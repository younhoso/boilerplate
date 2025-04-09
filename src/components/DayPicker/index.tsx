'use client';

import { useState } from 'react';
import { DayPicker } from 'react-day-picker';

import { DayPickerStyled } from './styled';

const MyDatePicker = () => {
  const [selected, setSelected] = useState<Date>();

  return (
    <DayPickerStyled>
      <DayPicker
        animate
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={selected ? `Selected: ${selected.toLocaleDateString()}` : 'Pick a day.'}
      />
    </DayPickerStyled>
  );
};

export default MyDatePicker;
