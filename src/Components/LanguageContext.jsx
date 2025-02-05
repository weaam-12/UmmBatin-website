import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Load language from localStorage or default to Arabic ("ar")
    const [language, setLanguage] = useState(localStorage.getItem("language") || "ar");

    // Update localStorage whenever the language changes
    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
