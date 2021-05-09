import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar/NavBar';
import HomePage from './HomePage/HomePage';
import Signup from './Signup/Signup';
import Login from './Login/Login';

const App = () => {
    return (
        <>
            <Router>
                <NavBar/>
                <Route path="/" exact component={HomePage}/>
                <Route path="/signup"  component={Signup}/>
                <Route path="/login"  component={Login}/>
            </Router>
        </>
    )
}

export default App;
