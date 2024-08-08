import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { usersApi } from "../Store/Apis/UsersApi";
import { albumsApi } from './Apis/AlbumsApi';
import { photosApi } from '../Store/Apis/PhotosApi';

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(usersApi.middleware)
            .concat(albumsApi.middleware)
            .concat(photosApi.middleware);
    },
});
setupListeners(store.dispatch);

export {
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useRemoveAlbumMutation,
} from "../store/Apis/AlbumsApi";


export {
    useFetchUsersQuery,
    useAddUserMutation,
    useRemoveUserMutation,
} from "../Store/Apis/UsersApi";

export {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation,
} from '../Store/Apis/PhotosApi';