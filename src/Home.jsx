import React from 'react'

const Home = () => {
  return (
    <div className="container">
        <h2>REDUX APP WITH JSON SERVER</h2>
        <button className='btn btn-success my-3'>Create +</button>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
        </table>

    </div>
  )
}

export default Home