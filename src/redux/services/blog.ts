import {BlogIndex, BlogListItem} from '../../types';
import {baseApi} from './base';

export const blogApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getBlogs: builder.query<BlogIndex, string[]>({
      query: ([page = '1', type]) => {
        return `/blogs?page=${page}&type=${type}`;
      },
      providesTags: [{type: 'Blog', id: 'LIST'}],
    }),
    getBlog: builder.query<BlogListItem, number>({
      query: id => `/blogs/${id}`,
      providesTags: result => {
        return [{type: 'Blog', id: result?.id}];
      },
    }),
  }),
});

export const {useGetBlogsQuery, useGetBlogQuery} = blogApi;
