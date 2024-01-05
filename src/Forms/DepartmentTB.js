import React from 'react'

const DepartmentTB = () => {
    return (
        <div className='parent'>
            <div className='child my-5 shadow rounded p-2'>
                <h1 className='text-center text-white fw-bold'>Department</h1>
                <div className='p-4'>
                    <form >
                        <div className='row'>
                            <div className="form-group col-md-6">
                                <label className='text-white fw-bold'>Department ID</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                                <input type="text" className="form-control" required id="" placeholder=" Department ID" />
                            </div>
                            <div className="form-group col-md-6">
                                <label className='text-white fw-bold'>Department Name</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                                <select  className='form-control'required  aria-label="Default select example" >
                                    <option selected>Choose Department</option>
                                    <option value="1">HR</option>
                                    <option value="2">Admin</option>
                                    <option value="3">IT</option>
                                </select>
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

export default DepartmentTB;