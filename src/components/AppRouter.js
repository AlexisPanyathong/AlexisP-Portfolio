import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import AboutPage from './AboutPage';

// Styled Components
import { Nav } from './StyledWidgets';

const AppRouter = () => {

    return (
        <Router>
            <Nav>
                <div className='app-router'>
                    {/* <Link to='/'>Home</Link> */}
                    {/* <Link to='/aboutpage'>About</Link> */}
                </div>
            </Nav>

            <Switch>
                <Route exact path='/' component={WelcomePage} />
                {/* <Route path='/aboutpage' component={AboutPage} /> */}
            </Switch>
        </Router>
    )
}

export default AppRouter;