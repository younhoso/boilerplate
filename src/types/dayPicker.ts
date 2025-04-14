import { DateRange, DayPickerProps } from 'react-day-picker';

export type Mode = 'single' | 'range' | 'multiple';

type SelectedType<M extends Mode> = M extends 'single'
  ? Date
  : M extends 'range'
    ? DateRange
    : M extends 'multiple'
      ? Date[]
      : never;

type OnSelectType<M extends Mode> = M extends 'single'
  ? DayPickerProps
  : M extends 'range'
    ? DayPickerProps
    : M extends 'multiple'
      ? DayPickerProps
      : never;

export type PickerProps<M extends Mode> = DayPickerProps & {
  mode: M;
  selected?: SelectedType<M>;
  onSelect?: OnSelectType<M>;
};
