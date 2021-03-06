export type CartItemType = {
  productId: string;
  productName: string;
  unitPrice: number;
  image: string;
  quantity: number;
  option: string;
};

export type UserSignUpInfo = {
  lastName: string;
  firstName: string;
  phone: string;
  email: string;
  password: string;
};

export type UserState = {
  status: 'loggedOut' | 'loggedIn' | 'pending';
  jwt: string;
  userInfo: {
    name: string;
    phone: string;
  };
};

export type UserLoginInfo = {
  email: string;
  password: string;
};

export type url = {
  name: string;
  description: string;
  logo: string;
  link: string;
};

export type ProductListItem = {
  id?: number;
  images: string[];
  name: string;
  price: number;
  remaining: number;
  requirements: string[];
  category: string;
};

export type ProductIndex = {
  items: ProductListItem[];
  total_pages: number;
};

export type BlogIndex = {
  items: BlogListItem[];
  total_pages: number;
};

export type BlogListItem = {
  id: number;
  title: string;
  image: string;
  video_link: string;
  type: string;
  blog_body: string;
};

export type Order = {
  id: string;
  invoice_id: string;
  qr_text: string;
  urls: url[];
  status: string;
  name: string;
  phone: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateOrderDto = {
  name: string;
  phone: string;
  address: string;
  cartItems: CartItemType[];
};

export type OrderIndex = {
  items: OrderListItem[];
  total_pages: number;
};

export type OrderListItem = {
  id: number;
  invoice_id: string;
  user_id: number;
  status: keyof typeof OrderStatus;
  name: string;
  phone: string;
  address: string;
  amount: number;
  createdAt: string;
  updatedAt: string;
};

export enum OrderStatus {
  NEW = 'Нэхэмжлэл үүссэн',
  FAILED = 'Бүтэлгүйтсэн',
  PAID = 'Төлөгдсөн',
  REFUNDED = 'Төлбөр буцаагдсан',
}

export type OrderDetailIndex = {
  order: OrderListItem;
  orderDetails: OrderDetailListItem[];
};

export type OrderDetailListItem = {
  id: number;
  orderId: number;
  productId: number;
  productName: string;
  unitPrice: number;
  quantity: number;
  requirement: string;
  createdAt: string;
  updatedAt: string;
};
