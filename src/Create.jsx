import React from 'react'
import { useState } from 'react'
import { addUser } from './UserReducer'
import { UseDispatch, useSelector } from 'react-redux'


const Create = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const users = useSelector((state) => state.users);
  const dispatch = UseDispatch()

  const handleSumit=(event) => {
    event.preventDefault();
    //console.log(name, email)
    dispatch(addUser({id:users[users.length - 1].id +1 , name, email }))
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New User</h3>
        <form onSubmit={handleSumit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name"  placeholder='Enter Name' onChange={e => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" id="email" placeholder='Emter Email' onChange={e => setEmail(e.target.value)} />
          </div> <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create