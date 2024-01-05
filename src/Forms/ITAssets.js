import React from 'react'

const ITAssets = () => {
  return (
    <div className='parent'>
      <div className='child my-5 shadow rounded p-2'>
        <h1 className='text-center text-white fw-bold'>IT-Assets</h1>
        <div className='p-4'>
          <form >
            <div className='row'>
              <div className="form-group col-md-6">
                <label className='text-white fw-bold'>Asset ID</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                <input type="text" className="form-control" required id="" placeholder=" Asset ID" />
              </div>
              <div className="form-group col-md-6">
                <label className='text-white fw-bold'>Model Number</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                <input type="text" className="form-control" required id="" placeholder=" Model Number" />
              </div>
            </div>
            <div className='row'>
              <div className="form-group col-md-6">
                <label className='text-white fw-bold'>Operating Sysytem</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                <input type="text" className="form-control" required id="" placeholder=" Operating System" />
              </div>
              <div className="form-group col-md-6">
                <label className='text-white fw-bold'>RAM</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                <input type="text" className="form-control" required id="" placeholder="RAM" />
              </div>


            </div>
            <div className='row'>
              <div className="form-group col-md-6">
                <label className='text-white fw-bold'>Processor</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                <input type="text" className="form-control" required id="" placeholder="Processor" />
              </div>
              <div className="form-group col-md-6">
                <label className='text-white fw-bold'>Software Installed</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                <input type="text" className="form-control" required id="" placeholder="Software Installed" />
              </div>
            </div>
            <div className='row'>
              <div className="form-group col-md-6">
                <label className='text-white fw-bold'>Storage Capacity</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                <input type="text" className="form-control" required id="" placeholder="Storage capactiy" />
              </div>
              <div className="form-group col-md-6">
                <label className='text-white fw-bold'>IP Address</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                <input type="text" className="form-control" required id="" placeholder="IP Address" />
              </div>
            </div>
            <div className='row'>
              <div className="form-group col-md-6">
                <label className='text-white fw-bold'>MAC Address</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                <input type="text" className="form-control" required id="" placeholder="MAC Address" />
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

export default ITAssets;