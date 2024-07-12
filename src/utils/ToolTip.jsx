import React, { useState } from "react";

const Tooltip = ({ children, message, placement }) => {
  const [visible, setVisible] = useState(false);

  let tooltipClasses = "absolute bg-black text-white text-xs rounded py-1 px-2";
  if (placement === "top") {
    tooltipClasses += " -mt-8 -translate-x-1/2 left-1/2";
  } else if (placement === "bottom") {
    tooltipClasses += " mt-8 -translate-x-1/2 left-1/2";
  }

  return (
    <div className="relative flex items-center">
      <div
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="relative"
      >
        {children}
      </div>
      {visible && <div className={tooltipClasses}>{message}</div>}
    </div>
  );
};

export default Tooltip;
