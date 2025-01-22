export type IProduct = {
  id: number;
  title: string;
  image: string[] | string;
  slug: string;
  price: number;
  category: string;
  description: string;
  flavors: string | string[];
  topping: string[];
  quantity: number[] | number;
  discount: number | string;
  Reviews: string[] | string;
  Rating: string | string[] | number[] | number;
  availability: boolean;
};

export type ICart = {
  [x: string]: any;
  Product_id: IProduct;
  id: number;
  title: string;
  image: string[] | string;
  availability: boolean;
  slug: string;
  category: string;
  description: string;
  flavors: string[];
  topping: string[];
  uuid: string | number | undefined;
  price: number;
  quantity: number;
  discount: number;
};
export type IOrder = {
  Product_id: IProduct;
  Cart_id: ICart;
  id: number;
  title: string;
  image: string[] | string;
  slug: string;
  price: number;
  category: string;
  description: string;
  flavors: string[];
  topping: string[];
  quantity: number;
  discount: number;
  uuid: string | number | undefined;
};

export type IRider = {
  Product_id: number;
  Cart_id: ICart;
  Order_id: number;
  id: number;
  "rider-name": string;
  "rider-vechile-number": string;
  "delivery-name": string;
  "delivery-address": string;
  "delivery-contact-no": string;
  "delivery-time": Date;
};

export interface IBlog {
  id: number;
  title: string;
  slug: string;
  content: string;
  summary: string;
  author: string;
  image: string;
  tags: string[];
  category: string;
  createdAt: string;
  updatedAt?: string;
  isPublished: boolean;
  comments: {
    id: number;
    user: string;
    message: string;
    createdAt: string;
  }[];
}
