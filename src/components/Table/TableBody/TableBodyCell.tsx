import { cx } from '@/utils/cx';

import { TableBodyCellStyled } from '../styled';

interface Props extends PropsWithChildren {
  justify?: 'center' | 'flex-start' | 'flex-end';
}

const TableBodyCell = ({ justify, children }: Props) => {
  return (
    <TableBodyCellStyled justify={justify} className={cx('bodyCell')}>
      {children}
    </TableBodyCellStyled>
  );
};

export default TableBodyCell;
