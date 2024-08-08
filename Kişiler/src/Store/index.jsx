import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { usersApi } from "../Store/Apis/UsersApi";
import { albumsApi } from './Apis/AlbumsApi';

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(usersApi.middleware).concat(albumsApi.middleware);
    },
});

setupListeners(store.dispatch);

export {
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useRemoveAlbumMutation,
} from "../Store/Apis/UsersApi";


export {
    useFetchUsersQuery,
    useAddUserMutation,
    useRemoveUserMutation,
} from "../Store/Apis/UsersApi";
