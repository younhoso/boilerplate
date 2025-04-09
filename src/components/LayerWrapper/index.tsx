import { cx } from '@/utils/cx';

import { LayerWrapperStyled } from './styled';

interface Props {}

const LayerWrapper = ({}: Props) => {
  return <LayerWrapperStyled className={cx('wrapper')}></LayerWrapperStyled>;
};

export default LayerWrapper;
