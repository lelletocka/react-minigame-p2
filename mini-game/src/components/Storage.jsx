import React from "react";
import { useEffect, useState } from "react";

const Storage = () => {
    
    const [chooseName, setChooseName] = useState("");
    const [choosePass, setChoosePass] = useState("");

    const addAccount = () => {
        localStorage.setItem("username", chooseName);
        localStorage.setItem("password", choosePass);
    }


    return (
        <div>
            <h1>Create account</h1>
            <label for="reg-name">Choose a username: </label>
            <input
                id="reg-name"
                type="text"
                value={chooseName}
                onChange={(e) => setChooseName(e.target.value)}
                placeholder="username"
                
            />
            <label for="reg-pass">Choose a password: </label>
            <input
                id="reg-pass"
                type="text"
                value={choosePass}
                onChange={(e) => setChoosePass(e.target.value)}
                placeholder="password"
                
            />
            <button>Create</button>
        </div>

    );


    


}

export default Storage;