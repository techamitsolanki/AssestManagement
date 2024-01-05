import React from 'react'

const CountryTB = () => {
    return (
        <div className='parent'>
            <div className='child my-5 shadow rounded p-2'>
                <h1 className='text-center text-white fw-bold'>Country</h1>
                <div className='p-4'>
                    <form>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label className='text-white fw-bold'>Country ID</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Country ID"
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label className='text-white fw-bold'>Country Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Country Name"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="my-2">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CountryTB;