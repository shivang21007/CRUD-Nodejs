import axios from 'axios'
import React,{useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function User() {
  const [users, setUsers] = useState([])

 const serverURL = import.meta.env.VITE_SERVER_URL || 'http://localhost:3001' ;
 console.log(serverURL)

  useEffect(() => {
    axios.get(`${serverURL}/users`)
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
  },[])

const handleDelete = (id) => {
  axios.delete(`${serverURL}/deleteUser/`+id)
  .then(result => {
    //console.log(result)
    window.location.reload()

  })
  .catch(err => console.log(err))
}
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-item-center">
      <div className="m-5 w-50 h-40 bg-white rounded p-3" >
        <Link to="/create" className='btn btn-success'>Add +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{
            users.map((user) => {
             return (
             <tr>
                <td>
                  {user.name}
                </td>
                <td>
                  {user.email}
                </td>
                <td>
                  {user.age}
                </td>
                <td>
                <Link to={`/update/${user._id}`} className='btn btn-success m-1'>Update</Link>
                <button className='btn btn-danger m-1' onClick={(e) => handleDelete(user._id)}>Delete</button>
                </td>
              </tr>
             )
            })
          }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default User