
import React from 'react';
import {ToastContainer} from "react-toastify";



const ThreeDiv = () => {



    return (
        <>

        <ToastContainer/>
            <div className="three_extra-header-div" id="About">

                <div className="container-fluid my-4">
                    {/* <!-- style="border:2px solid greenyellow" --> */}
                    <div className="row m-5">
                        {/* <!-- style="border:2px solid red" --> */}
                        <div className="col-12 col-md-4 my-3 three-extradiv-block text-center">
                            {/* <!-- style="border:1px solid black" --> */}
                            <a href="/"><i style={{fontSize:"40px"}} className="fas fa-desktop"></i></a>
                            <h5>Desktop Feed</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quod accusantium quas amet
                aliquid esse adipisci deleniti. Incidunt, voluptatibus sunt.</p>
                        </div>
                        <div className="col-12 col-md-4 my-3 three-extradiv-block text-center">
                            {/* <!-- style="border:1px solid black" --> */}
                            <a href="/"><i style={{fontSize:"40px"}} className="fas fa-book"></i></a>
                            <h5>News Feed</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quod accusantium quas amet
                aliquid esse adipisci deleniti. Incidunt, voluptatibus sunt.</p>
                        </div>
                        <div className="col-12 col-md-4 my-3 three-extradiv-block text-center">
                            {/* <!-- style="border:1px solid black" --> */}
                            <a href="/"><i style={{fontSize:"40px"}} className="fas fa-microchip"></i></a>
                            <h5>Technology Feed</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quod accusantium quas amet
                aliquid esse adipisci deleniti. Incidunt, voluptatibus sunt.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ThreeDiv;

