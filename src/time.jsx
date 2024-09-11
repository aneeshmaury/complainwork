import React, { useEffect, useState } from "react";

function LastVisit() {
  const [lastVisit, setLastVisit] = useState(null);

  useEffect(() => {
    // Get the last visit time from localStorage
    const lastVisitTime = localStorage.getItem("lastVisit");

    // If there is a last visit time, set it in state
    if (lastVisitTime) {
      setLastVisit(new Date(parseInt(lastVisitTime)));
    }

    // Save the current time as the new last visit time in localStorage
    localStorage.setItem("lastVisit", Date.now().toString());
  }, []);

  // Format the date and time as YYYY-MM-DD HH:MM:SS
  const formatDateTime = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      {lastVisit ? (
        <p> {formatDateTime(lastVisit)}</p>
      ) : (
        <p>This is your first time visiting!</p>
      )}
    </div>
  );
}

export default LastVisit;
