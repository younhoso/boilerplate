// lib/repositories/types.ts
export interface UserRepository {
  getUser(id: string): Promise<any>;
}

export interface PostRepository {
  getPost(id: string): Promise<any>;
}

export interface RepositoryMap {
  user: UserRepository;
  // post: PostRepository;
}
