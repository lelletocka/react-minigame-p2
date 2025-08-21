import React from "react";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';


const Login = () => {

    const [userName, setUserName] = useState("");
    const [userPass, setUserPass] = useState("");



    return (
        <div>
            <h2>Login</h2>
            <label htmlFor="login-name">Username: </label>
            <input
                id="login-name"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="username"
            /><br />
            <label htmlFor="login-pass">Password: </label>
            <input
                id="login-pass"
                type="text"
                value={userPass}
                onChange={(e) => setUserPass(e.target.value)}
                placeholder="password"
            /><br />
            <button>LOGIN</button>
            <p>Don't have an account?</p>
            <Link to="/ ">Create account for free</Link>
        </div>

    );
    
}

export default Login;