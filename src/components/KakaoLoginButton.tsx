'use client';

import React from 'react';

import { handleKakaoLogin } from '@/utils/supabase/client';

const KakaoLoginButton = () => {
  return <button onClick={handleKakaoLogin}>카카오톡으로 로그인</button>;
};

export default KakaoLoginButton;
