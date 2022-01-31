import {BlogIndex} from '../../types';
import {baseApi} from './base';

export const blogApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getBlogs: builder.query<BlogIndex, string[]>({
      query: ([page = '1', type]) => {
        return `/blogs?page=${page}&type=${type}`;
      },
      providesTags: [{type: 'Blog', id: 'LIST'}],
    }),
  }),
});

export const {useGetBlogsQuery} = blogApi;
