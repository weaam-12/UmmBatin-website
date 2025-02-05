import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLanguage } from '../Components/LanguageContext';
import axios from 'axios';

const RequestsModule = () => {
    const { language } = useLanguage();
    const [request, setRequest] = useState({ name: '', details: '' });
    const [successMessage, setSuccessMessage] = useState(''); // ✅ Added successMessage state
    const [isSubmitting, setIsSubmitting] = useState(false); // ✅ Disable button during submission

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRequest((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await axios.post('http://localhost:8080/api/requests', request);

            if (response.status === 200) {
                toast.success(language === 'he' ? 'הבקשה נשלחה בהצלחה!' : 'تم إرسال الطلب بنجاح!');

                setSuccessMessage(language === 'he' ? 'הבקשה שלך התקבלה!' : 'تم استلام طلبك!');

                setRequest({ name: '', details: '' });

                // ✅ Remove success message after 3 seconds
                setTimeout(() => setSuccessMessage(''), 3000);
            }
        } catch (error) {
            toast.error(language === 'he' ? 'שגיאה בשליחת הבקשה' : 'حدث خطأ في إرسال الطلب');
            console.error('Error submitting request:', error);
        }

        setIsSubmitting(false);
    };

    return (
        <div className="requests-module">
            {/* ✅ ToastContainer for displaying notifications */}
            <ToastContainer position="top-right" autoClose={3000} />

            <h3>{language === 'he' ? 'הגש בקשה' : 'إرسال طلب'}</h3>

            <form onSubmit={handleSubmit}>
                <label>{language === 'he' ? 'שם הבקשה' : 'اسم الطلب'}</label>
                <input
                    type="text"
                    name="name"
                    value={request.name}
                    onChange={handleChange}
                    required
                />

                <label>{language === 'he' ? 'פרטי הבקשה' : 'تفاصيل الطلب'}</label>
                <textarea
                    name="details"
                    value={request.details}
                    onChange={handleChange}
                    required
                />

                {/* ✅ Success message displayed on UI */}
                {successMessage && <p className="success-message">{successMessage}</p>}

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting
                        ? (language === 'he' ? 'שולח...' : 'جاري الإرسال...')
                        : (language === 'he' ? 'שלח בקשה' : 'إرسال الطلب')}
                </button>
            </form>
        </div>
    );
};

export default RequestsModule;
