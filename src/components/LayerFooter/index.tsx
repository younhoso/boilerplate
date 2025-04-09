import { cx } from '@/utils/cx';

import { LayerFooterStyled } from './styled';

interface Props {}

const LayerFooter = ({}: Props) => {
  return <LayerFooterStyled className={cx('footer')}></LayerFooterStyled>;
};

export default LayerFooter;
