import React, { useState, useRef, useEffect } from "react";

const DisplayButton = ({ onGroupingChange, onSortingChange, defaultGrouping, defaultSorting }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility
  const dropdownRef = useRef(); // Reference for the dropdown container

  const handleDisplayClick = () => {
    setIsDropdownOpen((prevState) => !prevState); // Toggle visibility
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button
        className={`display-button ${isDropdownOpen ? "open" : ""}`}
        onClick={handleDisplayClick}
      >
        <span className="icon">☰</span> Display <span className="dropdown-icon">▼</span>
      </button>

      {isDropdownOpen && (
        <div className="kanban-controls" ref={dropdownRef}>
          <div className="dropdown">
            <label>Grouping</label>
            <select onChange={(e) => onGroupingChange(e.target.value)} value={defaultGrouping}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          <div className="dropdown">
            <label>Ordering</label>
            <select onChange={(e) => onSortingChange(e.target.value)} value={defaultSorting}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayButton;
