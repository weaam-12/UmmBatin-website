import React from 'react';
import ReportsModule from './Components/ReportsModule';
import { useLanguage } from './LanguageContext'; // Import the language context

const ReportsPage = () => {
    const { language } = useLanguage(); // Get the current language

    return (
        <div className="reports-page">
            <h1>{language === 'he' ? 'דו"חות תקופתיים' : 'التقارير الدورية'}</h1>
            <ReportsModule />
        </div>
    );
};

export default ReportsPage;
