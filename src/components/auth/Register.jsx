import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    // State for login
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });

    // Extraer de Usuario
    const { name, email, password, confirm } = user;

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
                    <h1>Register</h1>
                    <form onSubmit={onSubmit}>
                        <div className="campo-form">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" placeholder="Name" onChange={onChange} value={name} />
                        </div>

                        <div className="campo-form">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" name="email" placeholder="Email" onChange={onChange} value={email} />
                        </div>

                        <div className="campo-form">
                            <label htmlFor="password">Your Password</label>
                            <input type="password" id="password" name="password" placeholder="Password" onChange={onChange} value={password} />
                        </div>

                        <div className="campo-form">
                            <label htmlFor="confirm">Repeat Password</label>
                            <input type="password" id="confirm" name="confirm" placeholder="Password Again" onChange={onChange} value={confirm} />
                        </div>

                        <div className="campo-form">
                            <input type="submit" className="btn btn-primario btn-block" value="Register" />
                        </div>
                    </form>

                    <Link to={'/'} class="enlace-cuenta">
                        ¿Do you have account? Login
                    </Link>

                </div>

            </div>
        </>
    )
}

export default Register
