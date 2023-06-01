import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 


function Bus() {
  const navigate= useNavigate();
  const[busdata,busdatachange]=useState(null);

const ViewBus=(id)=>{
  navigate("/bus/viewbuss/" + id );
}
const UpdateBus=(id)=>{
  navigate("/bus/updatebuss/" + id );
}
const DeleteBus=(id)=>{
  if(window.confirm('Do you want to delete this?')){
    fetch("http://localhost:8000/bus/"+id,{
        method:"DELETE"
       }).then((res)=>{ 
alert('Deleted successfully');
window.location.reload();
navigate('/bus');
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
        <div style={{ "textAlign": "center", "Align": "left" }}>Homepage</div>
        
      </div>

    <table className="table table-bordered">
    <thead className="bg-dark text-white">
        <tr>
          <td>ID</td>
          <td>Plate Number</td>
          <td>Route</td>
          <td>Action</td>
        </tr>
      
       

        </thead>
        <tbody>
          {busdata && busdata.map &&
            busdata.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.plateNo}</td>
                <td>{item.routee}</td>
                <td>
                <button onClick={() => navigate('/bus/badd')}>Add Bus</button>
                  <a onClick={()=>{UpdateBus(item.id)}}className="btn btn-danger">Update</a>
                  <a onClick={()=>{ViewBus(item.id)}} className="btn btn-success">View</a>
                  <a onClick={()=>{DeleteBus(item.id)}}className="btn btn-primary">Delete</a></td>

              </tr>
            ))}
        </tbody>

      </table></>

    
  )
            }

export default Bus