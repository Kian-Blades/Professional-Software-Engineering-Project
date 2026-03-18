import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { accountsApi } from
import { Link } from 'react-router-dom';
import giacomLogo from '../assets/giacom-master-white-logo-1.png'; 
import '../css/loginPage.css';
export default function LoginPage() { 
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        const storedUser = 0;
        if (username === 'admin' && password === '1234') {
            const testLogin = { username: 'admin', type: 1 };
            localStorage.setItem('user', JSON.stringify(testLogin));

            if (testLogin.type === 1) {
                navigate('/admin');
            } else {
            setError('Invalid account type');
        }
        } else if (username === 'customer' && password === '5678') {
            const testLogin = { username: 'customer', type: 0 };
            localStorage.setItem('user', JSON.stringify(testLogin));

            if (testLogin.type === 0) {
                navigate('/customer');
            } else {
            setError('Invalid account type');
        }
        } else {
            setError('Invalid username or password');
        }
    };

    const fetchUser = async () => {
        try {
            const userName = await accountsApi.
            const password
        }
    }


    return (
        <div className="login-page">

            <div className='image'>
                <img src={giacomLogo} alt="GIACOM" width="110" height="24"></img>
            </div>

            <div className='login-form'>
                <h1>Login</h1>
                <form>
                    <div class="mb-3">
                        <label for="InputUsername" class="form-label">Username</label>
                        <input type="text" class="form-control" id="InputUsername" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="InputPassword" class="form-label">Password</label>
                        <input type="password" class="form-control" id="InputPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" class="login-btn-primary" onClick={handleLogin}>Submit</button>
                </form>
            </div>

        </div>
     )
}