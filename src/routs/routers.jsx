import React from 'react';
import {Route, Switch} from "react-router-dom"
import Home from "../pages/home"
import Error404 from "../pages/error404"
 const RoutesUrl = ()=>{
    return(
        <Switch>
        <Route exact path=  "/" component={Home} />
        {/* <Route path="/page2/:name" component={Page2} /> */}
        <Route component={Error404}/>
      </Switch>
    )
}
export default RoutesUrl