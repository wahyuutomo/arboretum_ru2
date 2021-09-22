import * as React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Dashboard from '../views/Dashboard/Dashboard';
import Arboretum from '../views/Arboretum/Arboretum';
import MangroveJambi from '../views/MangroveJambi/MangroveJambi';
import MangroveTanjungLeban from '../views/MangroveTanjungLeban/MangroveTanjungLeban';
import Poligowo from '../views/Poligowo/Poligowo';

const AppRoutes = () => {
    return (
        <Switch>
        	<Route path="/home" component={Dashboard} />
        	<Route path="/arboretum" component={Arboretum} />
        	<Route path="/mangrove-pangkalan-jambi" component={MangroveJambi} />
        	<Route path="/mangrove-tanjung-leban" component={MangroveTanjungLeban} />
        	<Route path="/poligowo" component={Poligowo} />
            <Redirect exact from="/" to="home" />
        </Switch>
    );
}

export default AppRoutes;