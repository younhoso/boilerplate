import { cx } from '@/utils/cx';

import { LayerHeaderStyled } from './styled';

interface Props {}

const LayerHeader = ({}: Props) => {
  return <LayerHeaderStyled className={cx('header')}></LayerHeaderStyled>;
};

export default LayerHeader;
