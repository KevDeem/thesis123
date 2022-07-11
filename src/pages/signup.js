import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import Nav from '../components/nav'
import './css/login.css'

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState(false)

    const submit = async () => {

        await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        await setNavigate(true);

    }
    
    if (navigate){
        return <Navigate to="/login"/>
    }




    return (
        <div>
            <Nav/>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Sign Up</h1>

                    <input id="name" className="form-control" placeholder="Name" required
                        onChange={e => setName(e.target.value)}
                    />

                    <input type="email" className="form-control" placeholder="Email address" required
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input type="password" className="form-control" placeholder="Password" required
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button id="button" className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                </form>
            </main>
            <a className="outbutton" id="textbutton" href="/login">Already have an account? Login here</a>
        </div>
    )
}

export default Signup
