import { Avatar } from '@/components/Avatar';
import { Body, BodyCell, Head, HeaderCell, Row, Table } from '@/components/Table';
import { AdminMainStyled } from '@/styles/pages/AdminMainStyled';
import { User, UserRow } from '@/types/user';
import { cx } from '@/utils/cx';

const headers = [
  { label: '프로필', key: 'profile' },
  { label: '이름', key: 'name' },
  { label: '이메일', key: 'email' },
  { label: '전화번호', key: 'phone' },
  { label: '회원 상태', key: 'status' },
  { label: '사용자 권한', key: 'role' },
  { label: '가입 날짜', key: 'joinedAt' },
  { label: '관리', key: 'actions' },
] as const;

const data: UserRow[] = [
  {
    profile: <Avatar />,
    name: '홍길동',
    email: 'hong@example.com',
    phone: '010-1234-5678',
    status: '활성',
    role: '관리자',
    joinedAt: '2024-01-01',
    actions: (
      <>
        <button>수정</button> | <button>삭제</button>
      </>
    ),
  },
];

interface Props {}

const AdminMain = ({}: Props) => {
  return (
    <AdminMainStyled className={cx('')}>
      <Table>
        <Head>
          <Row>
            {headers.map(({ label }) => (
              <HeaderCell key={label}>{label}</HeaderCell>
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
