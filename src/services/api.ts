import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type UserType = {
    id: string;
    login: string;
    senha: string;
}

type RegisterUserType = {
    nome: string,
    cpf: string,
    email: string,
    senha: string,
    telefone: string,
    inscricaoEstadual: string,
    regimeTributario: string,
    municipio: string
}

type MunicipioType = {
    uf: {
        sigla: string;
        nome: string;
    },
    id: number;
    nome: string;
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
    register: builder.mutation<RegisterUserType, string>({
        query: (body) => ({
            url: '/pessoas-fisicas',
            method: 'POST',
            body: JSON.stringify(body)
            })
        })
    })
});

export const { usePurchaseMutation, useRegisterMutation, useGetMunicipiosQuery } = api;
export default api;