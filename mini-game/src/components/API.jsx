import React from "react";
import { useEffect, useState } from "react";

const API = () => {
    /* -----lesson template----- */ 
    /*const fetchData = async () => {
        try {
            const response = await fetch(
                ""
            );
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };*/



    /* -----test----- */

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://dog.ceo/api/breeds/image/random"
            );
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };




    /* ----- */

    useEffect(() => {
        fetchData();        
    }, []);


    return <div>API Assignment</div>

};






export default API;