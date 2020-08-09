import React, { useState } from 'react';

const FreePaidButton = ({ active, setActive }) => {
  const classes = "w-32 sm:w-40 text-center py-1";
  return (
    <div className="flex mt-4 justify-center">
      <button
        className={`${classes} ${active === "free" ? "active" : "inactive"}`}
        onClick={() => setActive("free")}
      >
        Free
      </button>
      <button
        className={`${classes} ${active === "paid" ? "active" : "inactive"}`}
        onClick={() => setActive("paid")}
      >
        Paid
      </button>
    </div>
  );
};

export default FreePaidButton;
