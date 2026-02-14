const AuthPage = () => {
    return (
        <section>
            <form action="">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" />
                <button type="submit">Login</button>
            </form>
        </section>
    )
}

export default AuthPage