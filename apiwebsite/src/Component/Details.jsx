import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {Link, Outlet} from 'react-router-dom';
import { useParams } from 'react-router-dom'


const Details = () => {
const {id} = useParams();
    const [data,setData] = useState([])

    useEffect(() => {
  
        axios.get('http://localhost:3000/students/' + id)
        .then((response) => (
        setData(response.data)
        )).catch(error => {
            console.log(error)
        })
        
        
        }, [])
        
  return (
    <>
      <div className="table-responsive" style={{ height:'450px', overflowY: 'scroll'}}>
        <h1 style={{display:"flex",textAlign:"center",justifyContent:"center",color:"green"}}>Applicants Details</h1>
        <Link to="/"><button className='btn btn-primary container m-5' style={{width:"200px"}}>Application Form</button></Link>
        <table  className="table table-hover overflow-auto" style={{overflow:"scroll",border:"1px solid skyblue"}} >
  <thead>
    <tr>
     
      <th scope="col">Si no</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Date of birth</th>
      <th scope="col">Education</th>
      <th scope="col">Gender</th>
      <th scope="col">Mobile</th>
      <th scope="col">Email</th>
      <th scope="col">City</th>
      <th scope="col">Destrict</th>
      <th scope="col">State</th>
      <th scope="col">Country</th>
       <th></th>
       <th></th>
       <th></th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">{data.id}</th>
      <td>{data.fname}</td>
      <td>{data.lname}</td>
      <td>{data.dob}</td>
      <td>{data.education}</td>
      <td>{data.gender}</td>
      <td>{data.number}</td>
      <td>{data.email}</td>
      <td>{data.city}</td>
      <td>{data.destrict}</td>
      <td>{data.state}</td>
      <td>{data.country}</td>
    </tr>
  </tbody>

</table>
<Outlet/>
</div>
    </>
  )
}

export default Details
