import React, { useState } from 'react';
import { ticketsApi } from '../api/tickets.api';
import '../css/TicketForm.css';
import { useNavigate } from 'react-router-dom';
import CustomerNav from '../components/customerNav';

export default function NewForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    type: 'Support',
    title: '',
    description: '',
    severity: 'Low',
    impact: 'Low',
    date: '',
    users: '',
    file: null,
  });

  const set = (key, val) => setForm(p => ({ ...p, [key]: val }));
  
  const handleFormSubmit = async () => {
    console.log("1. Submit button clicked");

    const severityMap = { 'Low': 1, 'Medium': 2, 'High': 3, 'Critical': 4 };
    const businessMap = { 'Low': 1, 'Medium': 2, 'High': 3, 'Critical': 4 };
    const selectedDate = new Date(form.date);
    const today = new Date();
    const diffTime = Math.abs(selectedDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 7;
    
    try {
        const payload = {
            title: form.title,
            description: `[TYPE: ${form.type}] ${form.description}`,
            quote: 0,
            severity: severityMap[form.severity],
            technical_Diffculty: businessMap[form.impact],
            users_Affected: parseInt(form.users) || 0,
            deadline: diffDays,
            account_Id: 1,
        };
        
        const result = await ticketsApi.create(payload);
        console.log("Database response:", result);

        if (result && (result.id !== undefined)) {
          alert(`Success! Ticket added to database.\n\nTicket ID: ${result.id}\nTitle: ${result.title}`);
        } else {
          alert("Ticket submitted, but no ID was returned. Check console for details.");
        }
        } catch (error) {
      console.error('Submission Error:', error);
      alert(`Submission failed: ${error.message}`);
    }
  };


  return (
    <div className="ticket-container">
      <header className="ticket-header">
        <CustomerNav />
      </header>

      <main className="ticket-main">
        <div className="ticket-card">
          <h1 className="ticket-title">Ticket Submission</h1>

          <div className="ticket-field">
            <label>Ticket Type</label>
            <select value={form.type} onChange={e => set('type', e.target.value)}>
              <option>Support</option>
              <option>Incident</option>
              <option value="Enhancement">Enhancement / Feature</option>
            </select>
          </div>

          <div className="ticket-field">
            <label>Title</label>
            <input type="text" placeholder="Brief description" value={form.title} onChange={e => set('title', e.target.value)} />
          </div>

          <div className="ticket-field">
            <label>Description</label>
            <textarea placeholder="Describe your issue or request" value={form.description} onChange={e => set('description', e.target.value)} />
          </div>

          <div className="ticket-row">
            <div className="ticket-field">
              <label>Severity</label>
              <select value={form.severity} onChange={e => set('severity', e.target.value)}>
                {['Low', 'Medium', 'High', 'Critical'].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div className="ticket-field">
              <label>Business Impact</label>
              <select value={form.impact} onChange={e => set('impact', e.target.value)}>
                {['Low', 'Medium', 'High', 'Critical'].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>

          <div className="ticket-row">
            <div className="ticket-field">
              <label>Date of Issue</label>
              <input type="date" value={form.date} onChange={e => set('date', e.target.value)} />
            </div>
            <div className="ticket-field">
              <label>Users Affected</label>
              <input type="number" min="0" placeholder="Enter number" value={form.users} onChange={e => set('users', e.target.value)} />
            </div>
          </div>

          <div className="ticket-field">
            <label>Attachments</label>
            <label className="ticket-file">
              <input type="file" hidden onChange={e => set('file', e.target.files[0])} />
              <span>{form.file ? form.file.name : 'Choose a file'}</span>
            </label>
          </div>

          <div className="ticket-actions">
            <button className="ticket-btn-ghost" onClick={() => navigate(-1)}>Cancel</button>
            <button className="ticket-btn-primary" onClick={handleFormSubmit}>Submit Ticket</button>
          </div>
        </div>
      </main>
    </div>
  );
}