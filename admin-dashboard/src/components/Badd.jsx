import React from 'react'
import  { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { Link, useNavigate } from 'react-router-dom'; 


const Badd = () => {
    const[id,idchange]=useState("");
    const[plateNo,platenochange]=useState("");
    const[routee,routeechange]=useState("");
    const navigate=useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
       
       const busdata=({id,plateNo,routee});
      
       fetch("http://localhost:8000/bus",{
        method:"POST",
        headers:{"content-type": "application/json"},
        body:JSON.stringify(busdata)
       }).then((res)=>{ 
alert('saved successfully')
navigate('/bus');
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
                        <div className="card-title">Add Bus</div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">

                                <label>ID</label>
                                <input value={id} required onChange={e=>idchange(e.target.value)} className="form-control"></input>

                                </div>

                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">

                                <label>Plate Number</label>
                                <input value={plateNo}  required onChange={e=>platenochange(e.target.value)} className="form-control"></input>

                                </div>

                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">

                                <label>Route</label>
                                <input value={routee} required onChange={e=>routeechange(e.target.value)} className="form-control"></input>

                                </div>

                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <button className="btn btn-success" type="submit" >Save</button>
                                    <Link to="/bus" className="btn btn-danger">Back</Link>

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


export default Badd













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




 