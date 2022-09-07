import { IUser } from "~/types/user";
import { ILike } from "~/types/like";

export interface IPost {
  id: number;
  content: string;
  likes: ILike[];
  comments: [];
  title: string;
  user: Omit<IUser, "accessToken">;
  createdAt: Date;
  updatedAt: Date;
}
