import { IUser } from "~/types/user";
import { IPost } from "~/types/post";

export interface ILike {
  id: number;
  user: Omit<IUser, "accessToken">;
  post: IPost;
}
