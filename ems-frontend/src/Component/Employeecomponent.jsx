import React, { useState } from 'react'
import { createemployee } from '../Service/EmployeeService';
import { useNavigate } from 'react-router-dom';

export default function Employeecomponent() {

  const[firstname,setfirstname]=useState('');
  const[lastname,setlastname]=useState('');
  const[email,setemail]=useState('');


  const navigator=useNavigate();

  const handlefirstname=(e)=>{
    setfirstname(e.target.value);
  }

  const handlelastname=(e)=>{
    setlastname(e.target.value);
  }

  const handleemail=(e)=>{
    setemail(e.target.value);
    
  }

  function saveemployee(e) {
    e.preventDefault();

    const employee={firstname,lastname,email};
    console.log(employee);

    createemployee(employee).then((response)=>{
      console.log(response.data);
       navigator('/employees');

      
    })  
    
    
  }

  return (
    <div className='container'>
      <br /><br />
      <div className='row'>

        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>Add employee</h2>
          <div className='card-body'>

            <form>

              <div className='form-group mb-2'>
                <label className='form-label'>First name:</label>
                <input type="text"
                placeholder='"enter first name'
                name='firstname'
                value={firstname}
                className='form-control'
                onChange={handlefirstname}
                />
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Last name:</label>
                <input type="text"
                placeholder='"enter last name'
                name='lastname'
                value={lastname}
                className='form-control'
                onChange={handlelastname}
                />
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>email:</label>
                <input type="text"
                placeholder='"enter email'
                name='email'
                value={email}
                className='form-control'
                onChange={handleemail}
                />
              </div>

              <button className='btn btn-success' onClick={saveemployee}></button>
            </form>
          </div>
        </div>
      </div>


    </div>
  )
}
