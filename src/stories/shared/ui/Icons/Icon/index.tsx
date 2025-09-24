import { IconData } from '@/stories/shared/types/icon';


import { IconStyled } from './styled';
import { cx } from '@/utils/cx';

export default function Icon({ icon, label }: IconData) {
  return (
    <IconStyled className={cx('iconItem')}>
      <span>{icon}</span>
      <p className={cx('label')}>{label}</p>
    </IconStyled>
  );
}
