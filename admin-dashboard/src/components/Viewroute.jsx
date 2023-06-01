import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom'; 

function Viewroute() {

    const{ busid }=useParams();
    const[busdata,busdatachange]=useState("");
    
    useEffect(()=>{
        fetch("http://localhost:8000/bus/"+busid).then((res)=>{
            return res.json();
          }).then((resp)=>{
            busdatachange(resp);
          }).catch((err)=>{
            console.log(err.message);
          })
    },[]);





  return (
    <div className="row">

<div className="offset-lg-3 col-lg-6">
    <form className="container" >
        <div className="card" style={{"textAlign": "left"}}>
            <div className="card-title" ><h1>View Routes</h1></div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">

                   
        {busdata &&
        <div>
             <label>Route Number</label>
            <h4>{busdata.RouteNo}</h4>

            <label>Station Name</label>
            <h4>{busdata.stationname}</h4>
            <br></br>
       
       
        
        <Link className=" btn btn-danger" to="/routess">Back</Link>
        </div>
}
    </div>
    </div>
    </div>
    </div>
    </form>
    </div>
    









</div>

  )
}

export default Viewroute