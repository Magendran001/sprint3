import { createContext, useState } from "react";

import { MyContext } from "../context/contextprovider";
  
function Contextprovider({children})
{
    

     
          
       let [isauth,setauth] = useState(false)

        let changehandle = (state)=>{
            
              setauth(state)
        }

        return (<MyContext.Provider value={{isauth,changehandle}}>{children}</MyContext.Provider>)

}

export default Contextprovider
export { MyContext}