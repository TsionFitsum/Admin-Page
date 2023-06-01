import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
//import Viewstation from '../components/Viewstation';

function Routess() {
  const navigate= useNavigate();
  const[busdata,busdatachange]=useState(null);

const ViewRoute=(id)=>{
  navigate("/routess/viewroute/" + id );
}
const UpdateRoute=(id)=>{
  navigate("/routess/updateroute/" + id );
}
const DeleteRoute=(id)=>{
  if(window.confirm('Do you want to delete this?')){
    fetch("http://localhost:8000/bus/"+id,{
        method:"DELETE"
       }).then((res)=>{ 
alert('Deleted successfully');
window.location.reload();
navigate('/routess');
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
        <div style={{ "textAlign": "center", "Align": "left" }}>Routes</div>
       
      </div>

    <table className="table table-bordered">
    <thead className="bg-dark text-white">
        <tr>
        <td>ID</td>
          <td>RouteNo</td>
          <td>Station Name</td>
          <td>Action</td>
         
        </tr>
      
     

        </thead>
        <tbody>
          {busdata && busdata.map &&
            busdata.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.RouteNo}</td>
                <td>{item.stationname}</td>
                
                <td>
                <button onClick={() => navigate('/routess/addroute')}>Add Routes</button>
                  <a onClick={()=>{UpdateRoute(item.id)}}className="btn btn-danger">Update</a>
                  <a onClick={()=>{ViewRoute(item.id)}} className="btn btn-success">View</a>
                  <a onClick={()=>{DeleteRoute(item.id)}}className="btn btn-primary">Delete</a></td>

              </tr>
            ))}
        </tbody>

      </table></>

    
  )}


export default Routess