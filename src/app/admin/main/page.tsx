import { Body, BodyCell, Head, HeaderCell, Row, Table } from '@/components/Table';
import { AdminMainStyled } from '@/styles/pages/AdminMainStyled';
import { cx } from '@/utils/cx';

import { data, headers } from '../constants/mainTableData';

interface Props {}

const AdminMain = ({}: Props) => {
  return (
    <AdminMainStyled className={cx('')}>
      <Table>
        <Head>
          <Row>
            {headers.map(({ label, key }) => (
              <HeaderCell key={key}>{label}</HeaderCell>
            ))}
          </Row>
        </Head>
        <Body>
          {data.map((item, rowIdx) => (
            <Row key={rowIdx}>
              {headers.map(({ key }) => (
                <BodyCell key={key}>{item[key]}</BodyCell>
              ))}
            </Row>
          ))}
        </Body>
      </Table>
    </AdminMainStyled>
  );
};

export default AdminMain;
