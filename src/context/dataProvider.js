import { createContext, useState } from "react";
 const Datacontext = createContext(null);
export const  Dataprovider = ()=>{
    const [account, setaccount] = useState('')
    return(
        <Datacontext.Provider value={
            {
                account,
                setaccount
,
            }
        }></Datacontext.Provider>
    )
}