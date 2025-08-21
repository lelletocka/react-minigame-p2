import React, { use } from "react";
import { useEffect, useState } from "react";

const API = () => {

    const [dogImage, setDogImage] = useState({});
    const [resultText, setResultText] = useState({
        wrong: "You lost! Try again!",
        right: "You won! Here is a dog image:",
});

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://dog.ceo/api/breeds/image/random"
            );
            const data = await response.json();
            setDogImage(data);            
            console.log(data);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };

    

    
    const [youLost, setYouLost] = useState(false);
        
    const [youWon, setYouWon] = useState(false);

    const [generateText, setGenerateText] = useState("");

    /*const generateDogImage = () => {
        fetchData();
        
    };*/
    
    const clickWrong = () => {
        setYouLost(true);
        setYouWon(false);
        setGenerateText(resultText.wrong);
    };
    const clickRight = () => {
        setYouWon(true);
        setYouLost(false);
        setGenerateText(resultText.right);
        fetchData();
    };



    return (
        <div>
            <h1>Dog Image Game</h1>
            <p>Click the right button to generate random dog image:</p>
            <button onClick={clickWrong}>Wrong button</button>
            <button onClick={clickRight}>Right button</button>

            

            <p>{generateText}</p>
            <img src={dogImage.message}/>
            
        </div>
    );
};






export default API;