
import React,{useState} from 'react';
import swal from 'sweetalert';


const SignUp = () => {

    const[UserDataBase,setUserDataBase]=useState([]);

    


    const [User,SetUser]=useState({
        Name:"",
        Email:"",
        Password:"",
        confirmPassword:""
    });


    function Trackdata(e)
    {
       var propname=e.target.name;
       var propvalue=e.target.value;
      
 
       SetUser({...User,[propname]:propvalue});

      

    }

    function Handlesubmit(e)
    { 
        
        e.preventDefault();
        var NewUser={...User,id:new Date().toLocaleTimeString()};
        setUserDataBase([...UserDataBase,NewUser]);
        SetUser({
            Name:"",
            Email:"",
            Password:"",
            confirmPassword:""
        })

        
        
        swal({
            title: `Welcome ${NewUser.Name}`,
            text: "Thankyou! For your Co-operation. Have a nice day ",
            icon: "success",
            button: "Okay",
          });
    }


    return (
    <>
         
        <div className="container py-2">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
                    <form action="/" onSubmit={Handlesubmit} className="needs-validation">
                        <div className="form-group " >
                            <label htmlFor="Name">Name:</label>
                            <input type="text" autoFocus className="form-control" placeholder="Full Name" id="Name" name="Name" value={User.Name} onChange={Trackdata} required/>
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address:</label>
                            <input type="email"  className="form-control" placeholder="Example@gmail.com" id="email" value={User.Email} onChange={Trackdata} name="Email" required/>
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Password">Password:</label>
                            <input type="Password"  className="form-control" id="Password" placeholder="Create Password" value={User.Password} name="Password" onChange={Trackdata} required/>
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Password">Confirm Password:</label>
                            <input type="Password"  className="form-control" id="Password" placeholder="Confirm Password" value={User.confirmPassword} name="confirmPassword" onChange={Trackdata} required/>
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-lg-2 col-md-3 my-2 col-5"><button type="submit" className="btn btn-primary">Submit</button></div>
                            
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </>
    )
}

export default SignUp;
