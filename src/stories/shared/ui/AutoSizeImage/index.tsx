

import { cx } from '@/utils/cx';
import { AutoSizeImageStyled } from './styled';

interface Props extends PropsWithChildren {}

const AutoSizeImage = ({ children }: Props) => {
  return <AutoSizeImageStyled className={cx('autoSizeImage')}>{children}</AutoSizeImageStyled>;
};

export default AutoSizeImage;
