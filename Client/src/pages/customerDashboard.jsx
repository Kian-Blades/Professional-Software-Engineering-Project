import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/CustomerDashboard.css';
import CustomerNav from '../components/customerNav';

export default function CustomerDashboard() {

  const stats = [
    { label: 'Pending Tickets', count: 3 },
    { label: 'Active Tickets', count: 3 },
    { label: 'Resolved Tickets', count: 3 }
  ];

  return (
    <div className="customer-dashboard">
      <CustomerNav />

      <div className="container text-center" style={{ paddingTop: '100px' }}>

        <div className="row mb-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="col-4">
              <div className="card stat-card">
                <div className="card-body">
                  <p style={{ fontSize: '20px' }}>{stat.label}</p>
                  <p style={{ fontSize: '40px', fontWeight: 'bold' }}>{stat.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link to="/ticketForm" style={{ textDecoration: 'none' }}>
          <div className="create-ticket-btn mb-4">
            <p style={{ margin: 0, fontSize: '20px' }}>Create a New Ticket</p>
          </div>
        </Link>

        <p style={{ color: 'white', fontWeight: 'bold', fontSize: '24px' }}>Quick Links</p>
        <div className="row">
          <div className="col-6">
            <Link to="/ticketsPage" style={{ textDecoration: 'none' }}>
              <div className="card quick-link-card">
                <div className="card-body">
                  <p style={{ fontSize: '20px' }}>My Tickets</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-6">
            <Link to="/customerQuote" style={{ textDecoration: 'none' }}>
              <div className="card quick-link-card">
                <div className="card-body">
                  <p style={{ fontSize: '20px' }}>My Quotes</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}