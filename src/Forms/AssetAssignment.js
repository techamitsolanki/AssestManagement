import React from 'react'

const AssetAssignment = () => {
    return (
        <div className='parent'>
            <div className='child my-5 shadow rounded p-2'>
                <h1 className='text-center text-white fw-bold'>Asset-Assignment</h1>
                <div className='p-3'>
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className='text-white fw-bold'>Assignment ID</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                                    <input
                                        type="number"
                                        className="form-control"
                                        required
                                        placeholder=" Assignment ID"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className='text-white fw-bold'>Asset ID</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                                    <input
                                        type="number"
                                        className="form-control"
                                        required
                                        placeholder=" Asset ID"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className='text-white fw-bold'>Employee ID</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                                    <input
                                        type="number"
                                        className="form-control"
                                        required
                                        placeholder=" Employee ID"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className='text-white fw-bold'>Assignment Date</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                                    <input
                                        type="date"
                                        className="form-control"
                                        required
                                        placeholder=" Assignment Date"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className='text-white fw-bold'>Return Date</label>  <span style={{fontSize:20}} className='text-danger'>*</span>
                                    <input
                                        type="date"
                                        className="form-control"
                                        required
                                        placeholder=" Assignment Date"
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

export default AssetAssignment;