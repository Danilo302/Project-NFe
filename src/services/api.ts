import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "/api",
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
    },
    }),
    endpoints: (builder) => ({
        getMunicipios: builder.query<MunicipioType[], void>({
            query: () => '/municipios'
        }),
    purchase: builder.mutation<UserType, string>({
        query: (body) => ({
            url: '/usuario',
            method: 'POST',
            body: body
            })
        }),
        getPessoas: builder.query<RegisterUserType[], void>({
            query: () => '/pessoas-fisicas'
        }),
    register: builder.mutation<RegisterUserType, RegisterUserType>({
        query: (body) => ({
            url: '/pessoas-fisicas',
            method: 'POST',
            body: body
            })
        }),
        editPessoa: builder.mutation<RegisterUserType, RegisterUserType>({
            query: (body) => ({
                // CPF é o identificador único, então usamos ele para construir a URL de edição
                url: `/pessoas-fisicas/${body.cpf}`,
                method: 'PUT',
                body: body
            })
        })
    })
});

export const { usePurchaseMutation, useRegisterMutation, useGetMunicipiosQuery, useGetPessoasQuery, useEditPessoaMutation } = api;
export default api;