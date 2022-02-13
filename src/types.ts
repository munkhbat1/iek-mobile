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
