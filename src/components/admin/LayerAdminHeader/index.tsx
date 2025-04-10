import { cx } from '@/utils/cx';

import { LayerAdminHeaderStyled } from './styled';

interface Props {}

const LayerAdminHeader = ({}: Props) => {
  return <LayerAdminHeaderStyled className={cx('header')}></LayerAdminHeaderStyled>;
};

export default LayerAdminHeader;
