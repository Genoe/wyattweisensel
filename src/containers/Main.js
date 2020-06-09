import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import Homepage from '../components/Homepage';

export default function Main() {
    return (
       <div className="container">
           <Switch>
               <Route exact patch='/'>
                    <Homepage />
               </Route>
           </Switch>
       </div>
    );
}
