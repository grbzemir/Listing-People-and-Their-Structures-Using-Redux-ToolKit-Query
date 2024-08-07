import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
    reducerPath: "users",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/"
    }),
    endpoints: (builder) => ({
        fetchUsers: builder.query({
            query: () => ({
                url: "users",
                method: "GET",
            })
        }),
        addUser: builder.mutation({
            query: () => ({
                url: "users",
                method: "GET",
            })
        }),
    })
});

export const { useFetchUsersQuery } = usersApi;
export default usersApi;
