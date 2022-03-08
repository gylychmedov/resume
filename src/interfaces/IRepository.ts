interface IRepositoryOwner {
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface IRepository {
  name: string;
  full_name: string;
  owner: IRepositoryOwner;
  description: string;
  homepage: string;
  html_url: string;
  language: string | null;
  pushed_at: string;
  created_at: string;
}
