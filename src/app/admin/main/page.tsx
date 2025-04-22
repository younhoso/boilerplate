import { CheckBoxGroup, CheckBoxGroupItem } from '@/components/CheckBox';
import { Select } from '@/components/SelectBox';
import { Body, BodyCell, Head, HeaderCell, Row, Table } from '@/components/Table';
import { AdminMainStyled } from '@/styles/pages/AdminMainStyled';
import { cx } from '@/utils/cx';

import { data, headers } from '../constants/mainTableData';

const animals = [
  { key: 'dog', label: 'Dog' },
  { key: 'cat', label: 'Cat' },
  { key: 'rabbit', label: 'Rabbit' },
];

interface Props {}

const AdminMain = ({}: Props) => {
  return (
    <AdminMainStyled className={cx('adminMain')}>
      <Select title="Select title 입니다.!!" options={animals}></Select>
      <CheckBoxGroup>
        <CheckBoxGroupItem label="Option 1" />
        <CheckBoxGroupItem label="Option 2" />
        <CheckBoxGroupItem label="Option 3" />
      </CheckBoxGroup>
      <Table>
        <Head>
          <Row>
            {headers.map(({ label, key }) => (
              <HeaderCell key={key} justify="flex-start">
                {label}
              </HeaderCell>
            ))}
          </Row>
        </Head>
        <Body>
          {data.map((item, rowIdx) => (
            <Row key={rowIdx}>
              {headers.map(({ key }) => (
                <BodyCell key={key} justify="flex-start">
                  {item[key]}
                </BodyCell>
              ))}
            </Row>
          ))}
        </Body>
      </Table>
    </AdminMainStyled>
  );
};

export default AdminMain;
