import { cx } from '@/utils/cx';

import { TableHeaderCellStyled } from '../styled';

interface Props extends PropsWithChildren {}

const TableHeaderCell = ({ children }: Props) => {
  return <TableHeaderCellStyled className={cx('')}>{children}</TableHeaderCellStyled>;
};

export default TableHeaderCell;
