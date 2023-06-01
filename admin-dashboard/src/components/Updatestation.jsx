import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Updatestation() {


    const[No,Nochange]=useState("");
    const[stationname,stationnamechange]=useState("");
    const[longitude,longitudechange]=useState("");
    const[latitude,latitudechange]=useState("");
    const[routes,routeschange]=useState("");
    const navigate=useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
       
       const stationdata=({No,stationname,longitude,latitude,routes});
      
       fetch("http://localhost:8000/bus/"+busid,{
        method:"PUT",
        headers:{"content-type": "application/json"},
        body:JSON.stringify(stationdata)
       }).then((res)=>{ 
alert('saved successfully')
navigate('/stations');
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
            Nochange(resp.No);
           stationnamechange(resp.stationname);
           longitudechange(resp.longitude);
           latitudechange(resp.latitude);
           routeschange(resp.routes);
            

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
                        <div className="card-title">Update Stations</div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">

                                <label>No</label>
                                <input value={No} required onChange={e=>Nochange(e.target.value)} className="form-control"></input>

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

                                <label>Longitude</label>
                                <input value={longitude} required onChange={e=>longitudechange(e.target.value)} className="form-control"></input>

                                </div>

                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">

                                <label>Latitude</label>
                                <input value={latitude} required onChange={e=>latitudechange(e.target.value)} className="form-control"></input>

                                </div>

                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">

                                <label>Routes</label>
                                <input value={routes} required onChange={e=>routeschange(e.target.value)} className="form-control"></input>

                                </div>

                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <button className="btn btn-success" type="submit" >Save</button>
                                    <Link to="/stations" className="btn btn-danger">Back</Link>

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

export default Updatestation