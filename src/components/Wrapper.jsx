// Wrapper.jsx
import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="min-w-[1250px]  mx-auto flex flex-col items-center gap-10">
      {children}
    </div>
  );
};

export default Wrapper;
