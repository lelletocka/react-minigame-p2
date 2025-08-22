import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom"; 


const Login = () => {

    const [userName, setUserName] = useState("");
    const [userPass, setUserPass] = useState("");
    const [storedName, setStoredName] = useState("");
    const [storedPass, setStoredPass] = useState("");
    let navigate = useNavigate();    

    const checkLogin = () => {
        setStoredName(localStorage.getItem("username"));
        setStoredPass(localStorage.getItem("password"));
        setUserName("");
        setUserPass("");
        if (userName === storedName && userPass === storedPass) {
            alert(`Welcome ${userName}!`);
            navigate("/game");
        } else {
            alert("Wrong username or password!");
        }
    };


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
                required
            /><br />
            <label htmlFor="login-pass">Password: </label>
            <input
                id="login-pass"
                type="password"
                value={userPass}
                onChange={(e) => setUserPass(e.target.value)}
                placeholder="password"
                required
            /><br />
            <button onClick={checkLogin}>LOGIN</button>
            <p>Don't have an account?</p>
            <Link to="/ ">Create account for free</Link>
        </div>

    );
    
}

export default Login;