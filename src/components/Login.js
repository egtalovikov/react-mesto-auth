import React from "react";
import { withRouter } from "react-router-dom";
import { useForm } from "../hooks/useForm";

function Login({ handleChangeHeaderLink }) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    React.useEffect(() => {
        handleChangeHeaderLink({link: 'sign-up', title: 'Регистрация'})
    }, []);

    const {values, handleChange, setValues} = useForm({});
    
    function handleSubmit() {

    }

    return (
        <section className="login">
            <p className="login__title">
                Вход
            </p>
            <form onSubmit={handleSubmit} className="login__form">
                <input className="login__input" required id="username" name="username" type="text" value={values.username} onChange={handleChange} placeholder="Email" />
                <input className="login__input" required id="password" name="password" type="text" value={values.password} onChange={handleChange} placeholder="Пароль" />
                <button type="submit" onSubmit={handleSubmit} className="login__button buttons">Войти</button>
            </form>
        </section>
    )
}

export default withRouter(Login);