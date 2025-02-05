import React from "react";
import RequestsModule from "../Pages/RequestsModule"; // Import RequestsModule to display the form
import { useLanguage } from "./LanguageContext"; // Import language context

// A functional component to handle the 'Report an Issue' page
const RequestsPage = () => {
    const { language } = useLanguage(); // Get the selected language

    return (
        <div className="requests-page">
            <div className="requests-page-header">
                <h2>{language === 'he' ? "ניהול הפניות" : "إدارة الطلبات"}</h2> {/* Dynamic text based on language */}
            </div>

            {/* Displaying the RequestsModule form */}
            <div className="requests-module-container">
                <RequestsModule />
            </div>
        </div>
    );
};

export default RequestsPage;
