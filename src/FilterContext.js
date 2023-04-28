import {createContext, useState} from 'react';

export const FilterContext = createContext();
export function FilterContextProvider({children}){
    
    
    const [filter, setFilter] = useState('')
    const changeFilter =(newFilter)=>{
      setFilter(newFilter)
    }
    return (
        <FilterContext.Provider value={{filter, changeFilter}}>{children}</FilterContext.Provider>
    )
}


