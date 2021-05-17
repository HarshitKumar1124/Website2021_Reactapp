import React from 'react';
import swal from 'sweetalert';

const Login = () => {
    return (
        <>
            {swal({
                title:"OOPs!",
                text:"Sorry! Page is under Maintenance",
                icon:"error",
                
            }),function()
               {
                window.location.href="/";
               }
            }
        </>
    )
}

export default Login;