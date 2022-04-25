import { createContext, useContext, useState } from "react";
import { Navigator } from "react-router";
import { MyContext } from "../context/contextprovider";


export const Login = () => {
  //  use reqres  to log user in.
  let [obj,objset] = useState({
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
});


   let {isauth,changehandle} = useContext(MyContext);
   console.log(isauth)
      
  let postdata= (e)=>{

        console.log(e.target.value);
        let {value,name} =e.target;
        if(name ==="username")
        {
           obj.email = value;
          objset({...obj}) 
        }
       else if(name ==="password")
        {
           obj.password = value;
          objset({...obj}) 
        }
           
        console.log(obj)
        
      
  }
  async function Postdata_withvalue(e){
    e.preventDefault();
       
    //    fetch("https://reqres.in/api/login",{method:"POST",
      
    //     body:JSON.stringify(obj),
    //     headers:{
    //       "Content-type":"application/json"
    //     }
    //   })
    
      
    changehandle(!isauth);
    console.log(isauth)

      

    return (<div>maggi</div>)


  }


  return (<div> 
    {!isauth?<form className="loginform" onSubmit={Postdata_withvalue}>
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
        onChange={(e)=>{ postdata(e)}}
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
        onChange={(e)=>{ postdata(e)}}
      />
      <input type="submit" value="SIGN IN" className="login_submit" />


    </form>:""}
    
     <div>{isauth? "you are logged in":""}</div>
    </div>);
};
