import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import WelcomePage from './WelcomePage';

const AppRouter = () => {

    return (
        <Router>
            <div>
                <div className='app-router'>
                    <Link to='/'>Home</Link>

                </div>
            </div>

            <Switch>
                <Route exact path='/' component={WelcomePage}/>
                
            </Switch>
        </Router>
    )
}

export default AppRouter;