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

        .options {
            display: flex;
            gap: 8px;
        }
    }
`