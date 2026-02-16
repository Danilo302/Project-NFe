import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type UserType = {
    id: string;
    login: string;
    senha: string;
}

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "/api",
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
    },
    }),
    endpoints: (builder) => ({
    purchase: builder.mutation<UserType, string>({
        query: (body) => ({
            url: '/usuario',
            method: 'POST',
            body: body
        })
        })
    })
})

export const { usePurchaseMutation } = api;
export default api;