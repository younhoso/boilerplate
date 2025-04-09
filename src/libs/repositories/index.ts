import * as supabase from './supabase/user';
import type { RepositoryMap } from './types';

const useSupabase = process.env.NEXT_PUBLIC_USE_SUPABASE === 'true';

// 이 함수는 Supabase 로직을 식별하는 역할을 합니다.
export function createRepositoryFactory(): RepositoryMap {
  const repo = (useSupabase && supabase) as typeof supabase;
  return {
    user: repo.user,
  };
}
