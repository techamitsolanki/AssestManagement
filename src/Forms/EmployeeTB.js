import React from 'react'

const EmployeeTB = () => {
  return (
    <div className='parent'>
        <div className='child my-5 shadow rounded p-2'>
            <h1 className='text-center text-white fw-bold'>Employee</h1>
            <div className='p-4'>
            <form>
        <div className='row'>
        <div className="form-group col-md-6">
            <label className='text-white fw-bold'>Employee Code</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
            <input type="number" className="form-control" id="" required  placeholder=" Employee Code"/>
        </div>
        <div className="form-group col-md-6">
            <label className='text-white fw-bold'>Employee Name</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
            <input list="browsers" className='form-control' required/>
                 <datalist id="browsers">
                    <option value="Amit"/>
                    <option value="Hemant"/>
                    <option value="Azhar"/>
                    <option value="Megha"/>
                    <option value="Nivedita"/>
				</datalist>
        </div>
        </div>
       <div className='row'>
        <div className="form-group col-md-6">
            <label className='text-white fw-bold'>Email</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
            <input type="email" className="form-control" required id=""  placeholder=" Email"/>
        </div>
        <div className="form-group col-md-6">
            <label className='text-white fw-bold'>Phone Number</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
            <input type="number" className="form-control" required id=""  placeholder="Phone Number"/>
        </div>
        </div>
        <div className='row'>
        <div className="form-group col-md-6">
            <label className='text-white fw-bold'>Location Name</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
            <select  className='form-control'  aria-label="Default select example" required>
                                    <option selected>Choose Location</option>
                                    <option value="1">Chennai</option>
                                    <option value="2">Metro</option>
                                    <option value="3">EC</option>
           </select> 
        </div>
        <div className="form-group col-md-6">
            <label className='text-white fw-bold'>Department Name</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
            <input type="number" className="form-control" required id=""  placeholder=" Department Name"/>
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


export default EmployeeTB;