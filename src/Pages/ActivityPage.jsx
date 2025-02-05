import React from 'react';
import { useLanguage } from '../Components/LanguageContext'; // Import the language context

const ActivityPage = () => {
    const { language } = useLanguage(); // Get the selected language

    return (
        <section className="activity-page">
            <h2>{language === 'he' ? 'פעילויות בקהילה' : 'أنشطة المجتمع'}</h2>
            <p>
                {language === 'he'
                    ? 'ברוכים הבאים לדף פעילויות הקהילה! כאן תמצאו מידע על אירועים קרובים, פעילויות ועוד.'
                    : 'مرحباً بكم في صفحة أنشطة المجتمع! ستجدون هنا معلومات حول الفعاليات القادمة والأنشطة والمزيد.'}
            </p>
            {/* You can add more content here like event lists, a calendar, or event details */}
        </section>
    );
};

export default ActivityPage;
