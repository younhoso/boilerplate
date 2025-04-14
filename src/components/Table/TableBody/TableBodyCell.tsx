import { cx } from '@/utils/cx';

import { TableBodyCellStyled } from '../styled';

interface Props extends PropsWithChildren {}

const TableBodyCell = ({ children }: Props) => {
  return <TableBodyCellStyled className={cx('bodyCell')}>{children}</TableBodyCellStyled>;
};

export default TableBodyCell;
