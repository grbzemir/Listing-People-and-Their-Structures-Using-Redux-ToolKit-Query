import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { resolve } from 'styled-jsx/css';
import { faker } from '@faker-js/faker';

const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
        fetchFn: async (...args) => {
            await pause(1000);
            return fetch(...args);
        },
    }),
    endpoints(builder) {
        return {
            fetchAlbums: builder.query({
                providesTags: (result, error, user) => {
                    const tags = result.map((album) => {
                        return { type: 'Album', id: album.id };
                    });
                    tags.push({ type: 'UsersAlbums', id: user.id });
                    return tags;
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        method: 'GET',
                        params: {
                            userId: user.id
                        }
                    };
                },
            }),
            addAlbum: builder.mutation({
                invalidatesTags: (result, error, user) => {
                    return [{ type: 'UsersAlbums', id: user.id }];
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        method: 'POST',
                        body: {
                            userId: user.id,
                            name: faker.commerce.production(),
                        },
                    };
                },
            }),
            removeAlbum: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [{ type: 'UsersAlbums', id: album.userId }];
                },
                query: (album) => {
                    return {
                        url: `/users/${album.id}`,
                        method: 'DELETE',
                    };
                },
            }),
        };
    },
});

export const { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } =
    albumsApi;
export { albumsApi };
