import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Banner from './components/Banner';
import BotService1 from './components/Botservice1';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
    return ( 
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path='/' exact component={Home}/>  
                    <Route path='/bot-service' exact component={BotService1}/>
                </Switch>
            </Router>
        </>
     );
}
 
export default App;