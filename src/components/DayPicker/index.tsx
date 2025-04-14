'use client';

import { DayPicker } from 'react-day-picker';

import { Mode, PickerProps } from '@/types/dayPicker';

import { DayPickerStyled } from './styled';

const DatePicker = <M extends Mode>({ ...rest }: PickerProps<M>) => {
  return (
    <DayPickerStyled>
      <DayPicker {...rest} />
    </DayPickerStyled>
  );
};

export default DatePicker;
