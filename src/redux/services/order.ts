import {Order, url} from '../../types';
import {deliveryInfoValidatorProps} from '../../utils/deliveryInfoValidator';
import {baseApi} from './base';

export const orderApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    createOrder: builder.mutation<number, deliveryInfoValidatorProps>({
      query: ({name, phone, address}) => ({
        url: '/orders',
        method: 'POST',
        body: {
          name,
          phone,
          address,
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
      providesTags: result => {
        return [{type: 'Order', id: result?.id}];
      },
    }),
  }),
});

export const {useCreateOrderMutation, useGetOrderQuery} = orderApi;
