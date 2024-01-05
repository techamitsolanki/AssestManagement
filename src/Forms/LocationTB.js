import React from 'react'

const LocationTB = () => {
  return (
    <div className='parent'>
        <div className='child my-5 shadow rounded p-2'>
            <h1 className='text-center text-white fw-bold'>Location</h1>
            <div className='p-4'>
            <form>
        <div className='row'>
        <div className="form-group col-md-6">
            <label className='text-white fw-bold' >Location ID</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
            <input type="number"   className="form-control"  required   placeholder=" Location ID"/>
        </div>
        <div className="form-group col-md-6">
            <label className='text-white fw-bold'>Location Name</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
            <input type="text"  className="form-control"  required  placeholder=" Location Name"/>
        </div>
        </div>
        <div className='row'>
        <div className="form-group col-md-6">
            <label className='text-white fw-bold' >Address</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
            <input type="text"  className="form-control"  required  placeholder=" Address"/>
        </div>
        <div className="form-group col-md-6">
            <label className='text-white fw-bold'>City</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
            <input type="text"  className="form-control"  required  placeholder=" City"/>
        </div>
        </div>
        <div className='row'>
        <div className="form-group col-md-6">
            <label className='text-white fw-bold' >State</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
            <input type="text"  className="form-control"  required  placeholder=" State"/>
        </div>
        <div className="form-group col-md-6">
            <label className='text-white fw-bold'>Country</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
            <input type="text"  className="form-control"  required  placeholder=" Country"/>
        </div>
        </div>
        <div className='row'>
        <div className="form-group col-md-6">
            <label className='text-white fw-bold'>Zip-Code</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
            <input type="number"  className="form-control"  required  placeholder=" Zip-Code"/>
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

export default LocationTB;