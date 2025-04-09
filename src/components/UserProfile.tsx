'use client';

import { useEffect, useState } from 'react';

import { User } from '@/types/user';
import { supabase } from '@/utils/supabase/supabaseClient';

const UserProfile = () => {
  const [users, setUsers] = useState<User | null>(null);

  // Supabase 세션 가져오기
  useEffect(() => {
    const fetchUser = async () => {
      // 현재 세션을 먼저 확인
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session?.user) {
        // 세션이 있으면 사용자 정보 가져오기
        setUsers(session.user as User);
      }
    };

    fetchUser();

    // 세션 상태 변화 리스너 설정
    const { data: authListener } = supabase.auth.onAuthStateChange((_, session) => {
      setUsers(session?.user as User);
    });

    return () => {
      authListener?.subscription.unsubscribe(); // 컴포넌트 언마운트 시 리스너 제거
    };
  }, []);

  // 로그아웃 처리
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUsers(null); // 로그아웃 후 유저 상태를 null로 설정
  };

  return (
    <div>
      {users && (
        <>
          {/* <Avatar>
            <AvatarImage src={users.identities[0].identity_data.avatar_url} />
            <AvatarFallback>사용자</AvatarFallback>
          </Avatar> */}
          <div>
            <p>{users.identities[0].identity_data.name}</p>
            <p>{users?.email}</p>
          </div>
          <button onClick={handleLogout}>로그아웃</button>
        </>
      )}
    </div>
  );
};

export default UserProfile;
