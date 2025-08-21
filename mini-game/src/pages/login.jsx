import React from "react";
import { useEffect, useState } from "react";


const Login = () => {

    const [userName, setUserName] = useState("");
    const [userPass, setUserPass] = useState("");



    return (
        <div>
            <h1>Login</h1>
            <label for="login-name">Username: </label>
            <input
                id="login-name"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="username"
            />
            <label for="login-pass">Password: </label>
            <input
                id="login-pass"
                type="text"
                value={userPass}
                onChange={(e) => setUserPass(e.target.value)}
                placeholder="password"
            />
            <button>Login</button>
        </div>

    );
}

export default Login;