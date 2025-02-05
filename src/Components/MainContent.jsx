import React from 'react';
import { useLanguage } from './LanguageContext'; // Import the hook

const MainContent = () => {
    const { language } = useLanguage(); // Get the current language

    return (
        <div className="main-content">
            <h1>{language === 'he' ? 'ברוך הבא לכפר אום בטין!' : 'مرحباً بكم في قرية ام بطين!'}</h1>
        </div>
    );
};

export default MainContent;
