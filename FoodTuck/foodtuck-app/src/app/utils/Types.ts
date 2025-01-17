export type IProduct = {
  id: number;
  title: string;
  image: string[] | string;
  slug: string;
  price: number;
  category: string;
  description: string;
  flavors: string | string[];
  topping: string[] | string;
  quantity: string | string[] | number[] | number;
  discount: number | string;
  Reviews: string[] | string;
  Rating: string | string[] | number[] | number;
  Availability: boolean;
};

export type IOrder = {
  id: number;
  title: string;
  image: string[] | string;
  slug: string;
  price: number;
  category: string;
  description: string;
  flavors: string;
  topping: string[] | string;
  quantity: number;
  discount: number;
  uuid: string | number | undefined;
};

export type IRider = {
  Productid: number;
  Orderid: number;
  id: number;
  "rider-name": string;
  "rider-vechile-number": string;
  "delivery-name": string;
  "delivery-address": string;
  "delivery-contact-no": string;
  "delivery-time": Date;
};
