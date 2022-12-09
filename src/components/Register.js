import React from "react";
import { Link, withRouter } from 'react-router-dom';
import { useForm } from "../hooks/useForm";

function Register({ handleChangeHeaderLink }) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    React.useEffect(() => {
        handleChangeHeaderLink({link: 'sign-in', title: 'Войти'})
    }, []);

    const { values, handleChange, setValues } = useForm({});

    function handleSubmit() {

    }

    return (
        <section className="register">
            <p className="register__title">
                Регистрация
            </p>
            <form onSubmit={handleSubmit} className="register__form">
                <input className="register__input" required id="username" name="username" type="text" value={values.username} onChange={handleChange} placeholder="Email" />
                <input className="register__input" required id="password" name="password" type="text" value={values.password} onChange={handleChange} placeholder="Пароль" />
                <button type="submit" onSubmit={handleSubmit} className="register__button buttons">Зарегистрироваться</button>
            </form>
            <p className="register__signin">Уже зарегистрированы? <Link to="sign-in" className="register__login-link">Войти</Link></p>
        </section>
    )
}

export default withRouter(Register);