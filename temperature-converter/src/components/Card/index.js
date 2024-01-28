import React from "react";

function Card({ children }) {
  return (
    <div className="bg-gray-300 w-96 h-max m-auto mt-10 rounded-lg p-3">
      {children}
    </div>
  );
}

export default Card;
