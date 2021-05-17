import React,{useState}from 'react';

const Statistic = () => {

    const [date,setdate]=useState("");
    const [ctime,settime]=useState("");

    setInterval(() => {
        var dateobj=new Date();
        var datestring=dateobj.toLocaleDateString();
        var slash = /[/]/g;
        datestring = datestring.replace(slash, "-");
        setdate(datestring);
        settime(dateobj.toLocaleTimeString());
        
    }, 1000);


    return (
        <>
            <section className="Stats">

                <div className="container section-heading text-center">
                    {/* <!-- style="border:1px solid red" --> */}

                    <h4>Our Statistics</h4>
                    <p>With display of current time and date</p>

                </div>

                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col m-2 stat-block text-center">
                            <h4 className="counter">1240</h4>
                            <p>Total No. of Projects Done</p>

                        </div>
                        <div className="col m-2 stat-block text-center">
                            <h4 className="counter">1241</h4>
                            <p>Currently Working On Project No.</p>

                        </div>
                        <div className="col m-2 stat-block text-center">
                            <h4 id="CurrentTime">{ctime}</h4>
                            <p> <i className="far fa-clock" style={{ color: "dodgerblue" }}>&nbsp;</i>Currently Time is:</p>

                        </div>
                        <div className="col m-2 stat-block text-center">
                            <h4 id="CurrentDate">{date}</h4>
                            <p><i className="fas fa-calendar-alt" style={{ color: "dodgerblue" }}></i> Today's Date is: </p>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Statistic;
