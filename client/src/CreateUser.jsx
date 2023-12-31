import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate, Link} from  'react-router-dom'

function CreateUser() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_SERVER_URL}/createUser`, {name, email, age})
    .then(result => {
      //console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="d-flex vh-100 bg-dark justify-content-center align-items-center">
      <div className='m-5 w-50 bg-white rounded p-3'>
      <p className="text-small rounded">Made by Shivang ❤</p>
      <Link to="/" className='btn btn-info'>Home</Link>

        <form onSubmit={Submit}>
          <h2>Add User</h2>
          <div className='mb-2'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Name' className='form-control' onChange={(e) => setName(e.target.value)} />
          </div>

          <div className='mb-2'>
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter Email' className='form-control' onChange={(e) => setEmail(e.target.value)}/>
          </div>
          
          <div className='mb-2'>
            <label htmlFor="">Age</label>
            <input type="text" placeholder='Enter Age' className='form-control' onChange={(e) => setAge(e.target.value)}/>
          </div>
          <button className='btn btn-success'>Sumbit</button>
        </form>

      </div>
    </div>
  )
}

export default CreateUser