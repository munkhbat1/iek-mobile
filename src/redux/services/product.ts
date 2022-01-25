import {ProductIndex, ProductListItem} from '../../types';
import {baseApi} from './base';

export const productApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query<ProductIndex, string[]>({
      query: ([page = '1', category]) => {
        return `/products?page=${page}&category=${category}`;
      },
      providesTags: [{type: 'Product', id: 'LIST'}],
    }),
    getProduct: builder.query<ProductListItem, string | string[] | undefined>({
      query: id => `/products/${id}`,
      providesTags: result => {
        return [{type: 'Product', id: result?.id}];
      },
    }),
  }),
});

export const {useGetProductsQuery, useGetProductQuery} = productApi;
