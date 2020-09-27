import * as React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Dashboard from '../views/Dashboard/Dashboard';
import Arboretum from '../views/Arboretum/Arboretum';

const AppRoutes = () => {
    return (
        <Switch>
        	<Route path="/home" component={Dashboard} />
        	<Route path="/arboretum" component={Arboretum} />
            <Redirect exact from="/" to="home" />
        </Switch>
    );
}

export default AppRoutes;