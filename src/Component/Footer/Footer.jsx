import React from 'react'

const Footer = () => {

    var year = new Date().getFullYear();


    window.onscroll = function () { display_arrow() };

    function display_arrow() {
        if ((document.documentElement.scrollTop > 200)||(document.body.scrollTop>200)) {
            document.getElementById("arrowupbutton").style.display = "block";
        }
        else {
            document.getElementById("arrowupbutton").style.display = "none";
        }

        if((document.documentElement.scrollTop>=1950)||(document.body.scrollTop>=1950)){document.getElementById("arrowupbutton").style.color="white";}
        else{document.getElementById("arrowupbutton").style.color="black";}
    }

    const moveup = () => {
      
     document.body.scrollTo(0,0);
     document.documentElement.scrollTo(0,0);

    }
    return (
        <>
            <footer className="footersection my-5">
                <div className="container">
                    <div className="row my-5">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="footercolumn1content p-3">
                                <h5>About This Website</h5>
                                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum officiis recusandae pariatur distinctio sapiente quos blanditiis eos aut nihil fuga.</span>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12 text-center">
                            <div className="footercolumn1content">
                                <h5>Navigation Link</h5>
                                <ul>
                                    <li> <i className="fas fa-home" style={{ margin: "20px" }}></i> <a style={{ textDecoration: "none" }} href="#Header" >Home</a></li>
                                    <li><i className="fab fa-servicestack" style={{ margin: "20px" }}></i><a style={{ textDecoration: "none" }} href="#Service" > Service</a></li>
                                    <li> <i className="fas fa-address-card" style={{ margin: "20px" }}></i><a style={{ textDecoration: "none" }} href="#About" > About</a></li>
                                    <li><i className="fas fa-info-circle" style={{ margin: "20px" }}></i><a style={{ textDecoration: "none" }} href="#KnowMore" > Know_More</a></li>
                                </ul>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12 ">
                            <div className="footercolumn1content p-3">
                                <h5>Social Media Links</h5>
                                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum officiis recusandae pariatur distinctio sapiente quos blanditiis eos aut nihil fuga.</span>
                            </div>
                            <div className="footercolumn1content p-3 my-3">
                                <h5><i className="fas fa-envelope" style={{ backgroundColor: "red", padding: "5px", borderRadius: "3px" }}></i> to <code>Harshit Kumar</code> on:</h5>
                                <a href="mailto:Harshitdreams8a@gmail.com" title="mail to Harshit" style={{ textDecoration: "none" }}>Click Here to mail !!</a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5 text-center">

                        <p>Copyright <i className="far fa-copyright"></i> <span id="copyright_year">{year}</span> All rights reserved | This practise template is made by HarryKnocker or Harshit Kumar</p>

                    </div>
                </div>

                <div className=" btn sidearrow" id="arrowupbutton" onClick={moveup}>

                    <i className="fas fa-arrow-up" ></i>

                </div>
            </footer>
        </>
    )
}

export default Footer;
