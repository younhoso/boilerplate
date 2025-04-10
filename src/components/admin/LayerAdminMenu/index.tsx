import { cx } from '@/utils/cx';

import { LayerAdminMenuStyled } from './styled';

interface Props {}

const LayerAdminMenu = ({}: Props) => {
  return <LayerAdminMenuStyled className={cx('wrapper')}></LayerAdminMenuStyled>;
};

export default LayerAdminMenu;
