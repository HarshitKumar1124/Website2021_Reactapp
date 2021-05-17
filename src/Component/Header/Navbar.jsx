import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg my-2 fixed-top">
                <a className="navbar-brand mx-2" href="/">HarryKnocker</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" title="Home" href="#Header">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" title="About" href="#About">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" title="Contact" href="#Service">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" title="Know_More" href="#KnowMore">Know_More</a>
                        </li>

                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Navbar;
