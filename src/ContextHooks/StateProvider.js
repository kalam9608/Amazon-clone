import React, { useContext, useReducer } from 'react'
import { createContext } from 'react';


// data layer

export const StateContext=createContext();

// provider


export const StateProvider=({children,initialData,reducer})=>{

   return <StateContext.Provider value={useReducer(reducer,initialData)}>
        {children}
    </StateContext.Provider>

}

export const useStateValue=()=>useContext(StateContext);
