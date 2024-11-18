import React from "react";

const TicketCard = ({ ticket }) => {
  const defaultProfileImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s"; // Default profile image URL

  // Map priority values to class names
  const priorityClasses = {
    High: "priority-high",
    Medium: "priority-medium",
    Low: "priority-low",
    None: "priority-none",
  };

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <h3>{ticket.title}</h3>
        <img
          src={ticket.profileImage || defaultProfileImage}
          alt="Profile"
          className="profile-image"
        />
      </div>
      {/* Dynamically assign priority classes */}
      <p className={`priority ${priorityClasses[ticket.priority] || "priority-none"}`}>
        Priority: {ticket.priority}
      </p>
      <p>User: {ticket.user}</p>
      <p>Status: {ticket.status}</p>
    </div>
  );
};

export default TicketCard;
