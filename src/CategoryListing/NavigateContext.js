import { createContext } from "react";

const NavigateContext = createContext();
const NavigateProvider = ({children,navigation})=>{
    return(
        <NavigateContext.Provider value={{navigation}}>
            {children}
        </NavigateContext.Provider>
    );
}
export {NavigateContext,NavigateProvider};