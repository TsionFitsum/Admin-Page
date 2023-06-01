import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Updatebuss() {


    const[id,idchange]=useState("");
    const[plateNo,platenochange]=useState("");
    const[routee,routeechange]=useState("");
    const navigate=useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
       
       const busdata=({id,plateNo,routee});
      
       fetch("http://localhost:8000/bus/"+busid,{
        method:"PUT",
        headers:{"content-type": "application/json"},
        body:JSON.stringify(busdata)
       }).then((res)=>{ 
alert('saved successfully')
navigate('/bus');
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
            idchange(resp.id);
            platenochange(resp.plateNo);
            routeechange(resp.routee);

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

export default Updatebuss