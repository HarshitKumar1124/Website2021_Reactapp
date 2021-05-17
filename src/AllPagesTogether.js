import React from 'react';
import FirstUIPage from './FirstUIPage.js';
import { Route,Switch } from 'react-router-dom';
import LoginSignUpPage from './LoginSignUpPage.js';


const AllPagesTogether = () => {
    return (
        <>
            {/* <Route>

              Switch

            </Route> */}

            <Switch>
                    
                    <Route exact path="/" component={FirstUIPage} />
                    <Route  path="/" component={LoginSignUpPage} />
            </Switch>

        </>
    )
}

export default AllPagesTogether;
