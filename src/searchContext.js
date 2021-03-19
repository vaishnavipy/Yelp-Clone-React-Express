import React,{useState} from "react"
import { useEffect } from "react/cjs/react.development";

const searchContext = React.createContext();


function SearchContextPorvider({children}){

    const [activePage,setActivePage] = useState(1);

    function changeActivePage(no){
        setActivePage(no)
    }

   


    return(
        <searchContext.Provider value={{activePage,changeActivePage}}>
            {children}
        </searchContext.Provider>
    )
}

export {searchContext,SearchContextPorvider}