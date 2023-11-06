import {useState, createContext } from "react";

export const TitleContext = createContext (); 

export default function TitleContextProvider({children}){
    const [title, setTitle] = useState("WALLY-PADEL")
    const [subtitle, setSubtitle] = useState("todas las paletas en un solo lugar")

    return (
        <TitleContext.Provider value={{title, setTitle, subtitle, setSubtitle}}>
            {children}
        </TitleContext.Provider>
    )
}
