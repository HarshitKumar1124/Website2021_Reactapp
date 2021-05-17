import React from 'react';

const ServiceSection = () => {
    return (
        <>
            <section className="services" id="Service">
                {/* <!-- style="border:1px solid black" --> */}

        <div className="container section-heading text-center">
                    {/* <!-- style="border:1px solid red" --> */}

            <h3>What Do We Offer</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, a!</p>

                </div>

                <div className="container progess-bar_&_side_description my-1">
                    {/* <!-- style="border:1px solid green" --> */}
            <div className="row progess-bar_&_side_description_row">
                        {/* <!-- style="border:1px solid rgb(0, 255, 242)" --> */}
                <div className="col-lg-6 col-md-10 col-12 various-progress-bar">
                            {/* <!-- style="border: 2px solid orange;" --> */}

                    <div className="single-progressbar">
                                <h6>HTML 5</h6>
                                <div className="progress">
                                    <div className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                                        style={{width:"90%"}}>90%</div>
                                </div>
                            </div>


                            <div className="single-progressbar">
                                <h6>CSS 3</h6>
                                <div className="progress">
                                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                                        style={{width:"70%"}}>70%</div>
                                </div>
                            </div>


                            <div className="single-progressbar ">
                                <h6>JAVASCRIPT</h6>
                                <div className="progress ">
                                    <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                                        style={{width:"80%"}}>80%</div>
                                </div>
                            </div>


                            <div className="single-progressbar">
                                <h6>BOOTSTRAP</h6>
                                <div className="progress ">
                                    <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                                        style={{width:"100%"}}>100%</div>
                                </div>
                            </div>


                            <div className="single-progressbar">
                                <h6>REACT JS</h6>
                                <div className="progress ">
                                    <div className="progress-bar  bg-primary progress-bar-striped progress-bar-animated"
                                        style={{width:"40%"}}>40%</div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-10 col-12 offset-1 offset-lg-0 side_description-content">
                            {/* <!-- style="border: 1px solid blue;" --> */}

                    <div className="container row side_description-content-innerdiv align-content-center">

                                <div className="row  my-2 justify-content-around">
                                    <div className="col-2 service-side-content-icons align-self-center">
                                        <i style={{fontSize:"30px"}} className="fas fa-wifi"></i>
                                    </div>
                                    <div className="col-9 m-0 p-0 service-side-content-description">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, earum?Lorem ipsum
                                    dolor sit amet.</p>
                                    </div>
                                </div>

                                <div className="row my-2 justify-content-around">
                                    <div className="col-2 service-side-content-icons align-self-center">
                                        <i style={{fontSize:"30px"}} className="fas fa-user-check"></i>
                                    </div>
                                    <div className="col-9 m-0 p-0 service-side-content-description">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, earum?Lorem ipsum
                                    dolor sit amet.</p>
                                    </div>
                                </div>

                                <div className="row my-2 justify-content-around">
                                    <div className="col-2 service-side-content-icons align-self-center">
                                        <i style={{fontSize:"30px"}} className="fas fa-graduation-cap"></i>
                                    </div>
                                    <div className="col-9 m-0 p-0 service-side-content-description">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, earum?Lorem ipsum
                                    dolor sit amet.</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default ServiceSection;
