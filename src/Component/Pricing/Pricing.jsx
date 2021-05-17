import React from 'react';
import swal from 'sweetalert';

const Pricing = () => {

    function PurchaseMessage(){

        swal({
            title:" OOPs! ",
            text:"Sorry! Page is under Maintenance",
            icon: "error",
            button: "Okay"
        })

    }
    return (
        <>
            <section className="Pricing-section" id="KnowMore">

                <div className="container section-heading text-center">
                    {/* <!-- style="border:1px solid red" --> */}

                    <h4 style={{ textTransform: "capitalize", color: "white", fontWeight: "bold" }}>Our Pricing</h4>
                    <p style={{ color: "white", letterSpacing: "5px" }}>Value Variety & Varsetility</p>

                </div>

                <div className="container">
                    <div className="row all_three_card-container">
                        <div className="col-lg-4 col-md-10 col-12 text-center ">
                            <div className="card">
                                <div className="card-header font-weight-bold">BASIC</div>
                                <div className="card-body ">
                                    <li>&#x20B9; <span>40</span>/Website</li>Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Repellat magni quisquam mollitia minima numquam perferendis quas earum? Veritatis
                    autem ut ipsa qui! Assumenda veritatis dolorem dolorum eos, dicta pariatur laudantium?
                </div>
                                <div className="card-footer-button">
                                    <button style={{ letterSpacing: "0.1vw" }}  onClick={PurchaseMessage}>PURCHASE</button>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-10 col-12 text-center ">
                            <div className="card">
                                <div className="card-header font-weight-bold">STANDARD</div>
                                <div className="card-body ">
                                    <li>&#x20B9; <span>60</span>/Website</li>Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Repellat magni quisquam mollitia minima numquam perferendis quas earum? Veritatis
                    autem ut ipsa qui! Assumenda veritatis dolorem dolorum eos, dicta pariatur laudantium?
                </div>
                                <div className="card-footer-button">
                                    <button style={{ letterSpacing: "0.1vw" }} onClick={PurchaseMessage}>PURCHASE</button>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-10 col-12 text-center ">
                            <div className="card">
                                <div className="card-header font-weight-bold">UNLIMITED</div>
                                <div className="card-body ">
                                    <li>&#x20B9; <span>80</span>/Website</li>Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Repellat magni quisquam mollitia minima numquam perferendis quas earum? Veritatis
                    autem ut ipsa qui! Assumenda veritatis dolorem dolorum eos, dicta pariatur laudantium?
                </div>
                                <div className="card-footer-button">
                                    <button  style={{ letterSpacing: "0.1vw" }}  onClick={PurchaseMessage}>PURCHASE</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Pricing;
