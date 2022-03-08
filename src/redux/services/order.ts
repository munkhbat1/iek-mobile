import {
  CartItemType,
  CreateOrderDto,
  Order,
  OrderIndex,
  url,
} from '../../types';
import {baseApi} from './base';

export const orderApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    createOrder: builder.mutation<number, CreateOrderDto>({
      query: ({name, phone, address, cartItems}) => ({
        url: '/orders',
        method: 'POST',
        body: {
          name,
          phone,
          address,
          cartItems,
          amount: cartItemTotalPrice(cartItems),
        },
      }),
    }),
    getOrder: builder.query<Order, number>({
      query: id => `/orders/${id}`,
      transformResponse: (response: Order) => {
        const urls: url[] = JSON.parse(response.urls.toString());
        response.urls = urls;
        return response;
      },
    }),
    getOrders: builder.query<OrderIndex, string[]>({
      query: ([page = '1', id]) => `/orders/users?page=${page}&userId=${id}`,
      providesTags: () => {
        return [{type: 'Order', id: 'LIST'}];
      },
    }),
  }),
});

export const {useCreateOrderMutation, useGetOrderQuery, useGetOrdersQuery} =
  orderApi;

export const calcItemTotalPrice = (cartItem: CartItemType) => {
  const totalPrice = cartItem.quantity * cartItem.unitPrice;
  return totalPrice;
};

export const cartItemTotalPrice = (cartItems: CartItemType[]) => {
  return cartItems.reduce(
    (acc, cartItem) => acc + calcItemTotalPrice(cartItem),
    0,
  );
};
