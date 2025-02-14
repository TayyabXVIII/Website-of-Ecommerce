import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../userData"; // Import the users array

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if email already exists
        const userExists = users.some((u) => u.email === user.email);
        if (userExists) {
            alert("User with this email already exists!");
            return;
        }

        // Register new user
        users.push({ ...user });
        alert("Your account has been created! 🎉");
        navigate("/login"); // Redirect to login page
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mb-4">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="name" 
                                value={user.name} 
                                onChange={handleChange} 
                                placeholder="Enter your name" 
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                name="email" 
                                value={user.email} 
                                onChange={handleChange} 
                                placeholder="Enter your email" 
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                name="password" 
                                value={user.password} 
                                onChange={handleChange} 
                                placeholder="Enter your password" 
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
