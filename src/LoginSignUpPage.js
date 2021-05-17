import React from 'react';
import {Link, Route,Switch} from 'react-router-dom';
import Login from './Component/LoginSignUp/Login.jsx';
import Signup from './Component/LoginSignUp/SignUp.jsx';


const LoginSignUpPage = () => {
    return (
        <>
             
            <div className="container-fluid p-0 m-0" >
                <div className="row m-0 p-0 loginsignupPort justify-content-center align-content-center">
                    <div className="col-lg-8 col-md-10 col-12 m-0 p-2 Loginportdimension">
                        <div className="signupORloginButton row p-o m-0 justify-content-end ">
                            <Link tag="a" title="Go Back To Home-Page" to="/" exact className="col-lg-3 heading col-md-4 col-5 p-1 text-center mr-auto font-weight-bold ">HarryKnocker: LOGIN </Link>
                            <Link tag="a" to="/signup" exact className="col-lg-3 heading col-md-4 col-5 p-1 text-center">SIGN-UP</Link>
                            <Link tag="a" to="/Login" exact className="col-lg-3 heading col-md-4 col-5 p-1 text-center">LOG-IN</Link>
                        </div>
                        <div className="displayarea p-0 m-0 my-3 row">

                           <Switch>
                                <Route exact path="/Signup" component={Signup}/>
                                <Route exact path="/Login" component={Login}/>
                           </Switch>

                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default LoginSignUpPage;
