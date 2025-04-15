'use client';

import { useState } from 'react';

import { cx } from '@/utils/cx';

import SelectBoxItem from './SelectBoxItem';
import { Label, SelectBoxStyled, SelectElementStyled } from './styled';

interface Props {
  title?: string;
  options: { key: string; label: string }[];
  className?: string;
}

const BaseSelectBox = ({ title, options, className }: Props) => {
  const [selectedValue, setSelectedValue] = useState(options[0]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = options.find(option => option.label === e.target.value);
    if (selectedOption) {
      setSelectedValue(selectedOption);
    }
  };

  return (
    <SelectBoxStyled className={cx(`selectBox-${className}`)}>
      {title && <Label>{title}</Label>}
      <SelectElementStyled onChange={handleChange}>
        {options.map(option => (
          <SelectBoxItem key={option.key} value={option.label}>
            {option.label}
          </SelectBoxItem>
        ))}
      </SelectElementStyled>
      {selectedValue.label}
    </SelectBoxStyled>
  );
};

export const Select = Object.assign(BaseSelectBox, {});
