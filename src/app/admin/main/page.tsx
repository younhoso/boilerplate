import { CheckBoxGroup, CheckBoxGroupItem } from '@/components/CheckBox';
import { Body, BodyCell, Head, HeaderCell, Row, Table } from '@/components/Table';
import { AdminMainStyled } from '@/styles/pages/AdminMainStyled';
import { cx } from '@/utils/cx';

import { data, headers } from '../constants/mainTableData';

interface Props {}

const AdminMain = ({}: Props) => {
  return (
    <AdminMainStyled className={cx('adminMain')}>
      <CheckBoxGroup>
        <CheckBoxGroupItem label="Option 1" />
        <CheckBoxGroupItem label="Option 2" />
        <CheckBoxGroupItem label="Option 3" />
      </CheckBoxGroup>
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
