import React from "react";
import { Link, withRouter } from 'react-router-dom';
import { useForm } from "../hooks/useForm";
import * as auth from '../auth.js';

function Register({ handleChangeHeaderLink, history }) {
    React.useEffect(() => {
        handleChangeHeaderLink({link: 'sign-in', title: 'Войти'})
    }, []);

    const { values, handleChange, setValues } = useForm({});

    function handleSubmit(e) {
        e.preventDefault();
        auth.register(values.email, values.password)
        .then((res) => {
            if (res.statusCode !== 400) {
                history.push('/sign-in');
            }
        })
    }

    return (
        <section className="register">
            <p className="register__title">
                Регистрация
            </p>
            <form onSubmit={handleSubmit} className="register__form">
                <input className="register__input" required id="email" name="email" type="text" value={values.email || ''} onChange={handleChange} placeholder="Email" />
                <input className="register__input" required id="password" name="password" type="text" value={values.password || ''} onChange={handleChange} placeholder="Пароль" />
                <button type="submit" onSubmit={handleSubmit} className="register__button buttons">Зарегистрироваться</button>
            </form>
            <p className="register__signin">Уже зарегистрированы? <Link to="sign-in" className="register__login-link">Войти</Link></p>
        </section>
    )
}

export default withRouter(Register);