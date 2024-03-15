import React from 'react'

const Create = () => {
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className="w-50 border bg-secondary text-white p-5">
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" id="email" />
          </div> <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create