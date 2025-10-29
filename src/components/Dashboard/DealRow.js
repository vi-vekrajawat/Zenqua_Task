import React from "react";
const DealRow = ({ deal, status }) => (
  <div className={`deal-row ${status}`}>
    <div className="client-cell">
      <div className="client-avatar">{deal.initials}</div>
      <div className="client-info">
        <div className="client-name">{deal.client}</div>
        <div className="client-assignee">{deal.assignee}</div>
      </div>
    </div>
    <div className="deal-name">{deal.deal}</div>
    <div className="deal-budget">{deal.budget}</div>
    <div className="assignee-cell">
      <div className="assignee-avatar">{deal.avatar}</div>
    </div>
    <div className="action-cell">
      <button className="action-btn">◻</button>
    </div>
  </div>
);

export default DealRow;
