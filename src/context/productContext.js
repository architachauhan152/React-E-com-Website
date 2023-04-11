import {createContext, useContext} from "react"
const AppContext=createContext();
//children=appcomponent

const AppProvider=({children}) =>{
    return <AppContext.Provider value="Archita">{children}</AppContext.Provider>

}

// custom hook
const useProductContext=() =>{
    return useContext(AppContext);
}

export {AppProvider,AppContext,useProductContext};
