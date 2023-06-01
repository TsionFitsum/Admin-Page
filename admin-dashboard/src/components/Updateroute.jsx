import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Updateroute() {


    const[RouteNo,RouteNochange]=useState("");
    const[stationname,stationnamechange]=useState("");
    
    const navigate=useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
       
       const stationdata=({RouteNo,stationname});
      
       fetch("http://localhost:8000/bus/"+busid,{
        method:"PUT",
        headers:{"content-type": "application/json"},
        body:JSON.stringify(stationdata)
       }).then((res)=>{ 
alert('saved successfully')
navigate('/routess');
       }).catch((err)=>{
        console.log(err.message);
      })
    }

    const{ busid }=useParams();
   // const[busdata,busdatachange]=useState("");
    
    useEffect(()=>{
        fetch("http://localhost:8000/bus/"+busid).then((res)=>{
            return res.json();
          }).then((resp)=>{
            RouteNochange(resp.RouteNo);
           stationnamechange(resp.stationname);
          

          }).catch((err)=>{
            console.log(err.message);
          })
    },[]);
    


  return (
    <div>

        <div className="row">

            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card" style={{"textAlign": "left"}}>
                        <div className="card-title">Update Routes</div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">

                                <label>Route Number</label>
                                <input value={RouteNo} required onChange={e=>RouteNochange(e.target.value)} className="form-control"></input>

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

export default Updateroute