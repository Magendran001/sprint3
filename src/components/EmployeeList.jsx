 import { useEffect,useState } from "react";
export const EmployeeList = () => {



  let [ employeesdata,setemployeesdata] = useState([]);

       
  useEffect(()=>{ getdata()},[])

    async function getdata()
    {
      let x = await fetch("http://localhost:8080/employee");
      let y = await x.json();
     
      
      setemployeesdata(y)
      
      
    }
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      <div>{employeesdata.map((ele)=> <Allemployeesdetail employeesdata= {ele}/>)}</div>
      
    </div>
  );
};

function Allemployeesdetail({employeesdata})
{
   return (<div className="employee_card">
   <img src={employeesdata.image} className="employee_image" /><br></br>
   <span className="employee_name">{employeesdata.employee_name}</span><br></br>
   <span className="employee_title">{employeesdata.title}</span>
 </div>)
}
