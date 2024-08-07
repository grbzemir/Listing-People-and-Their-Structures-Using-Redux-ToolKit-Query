import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
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
