import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';



const Header = () => {
    return (
        <>
            <div className="header-container " id="topheader">


                <Navbar/>

                <section className="header-section d-flex align-items-center justify-content-center" id="Header">
                    {/* <!-- style="border:1px solid red" --> */}
                    <div className="header-section-container">
                        {/* <!-- style="border:1px solid yellow" --> */}
                        <h1>My Second Project as Web Developer is here</h1>
                        <p>And I have created this responsive website</p>
                        <div className="header-content-button">
                            <Link to="/Login" style={{ letterSpacing: "0.1vw" }} >LOG-IN</Link>
                            {/* <a></a>  =Link*/}
                            <Link to="/Signup" style={{ letterSpacing: "0.1vw" }} >SIGN-UP</Link>
                        </div>
                    </div>
                </section>


            </div>
        </>
    )
}

export default Header;
