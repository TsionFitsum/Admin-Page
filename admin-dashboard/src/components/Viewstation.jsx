import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom'; 

function Viewstation() {

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
   
         <div className='viewstation'>

         <div className="row">

<div className="offset-lg-3 col-lg-6">
    <form className="container" >
        <div className="card" style={{"textAlign": "left"}}>
            <div className="card-title" ><h1>View Station</h1></div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
        {busdata &&
        <div>
            <h1>ID:{busdata.No}</h1>
       
        <h1>Station Name:{busdata.stationname}</h1>
        <h1>Longitude:{busdata.longitude}</h1>
        <h1>Latitude:{busdata.latitude}</h1>
        <h1>Routes:{busdata.routes}</h1>
        <Link className=" btn btn-danger" to="/stations">Back</Link>
        </div>
}
    </div>
   
    </div>
    </div>
    </div>
    </form> 
    </div>
    </div>
    </div>  )
}

export default Viewstation