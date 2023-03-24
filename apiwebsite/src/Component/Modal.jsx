import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Link,Outlet, useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height:530,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const styletable = {
    border:"1px solid black",
    
};

const  BasicModal = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [data,setData] = useState([]);
const navigate = useNavigate();

useEffect(() => {
axios.get('http://localhost:3000/students')
.then(response => {
  console.log(response.data)
  setData(response.data);
})
.catch(error => {
  console.log(error)
})
}, [])


  return (
    <div>
      <button className='btn btn-warning m-2' onClick={handleOpen}>View</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

    


        <div className="table-responsive" style={{ height:'450px', overflowY: 'scroll'}}>
        <h1 style={{display:"flex",textAlign:"center",justifyContent:"center",color:"green"}}>Applicants Details</h1>
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
  {data.map((item,index) => (
  <tbody key={index}>
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{item.fname}</td>
      <td>{item.lname}</td>
      <td>{item.dob}</td>
      <td>{item.education}</td>
      <td>{item.gender}</td>
      <td>{item.number}</td>
      <td>{item.email}</td>
      <td>{item.city}</td>
      <td>{item.destrict}</td>
      <td>{item.state}</td>
      <td>{item.country}</td>
      <td><Link to={`/update/${item.id}`} className='btn btn-warning'>Edit</Link></td>
      <td> <button onClick={e => handleDelete(item.id)} className="btn btn-danger">Delete</button> </td>

      <td> <Link to={`/detail/${item.id}`}> <button className='btn btn-success'>View</button></Link></td>
    </tr>
  </tbody>

  ))}
</table>
</div>

        </Box>
      </Modal>

      <Outlet/>
    </div>
  );

  function handleDelete(id) {
    const conf = window.confirm("Do you want to delete");
    if(conf) {
      axios.delete('http://localhost:3000/students/'+id)
      .then(response => {
      alert("Record has been deleted")
      navigate('/');
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
}

export default BasicModal;