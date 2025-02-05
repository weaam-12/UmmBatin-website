// DataFetcher.js
import React, { useEffect, useState } from "react";

function DataFetcher() {
    const [message, setMessage] = useState("");

    // Fetch data from Spring Boot API
    useEffect(() => {
        fetch("http://localhost:8080/api/data")
            .then((response) => response.text())  // Get the response text
            .then((data) => setMessage(data))     // Set the fetched data in the state
            .catch((error) => console.error("Error fetching data:", error)); // Handle any errors
    }, []);

    return (
        <div>
            <h2>Message from Backend:</h2>
            <p>{message}</p>
        </div>
    );
}

export default DataFetcher;
