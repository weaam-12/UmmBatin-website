import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLanguage } from "../Components/LanguageContext.jsx";

const RequestsHistory = () => {
    const { language } = useLanguage();
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true); //  Added loading state
    const [error, setError] = useState(""); //  Added error state

    useEffect(() => {
        axios.get('http://localhost:8080/api/requests')
            .then(response => {
                setRequests(response.data);
                setLoading(false); //  Hide loading indicator after data is fetched
            })
            .catch(error => {
                setError("Error fetching requests. Please try again later.");
                setLoading(false); // Hide loading indicator after error
                console.error("Error fetching requests:", error);
            });
    }, []);

    return (
        <div>
            <h3>{language === 'he' ? 'היסטוריית פניות' : 'سجل الطلبات'}</h3>
            {loading && <p>Loading...</p>} {/* Loading state */}
            {error && <p className="error">{error}</p>} {/*  Error message */}
            {!loading && !error && requests.length === 0 && <p>{language === 'he' ? 'לא נמצאו פניות' : 'لا توجد طلبات'}</p>} {/* ✅ No requests message */}
            <ul>
                {requests.map((req, index) => (
                    <li key={index}>
                        <strong>{req.name}</strong> - {req.details}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RequestsHistory;
