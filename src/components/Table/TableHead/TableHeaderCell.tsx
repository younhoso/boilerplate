import { cx } from '@/utils/cx';

import { TableHeaderCellStyled } from '../styled';

interface Props extends PropsWithChildren {
  justify?: 'center' | 'flex-start' | 'flex-end';
}

const TableHeaderCell = ({ justify, children }: Props) => {
  return (
    <TableHeaderCellStyled justify={justify} className={cx('')}>
      {children}
    </TableHeaderCellStyled>
  );
};

export default TableHeaderCell;
