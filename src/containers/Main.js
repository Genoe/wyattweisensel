import React from 'react';
import {Switch, Route } from 'react-router-dom';
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
