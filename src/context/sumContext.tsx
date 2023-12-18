// displayContext.tsx

import React, { createContext, useContext, useState } from 'react';

type Tvalue = {
    sum:string;
    setSum:React.Dispatch<React.SetStateAction<string>>
}
const SumContext = createContext<Tvalue | undefined>(undefined);

export const useSumContext = () => {
  const context = useContext(SumContext);
  return context;
};


export const SumProvider = ({children}:any ) => {
  const [sum, setSum] = useState("0");

  return (
    <SumContext.Provider value={{sum,setSum}}>
      {children}
    </SumContext.Provider>
  );
};
