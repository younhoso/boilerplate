import { cx } from '@/utils/cx';

import { LayerAdminWrapperStyled } from './styled';

interface Props {}

const LayerAdminWrapper = ({}: Props) => {
  return <LayerAdminWrapperStyled className={cx('wrapper')}></LayerAdminWrapperStyled>;
};

export default LayerAdminWrapper;
