import React from 'react'
import  { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { Link, useNavigate } from 'react-router-dom'; 



const Addroute = () => {
    const[RouteNo,Routenochange]=useState("");
    const[stationname,stationnamechange]=useState("");
    
    const navigate=useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
       
       const routedata=({RouteNo,stationname});
      
      fetch("http://localhost:8000/bus",{
        method:"POST",
        headers:{"content-type": "application/json"},
        body:JSON.stringify(routedata)
       }).then((res)=>{ 
alert('saved successfully')
navigate('/routess');
       }).catch((err)=>{
        console.log(err.message);
      })
    }

    return(
        <div>

        <div className="row">

            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card" style={{"textAlign": "left"}}>
                        <div className="card-title">Add Routes</div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">

                                <label>Route Number</label>
                                <input value={RouteNo} required onChange={e=>Routenochange(e.target.value)} className="form-control"></input>

                                </div>

                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">

                                <label>Station Name</label>
                                <input value={stationname}  required onChange={e=>stationnamechange(e.target.value)} className="form-control"></input>

                                </div>

                            </div>

                           

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <button className="btn btn-success" type="submit" >Save</button>
                                    <Link to="/routess" className="btn btn-danger">Back</Link>

                                </div>

                            </div>


                        </div>

                    </div>


                </form>


            </div>


        </div>

        </div>
    )
}


export default Addroute


















 