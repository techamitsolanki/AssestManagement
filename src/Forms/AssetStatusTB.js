import React from 'react'

const AssetStatusTB = () => {
    return (
        <div className='parent'>
            <div className='child my-5 shadow rounded p-2'>
                <h1 className='text-center text-white fw-bold'>Asset-Status</h1>
                <div className='p-4'>
                <form>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className='text-white fw-bold'>Status ID</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
              <input
                type="number"
                className="form-control"
                required
                placeholder=" Status ID"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className='text-white fw-bold'>Status Name</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
              <input
                type="text"
                className="form-control"
                required
                placeholder=" Status Name"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between row">
          <div className='col-md-6 text-center'>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          <div className='col-md-6 text-center'>
            <button type="submit" className="btn btn-primary">Reset</button>
          </div>
        </div>
      </form>
      </div>
            </div>
        </div>
    )
}

export default AssetStatusTB;