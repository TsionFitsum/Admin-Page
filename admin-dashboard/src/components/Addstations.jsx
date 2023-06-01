import React from 'react'
import  { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { Link, useNavigate } from 'react-router-dom'; 



const Addstations = () => {
    const[No,nochange]=useState("");
    const[stationname,stationnamechange]=useState("");
    const[longitude,longitudechange]=useState("");
    const[latitude,latitudechange]=useState("");
    const[routes,routeschange]=useState("");
    const navigate=useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
       
       const stationdata=({No,stationname,longitude,latitude,routes});
      
      fetch("http://localhost:8000/bus",{
        method:"POST",
        headers:{"content-type": "application/json"},
        body:JSON.stringify(stationdata)
       }).then((res)=>{ 
alert('saved successfully')
navigate('/stations');
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
                        <div className="card-title">Add Stations</div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">

                                <label>No</label>
                                <input value={No} required onChange={e=>nochange(e.target.value)} className="form-control"></input>

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


export default Addstations













//import { Link } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom'; 


/*function Badd() {
    const[busdata,busdatachange]=useState(null);
    useEffect(()=>{
      fetch("http://localhost:8000/bus").then((res)=>{
        return res.json();
      }).then((resp)=>{
        busdatachange(resp);
      }).catch((err)=>{
        console.log(err.message);
      })
    },[]);
  return (
    <div className="container">
        <div className="card">
            <div className="card-title">
                <h2>bus</h2>
            </div>
            <div className="card-body">
              
           
                
<table className="table table-bordered">

<tr>
    <td>ID</td>
    <td>Plate Number</td>
    <td>Route</td>
    <td>Action</td>
</tr>

<thead className="bg-dark text-white">

</thead>
<tbody>
    {busdata &&
    busdata.map(item=> (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.plateNo}</td>
            <td>{item.Route}</td>
            <td>
            
               
              
            
            <a className="btn btn-danger">Update</a>
            <a className="btn btn-success">View</a>
           <a className="btn btn-primary">Delete</a></td>

        </tr>
    ))}
</tbody>

</table>

            </div>
        </div>
        
    </div>
  )
}

export default Badd*/




 