import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';

const ReportsModule = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await fetch('https://your-backend-api.com/reports');
                if (response.ok) {
                    const data = await response.json();
                    setReports(data);
                } else {
                    console.error('Failed to fetch reports');
                }
            } catch (error) {
                console.error('Error fetching reports:', error);
            }
        };
        fetchReports();
    }, []);

    const exportPDF = () => {
        try {
            const doc = new jsPDF();
            doc.text("דו\"חות תקופתיים", 10, 10);

            reports.forEach((item, index) => {
                doc.text(`${item.id}. ${item.name}: ${item.value}`, 10, 20 + index * 10);
            });

            doc.save("reports.pdf");
        } catch (error) {
            console.error("Error exporting PDF:", error);
        }
    };

    const exportExcel = () => {
        try {
            const worksheet = XLSX.utils.json_to_sheet(reports);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Reports");

            XLSX.writeFile(workbook, "reports.xlsx");
        } catch (error) {
            console.error("Error exporting Excel:", error);
        }
    };

    return (
        <section className="reports-module">
            <h2>דו"חות תקופתיים</h2>
            <div className="button-container">
                <button onClick={exportPDF} className="btn">Export to PDF</button>
                <button onClick={exportExcel} className="btn">Export to Excel</button>
            </div>
            {reports.length === 0 ? (
                <p>טוען דוחות...</p>
            ) : (
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>שם דוח</th>
                        <th>ערך</th>
                    </tr>
                    </thead>
                    <tbody>
                    {reports.map((report) => (
                        <tr key={report.id}>
                            <td>{report.id}</td>
                            <td>{report.name}</td>
                            <td>{report.value}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </section>
    );
};

export default ReportsModule;
