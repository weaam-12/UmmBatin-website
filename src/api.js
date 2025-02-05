// src/utils/api.js

const API_URL = 'http://localhost:5000';

export const fetchTickets = async () => {
    const response = await fetch(`${API_URL}/tickets`);
    if (!response.ok) throw new Error('Failed to fetch tickets');
    return response.json();
};

export const updateTicketStatus = async (ticketId, status) => {
    const response = await fetch(`${API_URL}/tickets/${ticketId}`, {
        method: 'PATCH',
        body: JSON.stringify({ status }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error('Failed to update ticket status');
    return response.json();
};
