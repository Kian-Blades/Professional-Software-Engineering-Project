import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/customerQuote.css';
import CustomerNav from '../components/customerNav';

export default function CustomerQuote() {
  const ticket = {
    id: 108,
    title: 'Sign-up button not working',
    type: 'Support',
    severity: 'Medium',
    deadline: '05/02/2026',
    usersAffected: 120,
    status: 'Active',
  };

  const quoteBreakdown = [
    { task: 'Investigation and breakdown', hours: '1.5 hrs' },
    { task: 'Bug fix and testing', hours: '3 hrs' },
    { task: 'Deployment and verification', hours: '1 hr' },
    { task: 'Documentation', hours: '0.5 hrs' },
  ];

  const costSummary = {
    hourlyRate: '£40',
    totalCost: '£420.00',
    severity: 'Medium',
    estimatedTime: '10 Hours',
  };

  return (
    <div className="customer-quote-wrapper">
      <header className="customer-quote-header">
        <CustomerNav />
      </header>

      <main className="customer-quote-main p-3">
        <div className="row g-3 h-100">
          <div className="col-auto d-flex flex-column align-self-start">
            <div className="card customer-quote-ticket-card">
              <div className="card-body">
                <h6 className="fw-bold">Selected Ticket: {ticket.id}</h6>
                <p className="text-muted">{ticket.title}</p>
                <p className="mb-1"><span className="text-muted">Type:</span> <strong>{ticket.type}</strong></p>
                <p className="mb-1"><span className="text-muted">Severity:</span> <strong>{ticket.severity}</strong></p>
                <p className="mb-1"><span className="text-muted">Deadline:</span> <strong>{ticket.deadline}</strong></p>
                <p className="mb-1"><span className="text-muted">Users Affected:</span> <strong>{ticket.usersAffected}</strong></p>
                <p className="mt-2 mb-0">
                  <span className="fw-bold">Status: </span>
                  <span className="badge customer-quote-status-badge">{ticket.status}</span>
                </p>
              </div>
            </div>
            <button className="btn customer-quote-change-btn w-100 mt-2">Change Ticket</button>
          </div>

          <div className="col customer-quote-main-card p-3 d-flex flex-column">
            <h4 className="text-white fw-semibold mb-3">Quote Estimate</h4>
            <div className="row g-3 flex-grow-1">
              <div className="col d-flex flex-column gap-3">
                <div className="customer-quote-inner-card p-3 flex-grow-1">
                  <h6 className="text-white fw-semibold mb-3">Quote Breakdown</h6>
                  {quoteBreakdown.map((item, i) => (
                    <div key={i} className="d-flex justify-content-between py-2 customer-quote-breakdown-row">
                      <span className="text-white">{item.task}</span>
                      <span className="customer-quote-hours">{item.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="customer-quote-inner-card p-3">
                  <h6 className="text-white fw-semibold mb-3">Cost Summary</h6>
                  <div className="row g-2">
                    {[
                      ['Hourly Rate', costSummary.hourlyRate, false],
                      ['Total Cost', costSummary.totalCost, true],
                      ['Severity', costSummary.severity, false],
                      ['Estimated Time', costSummary.estimatedTime, false],
                    ].map(([label, value, highlight]) => (
                      <div className="col-6 d-flex justify-content-between" key={label}>
                        <span className="customer-quote-cost-label">{label}:</span>
                        <span className={highlight ? 'customer-quote-highlight' : 'text-white fw-semibold'}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-auto d-flex flex-column justify-content-center customer-quote-actions p-3">
                <button className="btn customer-quote-btn-accept w-100">Accept Quote</button>
                <button className="btn customer-quote-btn-modify w-100 mt-2">Modify Quote</button>
                <button className="btn customer-quote-btn-decline w-100 mt-2">Decline Quote</button>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}