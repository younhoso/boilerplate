import { AvatarImage } from '@/components/Avatar';
import CheckBox from '@/components/CheckBox';
import { UserRow } from '@/types/user';

import profileImg from '../../../../public/images/profile.png';

export const headers = [
  { label: <CheckBox />, key: 'checkbox' },
  { label: '프로필', key: 'profile' },
  { label: '이름', key: 'name' },
  { label: '이메일', key: 'email' },
  { label: '전화번호', key: 'phone' },
  { label: '회원 상태', key: 'status' },
  { label: '사용자 권한', key: 'role' },
  { label: '가입 날짜', key: 'joinedAt' },
  { label: '관리', key: 'actions' },
] as const;

export const data: UserRow[] = [
  {
    checkbox: <CheckBox />,
    profile: <AvatarImage width={60} height={60} src={profileImg} alt="Avatar" />,
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
