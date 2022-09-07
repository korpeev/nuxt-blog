export interface IUser {
  id: number;
  username: string;
  email: string;
  accessToken: string;
}

export interface IUserResponse {
  login: IUser;
}
