import React, { useState } from "react";
import DealRow from "./DealRow";

const StatusGroup = ({ status, search }) => {
  const [collapsed, setCollapsed] = useState(false);
  const filteredDeals = status.deals.filter(
    (d) =>
      d.client.toLowerCase().includes(search.toLowerCase()) ||
      d.deal.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="status-group">
      <div
        className="status-header"
        style={{ background: status.color }}
        onClick={() => setCollapsed(!collapsed)}
      >
        <span className="status-name">{status.name}</span>
        <span className="status-count">{status.count}</span>
        <span className="status-revenue">{status.revenue}</span>
        <span className="arrow">{collapsed ? "▼" : "▲"}</span>
      </div>

      {!collapsed && (
        <div className="deals-container">
          {filteredDeals.length > 0 ? (
            filteredDeals.map((deal, idx) => (
              <DealRow key={idx} deal={deal} status={status.id} />
            ))
          ) : (
            <div className="empty-state">No deals found in this stage.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default StatusGroup;
