const priorityLabels = ["No Priority", "Low", "Medium", "High", "Urgent"];

const groupTickets = (tickets, grouping, sorting) => {
  if (!Array.isArray(tickets)) {
    console.error("Invalid tickets data:", tickets);
    return {}; // Return an empty object if tickets is invalid
  }

  const grouped = {};

  tickets.forEach((ticket) => {
    const groupKey =
      grouping === "status"
        ? ticket.status
        : grouping === "user"
        ? ticket.user
        : priorityLabels[ticket.priority];

    if (!grouped[groupKey]) grouped[groupKey] = [];
    grouped[groupKey].push(ticket);
  });

  // Sort tickets within each group
  Object.keys(grouped).forEach((key) => {
    grouped[key].sort((a, b) =>
      sorting === "priority"
        ? b.priority - a.priority
        : a.title.localeCompare(b.title)
    );
  });

  return grouped;
};

export default groupTickets;
