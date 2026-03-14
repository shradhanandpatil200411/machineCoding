import React, { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const todoContext = createContext(null);

function Warper({ children }) {
  const [todo, setDodo] = useState([
    {
      id: 1,
      todo: "kam kar le bhai",
      isCompleted: false,
    },
  ]);

  return (
    <>
      <todoContext.Provider value={[todo, setDodo]}>
        {children}
      </todoContext.Provider>
    </>
  );
}

export default Warper;
