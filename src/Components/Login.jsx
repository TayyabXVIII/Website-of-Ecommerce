import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { users } from "../userData"; // Import users array

const Login = ({ setLoggedInUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Check if user exists
        const user = users.find((u) => u.email === email && u.password === password);
        
        if (user) {
            setLoggedInUser(user.name); // Store the user's name in state
            alert("Login Successful!");
            navigate('/'); // Redirect to home page
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "400px" }}>
            <h2 className="text-center">Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                {error && <p className="text-danger">{error}</p>}
                <button type="submit" className="btn btn-dark w-100">Login</button>
            </form>
        </div>
    );
};

export default Login;
