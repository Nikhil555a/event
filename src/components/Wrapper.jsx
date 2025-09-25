// Wrapper.jsx
// import React from "react";

// const Wrapper = ({ children }) => {
//   return (
//     <div className="min-w-[1250px]  mx-auto flex flex-col items-center gap-10">
//       {children}
//     </div>
//   );
// };

// export default Wrapper;



import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div className="w-full max-w-[1250px] mx-auto flex flex-col items-center gap-10 lg:p-5">
      {children}
    </div>
  );
};

export default Wrapper;
