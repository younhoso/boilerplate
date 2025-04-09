// lib/repositories/supabase/user.ts
import type { UserRepository } from '../types';

export const user: UserRepository = {
  async getUser(id) {
    return { id, name: 'from supabase' };
  },
};
