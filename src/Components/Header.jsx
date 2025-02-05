import React, { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext"; // Import the LanguageContext

const Header = () => {
    const { language, setLanguage } = useLanguage();
    const [isRTL, setIsRTL] = useState(language === "ar" || language === "he");

    // Update direction state whenever the language changes
    useEffect(() => {
        setIsRTL(language === "ar" || language === "he");
    }, [language]);

    return (
        <header className={isRTL ? "rtl" : ""}>
            <div className="left-links">
                {/* Language Toggle Button */}
                <button onClick={() => setLanguage(language === "he" ? "ar" : "he")}>
                    {language === "he" ? "العربية" : "עברית"}
                </button>
            </div>

            {/*<div className="logo">*/}
            {/*    <img src="src/Pictures/img.png" alt={language === "he" ? "לוגו" : "شعار"} />*/}
            {/*</div>*/}

            <div className="right-links">
                <a href="/" className="nav-link">{language === "he" ? "דף הבית" : "الصفحة الرئيسية"}</a>
                <a href="/login" className="nav-link">{language === "he" ? "התחברות" : "تسجيل الدخول"}</a>
                <a href="/workers-login" className="nav-link">{language === "he" ? "התחברות לעובדים" : "تسجيل دخول الموظفين"}</a>
            </div>
        </header>
    );
};

export default Header;
