import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import Viewstation from '../components/Viewstation';


function Stations() {
  const navigate= useNavigate();
  const[busdata,busdatachange]=useState(null);

const ViewStation=(id)=>{
  navigate("/stations/viewstations/" + id );
}
const UpdateStation=(id)=>{
  navigate("/stations/updatestations/" + id );
}
const DeleteStation=(id)=>{
  if(window.confirm('Do you want to delete this?')){
    fetch("http://localhost:8000/bus/"+id,{
        method:"DELETE"
       }).then((res)=>{ 
alert('Deleted successfully');
window.location.reload();
navigate('/stations');
       }).catch((err)=>{
        console.log(err.message);
      })
    }
  }
  




    useEffect(()=>{
      fetch("http://localhost:8000/bus").then((res)=>{
        return res.json();
      }).then((resp)=>{
        busdatachange(resp);
      }).catch((err)=>{
        console.log(err.message);
      })
    },[]);

  return(
    <>
      <div>
        <div style={{ "textAlign": "center", "Align": "left" }}>Stations</div>
       
      </div>

    <table className="table table-bordered">
    <thead className="bg-dark text-white">
        <tr>
          <td>No</td>
          <td>Station Name</td>
          <td>Longitude</td>
          <td>Latitude</td>
          <td>Routes</td>
          <td>Action</td>
        </tr>
      
     

        </thead>
        <tbody>
          {busdata && busdata.map &&
            busdata.map(item => (
              <tr key={item.No}>
                <td>{item.No}</td>
                <td>{item.stationname}</td>
                <td>{item.longitude}</td>
                <td>{item.latitude}</td>
                <td>{item.routes}</td>
                <td>
                <button onClick={() => navigate('/stations/addstations')}>Add Stations</button>
                  <a onClick={()=>{UpdateStation(item.id)}}className="btn btn-danger">Update</a>
                  <a onClick={()=>{ViewStation(item.id)}} className="btn btn-success">View</a>
                  <a onClick={()=>{DeleteStation(item.id)}}className="btn btn-primary">Delete</a></td>

              </tr>
            ))}
        </tbody>

      </table></>

    
  )}
   

   
export default Stations