export type CartItemType = {
  productId: string;
  productName: string;
  unitPrice: number;
  discountPercent: number;
  quantity: number;
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
