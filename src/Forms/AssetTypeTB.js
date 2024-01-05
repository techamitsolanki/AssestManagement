import React from 'react'

const AssetTypeTB = () => {
    return (
        <div className='parent'>
            <div className='child my-5 shadow rounded p-2'>
                <h1 className='text-center text-white fw-bold'>Asset-Type</h1>
                <div className='p-4'>
                <form className='container'>
        <div className='row'>
        <div className="form-group col-md-6">
            <label className='text-white fw-bold'>Asset ID</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
            <input type="number" className="form-control" required   placeholder=" Asset ID"/>
        </div>
        <div className="form-group col-md-6">
            <label className='text-white fw-bold'>Asset Type</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
            <input type="text" className="form-control" required   placeholder=" Asset Asset Type"/>
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

export default AssetTypeTB;