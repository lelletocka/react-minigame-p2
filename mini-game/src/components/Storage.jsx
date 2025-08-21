import React from "react";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

const Storage = () => {
    
    const [chooseName, setChooseName] = useState("");
    const [choosePass, setChoosePass] = useState("");
    
    /*const [regComment, setRegComment] = useState({
            unregged: "Already have an account?",
            regged: "Account created! Continue to: ",
    });*/

    const [generateComment, setGenerateComment] = useState(false);

    const addAccount = () => {
        localStorage.setItem("username", chooseName);
        localStorage.setItem("password", choosePass);
        setChooseName("");
        setChoosePass(""); 
        setGenerateComment(true);
    };

   


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
                required
            /><br />
            <label htmlFor="reg-pass">Create a password: </label>
            <input
                id="reg-pass"
                name="reg-pass"
                type="text"
                value={choosePass}
                onChange={(e) => setChoosePass(e.target.value)}
                placeholder="password"
                required
            /><br />
            <button onClick={addAccount}>CREATE ACCOUNT</button>
            
             <p>{generateComment ? "Account created! Continue to: " : "Already have an account? "}</p>
            <Link to="/login ">Login</Link>

        </div>

    );


    


}

export default Storage;