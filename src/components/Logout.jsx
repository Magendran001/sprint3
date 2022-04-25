import { MyContext } from "../context/contextprovider";
import { useContext } from "react";

export const Logout = () => {
  let {isauth,changehandle} = useContext(MyContext);
   
  // log user out. it's just an inmemory value in context api
       function logout()
        {
          changehandle(!isauth)  ;
          
        } 

  return <div><button onClick={logout}>Logout</button>
     
  </div>;
};
