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

  return (
    <div>
      {lastVisit ? (
        <p>: {lastVisit.toLocaleString()}</p>
      ) : (
        <p>This is your first time visiting!</p>
      )}
    </div>
  );
}

export default LastVisit;
