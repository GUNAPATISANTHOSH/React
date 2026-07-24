import React, { useState } from 'react'

const Reg = () => {
    const [user, setUser] = useState({ uname: '', mobile: '', email: '', tc: false, dob: '' })

    const updateHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const updateTC = (event) => {
        setUser({ ...user, tc: event.target.checked })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        alert(JSON.stringify(user))
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="card shadow border-0 rounded-4">
                        <div className="card-body p-4 p-md-5">
                            <h2 className="text-center mb-4 fw-bold">Registration</h2>
                            {/* <pre className="bg-light p-3 rounded small">{JSON.stringify(user, null, 2)}</pre> */}

                            <form onSubmit={submitHandler}>
                                <div className="mb-3">
                                    <label className="form-label">User Name</label>
                                    <input className="form-control" name="uname" type="text" onChange={updateHandler} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Mobile</label>
                                    <input className="form-control" name="mobile" type="text" onChange={updateHandler} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input className="form-control" name="email" type="email" onChange={updateHandler} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">DOB</label>
                                    <input className="form-control" name="dob" type="date" onChange={updateHandler} />
                                </div>

                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" onChange={updateTC} id="tc" />
                                    <label className="form-check-label" htmlFor="tc">
                                        Please Accept Terms & Conditions
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary w-100">
                                    Registration
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reg