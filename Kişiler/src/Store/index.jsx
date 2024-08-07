import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { usersApi } from "../Store/Apis/UsersApi";

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(usersApi.middleware);
    },
});

setupListeners(store.dispatch);

export {
    useFetchUsersQuery,
    useAddUserMutation,
    useRemoveUserMutation,
} from "../Store/Apis/UsersApi";
