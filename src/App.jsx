import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LanguageProvider } from "./Components/LanguageContext";
import ImageCarousel from "./Components/ImageCarousel";
import MainContent from "./Components/MainContent";
import ReportsModule from "./Pages/ReportsModule";
import AdditionalTools from "./Pages/AdditionalTools";
import ActivityPage from "./Pages/ActivityPage";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import RequestsPage from "./Components/RequestsPage";
import PaymentPage from "./Pages/PaymentPage";
import DataFetcher from "./Components/DataFetcher";
import { ToastContainer } from 'react-toastify';
import RequestsHistory from "./Pages/RequestsHistory"; //  Import the RequestsHistory component

import './App.css';
import "./HomePage.css";
import "./Footer and Header.css";
import "./RequestsModule.and ReportsModule.css";
import "./Home.css";

function App() {
    return (
        <LanguageProvider>
            <Router>
                <ToastContainer position="top-right" autoClose={3000} />  {/*  Move it here */}

                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <ImageCarousel />
                                <MainContent />
                                <div className="services-container">
                                    <div className="service-card">
                                        <Link to="/payment-page">
                                            <h3>תשלומים</h3>
                                        </Link>
                                    </div>
                                    <div className="service-card">
                                        <Link to="/requests">
                                            <h3>ניהול פניות</h3>
                                        </Link>
                                    </div>
                                    <div className="service-card">
                                        <Link to="/additional-tools">
                                            <h3>דווח על בעיות</h3>
                                        </Link>
                                    </div>
                                    <div className="service-card">
                                        <Link to="/reports-module">
                                            <h3>טפסים</h3>
                                        </Link>
                                    </div>
                                </div>
                                <div className="activity-section">
                                    <h2>פעילויות בקהילה</h2>
                                    <p>גלה פעילויות מרתקות בקהילה שלנו. התעדכן עם אירועים, סדנאות ועוד.</p>
                                    <Link to="/activity">
                                        <button className="btn">Learn More</button>
                                    </Link>
                                    <Link to="/requests-history">
                                        <button>View Requests History</button>
                                    </Link>

                                </div>
                                <DataFetcher />
                                <Footer />
                            </>
                        }
                    />
                    <Route path="/requests-history" element={<RequestsHistory />} /> {/*  This should be here */}
                    <Route path="/requests" element={<RequestsPage />} />
                    <Route path="/additional-tools" element={<AdditionalTools />} />
                    <Route path="/reports-module" element={<ReportsModule />} />
                    <Route path="/activity" element={<ActivityPage />} />
                    <Route path="/payment-page" element={<PaymentPage />} />
                </Routes>
            </Router>
        </LanguageProvider>
    );
}

export default App;
