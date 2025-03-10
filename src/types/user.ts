export interface User {
  email: string;
  name?: string;
  password: string;
}

export type PartialUser = Partial<User>;
