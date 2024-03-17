import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const Update = () => {
  const {id} = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter(f => f.id == id); 
  const {name, email} = existingUser[0];
  const [uname, setName] = useState(name)
  const [uemail, setEmail] = useState(email)
 

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name"  placeholder='Enter Name' value={uname} onChange={e => setName(e.target.value) } />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" id="email" placeholder='Enter Email'value={uemail} onChange={e => setEmail(e.target.value) } />
          </div> <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  )
}

export default Update