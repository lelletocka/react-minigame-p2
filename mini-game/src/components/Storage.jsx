import React from "react";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

const Storage = () => {
    
    const [chooseName, setChooseName] = useState("");
    const [choosePass, setChoosePass] = useState("");

    const addAccount = () => {
        localStorage.setItem("username", chooseName);
        localStorage.setItem("password", choosePass);
    }


    return (
        <div>
            <h2>Create account</h2>
            <label htmlFor="reg-name">Create a username: </label>
            <input
                id="reg-name"
                name="reg-name"
                type="text"
                value={chooseName}
                onChange={(e) => setChooseName(e.target.value)}
                placeholder="username"
                
            /><br />
            <label htmlFor="reg-pass">Create a password: </label>
            <input
                id="reg-pass"
                name="reg-pass"
                type="text"
                value={choosePass}
                onChange={(e) => setChoosePass(e.target.value)}
                placeholder="password"
                
            /><br />
            <button>CREATE ACCOUNT</button>
            <p>Already have an account? </p>
            <Link to="/login ">Login here</Link>

        </div>

    );


    


}

export default Storage;