let Grid=()=>{
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 ">
                    <div className="card">
                        <div className="card-body">
                            <h1>React</h1>
                            <p>Learn</p>
                            <button className="btn btn-primary">Read</button>
                        </div>

                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h1>Python</h1>
                            <p>Learn</p>
                            <button className="btn btn-primary">Read</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h1>java</h1>
                            <p>Learn</p>
                            <button className="btn btn-primary">Read</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Grid;
