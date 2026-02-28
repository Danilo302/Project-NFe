import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api",
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
    },
    }),
    tagTypes: ['Pessoa'],
    endpoints: (builder) => ({
        getMunicipios: builder.query<MunicipioType[], void>({
            query: () => '/municipios'
        }),
    purchase: builder.mutation<LoginType, string>({
        query: (body) => ({
            url: '/usuario',
            method: 'POST',
            body: body
            })
        }),
        getPessoas: builder.query<UserType[], void>({
            query: () => '/pessoas-fisicas',
            providesTags: ['Pessoa']
        }),
        getPessoa: builder.query<UserType, string>({
            query: (id) => `/pessoas-fisicas/${id}`,
            providesTags: (result, error, id) => [{ type: 'Pessoa', id }],
        }),
    register: builder.mutation<RegisterUserType, RegisterUserType>({
        query: (body) => ({
            url: '/pessoas-fisicas',
            method: 'POST',
            body: body
            }),
            invalidatesTags: ['Pessoa'],
        }),
        editPessoa: builder.mutation<RegisterUserType, Partial<RegisterUserType> & { id: string }>({
            query: (body) => ({
                url: `/pessoas-fisicas/${body.id}`,
                method: 'PUT',
                body: body
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Pessoa' }, 
                { type: 'Pessoa', id: arg.id }
            ],
        })
    })
});

export const { usePurchaseMutation, 
        useRegisterMutation, 
        useGetMunicipiosQuery, 
        useGetPessoasQuery, 
        useEditPessoaMutation, 
        useGetPessoaQuery 
        } = api;
export default api;