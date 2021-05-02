import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    // State for login
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    // Extraer de Usuario
    const { email, password } = user;

    // Copiar usuario para no reescribir el actual
    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    // Validations for Login
    const onSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <>
            <div className="form-usuario">
                <div className="contenedor-form sombra-dark">
                    <h1>Login</h1>
                    <form onSubmit={onSubmit}>
                        <div className="campo-form">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" name="email" placeholder="Email" onChange={onChange} value={email} />
                        </div>

                        <div className="campo-form">
                            <label htmlFor="password">Your Password</label>
                            <input type="password" id="password" name="password" placeholder="Password" onChange={onChange} value={password} />
                        </div>

                        <div className="campo-form">
                            <Link className="btn-block" to={'/search'}>
                                <input type="submit" className="btn btn-primario btn-block" value="Login" />
                            </Link>
                        </div>
                    </form>

                    <Link to={'/register'} class="enlace-cuenta">
                        or Register
                    </Link>

                </div>

            </div>
        </>
    )
}

export default Login
