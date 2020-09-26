import * as React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Dashboard from '../views/Dashboard/Dashboard';

const AppRoutes = () => {
    return (
        <Switch>
        	<Route path="/home" component={Dashboard} />
            <Redirect exact from="/" to="home" />
        </Switch>
    );
}

export default AppRoutes;