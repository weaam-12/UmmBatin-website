import React, { useState } from 'react';
import { useLanguage } from '../Components/LanguageContext'; // Import the language context

const PaymentPage = () => {
    const { language } = useLanguage(); // Get the selected language
    const [paymentMethod, setPaymentMethod] = useState('');
    const [paymentDetails, setPaymentDetails] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Payment submitted with:', paymentDetails);
        alert(language === 'he' ? 'התשלום בוצע בהצלחה!' : 'تم الدفع بنجاح!');
    };

    return (
        <div className="payment-page">
            <h2>{language === 'he' ? 'תשלום חשבונית' : 'دفع الفاتورة'}</h2>

            <div className="payment-summary">
                <h3>{language === 'he' ? 'סיכום תשלום' : 'ملخص الدفع'}</h3>
                <p>{language === 'he' ? 'סכום לתשלום:' : 'المبلغ المستحق:'}</p>
                <p>{language === 'he' ? 'תאריך יעד:' : 'تاريخ الاستحقاق:'}</p>
            </div>

            <form onSubmit={handleSubmit}>
                <label>
                    {language === 'he' ? 'שיטת תשלום:' : 'طريقة الدفع:'}
                    <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required>
                        <option value="">{language === 'he' ? 'בחר שיטת תשלום' : 'اختر طريقة الدفع'}</option>
                        <option value="credit-card">{language === 'he' ? 'כרטיס אשראי' : 'بطاقة ائتمان'}</option>
                        <option value="paypal">{language === 'he' ? 'פייפאל' : 'باي بال'}</option>
                        <option value="bank-transfer">{language === 'he' ? 'העברה בנקאית' : 'تحويل بنكي'}</option>
                    </select>
                </label>
                <br />

                <label>
                    {language === 'he' ? 'פרטי תשלום:' : 'تفاصيل الدفع:'}
                    <input
                        type="text"
                        value={paymentDetails}
                        onChange={(e) => setPaymentDetails(e.target.value)}
                        placeholder={language === 'he' ? 'הכנס פרטי תשלום' : 'أدخل تفاصيل الدفع'}
                        required
                    />
                </label>
                <br />
                <button type="submit">{language === 'he' ? 'בצע תשלום' : 'إتمام الدفع'}</button>
            </form>

            <div className="payment-history">
                <h3>{language === 'he' ? 'היסטוריית תשלומים' : 'سجل الدفعات'}</h3>
                {/* You can fetch and display payment history here */}
            </div>
        </div>
    );
};

export default PaymentPage;
