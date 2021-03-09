import React from 'react';

const Login = () => {
    return(
     <div style={{marginTop: "200px"}}>
         <div className="container">
             <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4">
                        <div className="card-body">
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" placeholder="Username" className="form-control" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" placeholder="Password" className="form-control" />
                            </div>

                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
             </div>
         </div>
     </div>
    )
}

export default Login