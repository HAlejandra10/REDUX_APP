import React from 'react'
import { useState } from 'react'

const Create = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New User</h3>
        <form>
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