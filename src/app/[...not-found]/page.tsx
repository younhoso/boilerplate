import { NotFoundStyled } from '@/styles/pages/NotFoundStyled';
import { cx } from '@/utils/cx';

interface Props {}

const NotFound = ({}: Props) => {
  return <NotFoundStyled className={cx('')}></NotFoundStyled>;
};

export default NotFound;
