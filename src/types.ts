export type CartItemType = {
  productId: string;
  productName: string;
  unitPrice: number;
  discountPercent: number;
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
