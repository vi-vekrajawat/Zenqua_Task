import React, { useState } from "react";
import StatusGroup from "./StatusGroup";
import FilterBar from "./FilterBar";

const TableContainer = () => {
  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState("2025-01-01");
  const [toDate, setToDate] = useState("2025-12-31");

  const handleDateChange = (type, value) => {
    if (type === 'from') {
      setFromDate(value);
    } else {
      setToDate(value);
    }
  };

  const statuses = [
    {
      id: "negotiating",
      name: "Negotiating",
      color: "#FFF0F5",
      count: 2,
      revenue: "$12,000",
      deals: [
        {
          client: "Chandan Katla",
          assignee: "michael",
          deal: "Chandan Deal",
          budget: "$5,000",
          initials: "CK",
          avatar: "MS",
          date: "2025-03-15"
        },
        {
          client: "michael speed",
          assignee: "michael",
          deal: "some deal 4",
          budget: "$7,000",
          initials: "MS",
          avatar: "MS",
          date: "2025-06-20"
        }
      ]
    },
    {
      id: "kickback",
      name: "Kickback",
      color: "#FFF8E1",
      count: 1,
      revenue: "$50,000",
      deals: [
        {
          client: "Kiosk Black",
          assignee: "vivek",
          deal: "Kiosk Project",
          budget: "$50,000",
          initials: "KB",
          avatar: "VS",
          date: "2025-09-10"
        }
      ]
    }
  ];

  const filterByDate = (deals) => {
    return deals.filter(deal => {
      const dealDate = new Date(deal.date);
      const from = new Date(fromDate);
      const to = new Date(toDate);
      return dealDate >= from && dealDate <= to;
    });
  };

  const filteredStatuses = statuses.map(status => ({
    ...status,
    deals: filterByDate(status.deals),
    count: filterByDate(status.deals).length
  }));

  return (
    <>
      <FilterBar 
        onSearchChange={setSearch}
        onDateChange={handleDateChange}
        fromDate={fromDate}
        toDate={toDate}
      />
      <div className="table-container">
        <div className="table-header">
          <div>Client</div>
          <div>Deal Name</div>
          <div>Deal Budget</div>
          <div>Assignee</div>
          <div></div>
        </div>

        {filteredStatuses.map((status) => (
          <StatusGroup key={status.id} status={status} search={search} />
        ))}
      </div>
    </>
  );
};

export default TableContainer;