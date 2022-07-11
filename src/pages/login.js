import React from 'react'
import Nav from '../components/nav'
import './css/login.css'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState(false);

    const submit = async (event) => {
        event.preventDefault()

        await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        })
        
        setNavigate(true)
        
    }

    if (navigate) {
        return <Navigate to="/"/>
    }

    return (
        <div>
            <Nav/>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={submit}>
                    <h1 type= 'email' className="h3 mb-3 fw-normal">Login to your Account</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" placeholder="name@example.com" required
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" placeholder="Password" required
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button id="button" className="w-100 btn btn-lg btn-primary" type="submit">Login</button>                
                </form>
            </main>
            <a className="outbutton" id="textbutton" href="/signup">Don't have an account? Sign Up here</a>
        </div>
    )
}

export default Login
