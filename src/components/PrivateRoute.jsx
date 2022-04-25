import { useState } from "react";
import {Navigate} from "react-router-dom"


function ProtectedRoute({children})
{

     let [isAuth,setAuth] = useState(false);

        if(!isAuth)
        {
           return (<Navigate to="/login"/>)
        }

        return children
}
export default  ProtectedRoute