import React from "react";
import { withRouter } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import * as auth from '../auth.js';

function Login({ handleChangeHeaderLink, handleLogin, history, setEmail }) {
    React.useEffect(() => {
        handleChangeHeaderLink({link: 'sign-up', title: 'Регистрация'})
    }, []);

    const {values, handleChange, setValues} = useForm({});
    
    function handleSubmit(e) {
        e.preventDefault();
        if (!values.email || !values.password) {
            return;
        }
        auth.authorize(values.email, values.password)
        .then((data) => {
            if (data.token) {
                setEmail(values.email);
                setValues({});
                handleLogin();
                history.push('/');
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <section className="login">
            <p className="login__title">
                Вход
            </p>
            <form onSubmit={handleSubmit} className="login__form">
                <input className="login__input" required id="email" name="email" type="email" value={values.email || ''} onChange={handleChange} placeholder="Email" />
                <input className="login__input" required id="password" name="password" type="password" value={values.password || ''} onChange={handleChange} placeholder="Пароль" />
                <button type="submit" onSubmit={handleSubmit} className="login__button buttons">Войти</button>
            </form>
        </section>
    )
}

export default withRouter(Login);