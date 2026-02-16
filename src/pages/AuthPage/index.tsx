import { useFormik } from "formik";
import { usePurchaseMutation } from "../../services/api";

const AuthPage = () => {
    const [purchase, { isLoading }] = usePurchaseMutation();

    const form = useFormik({
        initialValues: {
            login: '',
            password: ''
        },
        onSubmit: async (values) => {
            await purchase(JSON.stringify({
                login: values.login,
                senha: values.password
            })).unwrap();
        }
    });

    return (
        <section>
            <form onSubmit={form.handleSubmit}>
                <label htmlFor="login">Login:</label>
                <input type="text" id="login" name="login" value={form.values.login} onChange={form.handleChange} />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={form.values.password} onChange={form.handleChange} />
                <button type="submit">Login</button>
            </form>

            {isLoading && <p>Cadastrando Usuario</p>}
        </section>
    )
}

export default AuthPage