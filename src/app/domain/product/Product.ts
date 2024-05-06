import {Comment} from "../comment/Comment";

export interface Product {
  id: number;
  name: string;
  price: number;
  category: number;
  subCategory: number;
  images: string[]
  comments: Comment[] | null
}
