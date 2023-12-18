// displayContext.tsx

import React, { createContext, useContext, useState } from 'react';

type Tvalue = {
    display:number;
    setDisplay:React.Dispatch<React.SetStateAction<number>>
}
const DisplayContext = createContext<Tvalue | undefined>(undefined);

export const useDisplayContext = () => {
  const context = useContext(DisplayContext);
  return context;
};


export const DisplayProvider = ({children}:any ) => {
  const [display, setDisplay] = useState(0);

  return (
    <DisplayContext.Provider value={{display,setDisplay}}>
      {children}
    </DisplayContext.Provider>
  );
};
