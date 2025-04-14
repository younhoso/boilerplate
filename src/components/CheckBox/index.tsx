'use client';

import { Check } from 'iconoir-react';
import { useState } from 'react';

import { cx } from '@/utils/cx';

import { CheckBoxStyled, CustomCheckBox, HiddenCheckBox, Label } from './styled';

interface Props {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (checked: boolean) => void;
}

const CheckBox = ({ label, checked = false, disabled = false, className, onChange }: Props) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  const checkboxId = 'checkbox-' + Math.random().toString(36).slice(2, 11); // 동적으로 고유한 ID 생성

  return (
    <CheckBoxStyled className={cx('checkbox-container', className)} onChange={handleChange}>
      <HiddenCheckBox id={checkboxId} type="checkbox" checked={isChecked} disabled={disabled} />
      <CustomCheckBox
        className={cx('custom', `custom-${className}`)}
        checked={isChecked}
        onClick={handleChange}
        disabled={disabled}
      >
        {isChecked && <Check />}
      </CustomCheckBox>

      {label && (
        <Label
          htmlFor={checkboxId}
          className={cx('label', `label-${className}`)}
          disabled={disabled}
        >
          {label}
        </Label>
      )}
    </CheckBoxStyled>
  );
};

export default CheckBox;
