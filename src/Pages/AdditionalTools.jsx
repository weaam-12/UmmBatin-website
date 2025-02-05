import React, { useState } from 'react';
import { useLanguage } from '../Components/LanguageContext';

const AdditionalTools = () => {
    const { language } = useLanguage();

    const [form, setForm] = useState({
        type: "",
        details: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/api/requests", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                console.log("Form Submitted Successfully");
                alert(language === 'he' ? "הבקשה נשלחה בהצלחה!" : "تم إرسال الطلب بنجاح!");
                setForm({ type: "", details: "" });
            } else {
                alert(language === 'he' ? "שגיאה בשליחת הבקשה!" : "خطأ في إرسال الطلب!");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert(language === 'he' ? "שגיאה בחיבור לשרת!" : "خطأ في الاتصال بالخادم!");
        }
    };

    return (
        <section className="additional-tools">
            <h2>{language === 'he' ? 'כלים נוספים' : 'أدوات إضافية'}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    {language === 'he' ? 'סוג הבקשה:' : 'نوع الطلب:'}
                    <select
                        value={form.type}
                        onChange={(e) => setForm({ ...form, type: e.target.value })}
                        required
                    >
                        <option value="">{language === 'he' ? 'בחר' : 'اختر'}</option>
                        <option value="garbage-delay">
                            {language === 'he' ? 'דיווח על עיכוב באיסוף זבל' : 'الإبلاغ عن تأخير جمع النفايات'}
                        </option>
                        <option value="new-bin">
                            {language === 'he' ? 'הזמנת פח זבל חדש' : 'طلب حاوية نفايات جديدة'}
                        </option>
                        <option value="kindergarten-registration">
                            {language === 'he' ? 'הרשמה לגני ילדים' : 'التسجيل في رياض الأطفال'}
                        </option>
                    </select>
                </label>
                <br />
                <label>
                    {language === 'he' ? 'פרטים:' : 'التفاصيل:'}
                    <textarea
                        value={form.details}
                        onChange={(e) => setForm({ ...form, details: e.target.value })}
                        required
                    />
                </label>
                <br />
                <button type="submit">{language === 'he' ? 'שלח' : 'إرسال'}</button>
            </form>
        </section>
    );
};

export default AdditionalTools;
