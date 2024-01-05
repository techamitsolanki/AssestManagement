import React from 'react'

const Assets = () => {
    return (
        <div className='parent'>
            <div className='child my-5 shadow rounded p-2'>
                <h1 className='text-center text-white fw-bold'>Assets</h1>
                <div className='p-4'>
                    <form >
                        <div className="row">
                            
                            <div className="form-group col-md-4">
                                <label className='text-white fw-bold'>Asset Name</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder=" Asset Name"
                                    required
                                />
                            </div>
                            <div className="form-group col-md-4">
                                <label className='text-white fw-bold'>Asset Type </label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                                  <select  className='form-control' aria-label="Default select example" required>
                                    <option selected>Choose Asset Type</option>
                                    <option value="1">IT </option>
                                    <option value="2">Non-IT</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label className='text-white fw-bold' >Asset Catagory </label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                                <select  className='form-control'  aria-label="Default select example" required>
                                    <option selected>Choose Catagory</option>
                                    <option value="1">Fixed</option>
                                    <option value="2">Consumable</option>
                                    <option value="3">Accesories</option>
                                    <option value="4">Software</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="form-group col-md-4">
                                <label className='text-white fw-bold'>Manufecturer</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                                <select  className='form-control'  aria-label="Default select example"required>
                                    <option selected>Choose Manufecturer</option>
                                    <option value="1">Dell</option>
                                    <option value="2">HP</option>
                                    <option value="3">Apple</option>
                                    <option value="4">ASUS</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label className='text-white fw-bold'>Purchase Date</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                                <input
                                    type="date"
                                    className="form-control"
                                    required
                                    placeholder=" Purchase Date"
                                />
                            </div>
                            <div className="form-group col-md-4">
                                <label className='text-white fw-bold'>Expiry Date</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                                <input
                                    type="date"
                                    required
                                    className="form-control"
                                    placeholder="Expiry Date"
                                />
                            </div>
                        </div>
                        
                        <div className="row">
                            
                            <div className="form-group col-md-4">
                                <label className='text-white fw-bold' >Asset Warranty</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Warranty in Months"
                                    required
                                />
                            </div>
                            <div className="form-group col-md-4">
                                <label className='text-white fw-bold'>Seriel Number</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder=" Seriel Number"
                                    required
                                />
                            </div>
                            <div className="form-group col-md-4">
                                <label className='text-white fw-bold'>Cost</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder=" Cost/INR"
                                    required
                                />
                            </div>
                            
                        </div>
                        <div className="row">
                            
                            
                            <div className="form-group col-md-4">
                                <label className='text-white fw-bold'>Status</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                                <select  className='form-control'  aria-label="Default select example"required>
                                    <option selected>Choose Catagory</option>
                                    <option value="1">In Use</option>
                                    <option value="2">In Store</option>
                                    <option value="3">Repair</option>
                                    <option value="4">Faulty</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label className='text-white fw-bold'>Location Name</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                                <select  className='form-control'  aria-label="Default select example" required>
                                    <option selected>Choose Location</option>
                                    <option value="1">Chennai</option>
                                    <option value="2">Metro</option>
                                    <option value="3">EC</option>
                                </select>            
                            </div>
                            <div className="form-group col-md-4">
                                <label className='text-white fw-bold'>Disposel Method</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                                <select  className='form-control'  aria-label="Default select example"required>
                                    <option selected>Choose Disposal Method</option>
                                    <option value="1">Sale</option>
                                    <option value="2">Returned to Manufacturer</option>
                                    <option value="3">Donate</option>
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

export default Assets;