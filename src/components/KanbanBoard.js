import React from "react";
import TicketCard from "./TicketCard";
import groupTickets from "../utils/groupTickets";

// Logo mapping for column titles
const logoMapping = {
  "Todo": "📝", // Replace with your desired icon or image
  "In Progress": "⏳", // Replace with your desired icon or image
  "Backlog": "📋", // Replace with your desired icon or image
};

const KanbanBoard = ({ tickets, grouping, sorting }) => {
  console.log("Tickets before grouping:", tickets); // Debug tickets

  const groupedTickets = groupTickets(tickets || [], grouping, sorting);

  // Handler for adding a new ticket (to be implemented later)
  const handleAddCard = (group) => {
    console.log(`Add card to ${group}`);
    // Implement the logic for adding a card here
  };

  // Handler for column options (to be implemented later)
  const handleColumnOptions = (group) => {
    console.log(`Options for ${group}`);
    // Implement the logic for showing column options here
  };

  return (
    <div className="kanban-board">
      {Object.entries(groupedTickets).map(([group, tickets]) => (
        <div className="kanban-column" key={group}>
          {/* Column Header */}
          <div className="column-header">
            <h2>
              {/* Add logo before group name */}
              <span className="column-logo">{logoMapping[group] || "📁"}</span>
              {group} ({tickets.length})
            </h2>
            <div className="column-icons">
              <button
                className="icon-button"
                onClick={() => handleAddCard(group)}
              >
                +
              </button>
              <button
                className="icon-button"
                onClick={() => handleColumnOptions(group)}
              >
                ...
              </button>
            </div>
          </div>

          {/* Tickets */}
          <div className="kanban-tickets">
            {tickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
