import React, { useState, useRef, useEffect } from "react";
import useFetch from "./hooks/useFetch";
import KanbanBoard from "./components/KanbanBoard";
import DisplayButton from "./components/DisplayButton";

const App = () => {
  const { data: tickets, loading, error } = useFetch(
    "https://api.quicksell.co/v1/internal/frontend-assignment"
  );

  const [grouping, setGrouping] = useState("status"); // Default grouping
  const [sorting, setSorting] = useState("priority"); // Default sorting
  const [showFooterName, setShowFooterName] = useState(false); // State to manage footer name display

  const dropdownRef = useRef(); // Reference for the dropdown container

  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowFooterName(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDisplayClick = () => {
    setShowFooterName((prevState) => !prevState); // Toggle visibility
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFooterName(true);
    }, 60000); // 1 minute = 60000 ms

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <header className="kanban-header">
        <DisplayButton
          onGroupingChange={setGrouping}
          onSortingChange={setSorting}
          defaultGrouping={grouping}
          defaultSorting={sorting}
        />
      </header>
      <KanbanBoard tickets={tickets} grouping={grouping} sorting={sorting} />
      <footer className="kanban-footer">
        {showFooterName && <p>Coded By: <a
              href="https://www.linkedin.com/in/sourav-kumar-373327222/"
              target="_blank"
              rel="noopener noreferrer"
            > Sourav Kumar Burnwal </a> &copy; 2024 All Rights Reserved.</p>}
      </footer>
    </div>
  );
};

export default App;
