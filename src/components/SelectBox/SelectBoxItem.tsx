import { cx } from '@/utils/cx';

import { SelectOptionStyled } from './styled';

interface Props extends PropsWithChildren {
  value: string;
  disabled?: boolean;
  className?: string;
}

const SelectBoxItem = ({ value, disabled = false, className, children }: Props) => {
  return (
    <SelectOptionStyled value={value} className={cx(`option-${className}`)} disabled={disabled}>
      {children}
    </SelectOptionStyled>
  );
};

export default SelectBoxItem;
