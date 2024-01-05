import React from 'react'

const StateNameTB = () => {
  return (
    <div className='parent'>
      <div className='child my-5 shadow rounded p-2'>
        <h1 className='text-center text-white fw-bold'>State-Name</h1>
        <div className='p-4'>
          <form className='container' >
            <div className='row'>
              <div className="form-group col-md-6">
                <label className='text-white fw-bold'>State ID</label>
                <input type="number"  className="form-control"  required placeholder=" State ID" />
              </div>
              <div className="form-group col-md-6">
                <label className='text-white fw-bold' >State Name</label>
                <input type="text"  className="form-control"  required placeholder="State Name" />
              </div>
            </div>
            <div className='my-2'>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default StateNameTB;;