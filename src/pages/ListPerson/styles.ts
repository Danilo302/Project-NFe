import styled from "styled-components";

export const ListPersonContainer = styled.div`
    padding: 16px;

    h1 {
        margin-bottom: 16px;
    }

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        a {
            padding: 8px 16px;
            background-color: #007bff;
            color: #fff;
            border-radius: 4px;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 16px;

        > div {
            display: flex;
            gap: 16px;

            label {
                display: block;
                margin-bottom: 4px;
            }
            input {
                padding: 8px;
                border: 1px solid #ddd;
                border-radius: 4px;
            }
        }

        button {
            padding: 8px 16px;
            background-color: #28a745;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 16px;

        th, td {
            border: 1px solid #ddd;
            padding: 8px;
        }

        th {
            background-color: #f2f2f2;
            text-align: left;
        }

            a {
                margin-right: 8px;
                background-color: #007bff;
                color: #fff;
                padding: 4px 8px;
                border-radius: 4px;
                text-decoration: none;
            }
            
            .del {
                background-color: #dc3545;
            }
    }
`