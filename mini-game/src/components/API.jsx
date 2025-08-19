import React from "react";
import { useEffect, useState } from "react";

const API = () => {

    const fetchData = async () => {
        try {
            const response = await fetch(
                ""
            );
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();        
    }, []);

    return <div>API Assignment</div>;
};

export default API;