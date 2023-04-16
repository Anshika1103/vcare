import React  from 'react';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Contact from './components/Contact'
import Services from './components/Services'
export default function InfoApp(){
    return(
        <>
        <NavBar/>
        <Router>
            <Routes>
                <Route exact path="/" Component={Home}/>
                <Route exact path="/login" Component={SignIn}/>
                <Route exact path="/signup" Component={SignUp}/>
                <Route exact path="/contacts" Component={Contact}/>
                <Route exact path="/services" Component={Services}/>
                <Route Component={Home}/>
            </Routes>
        </Router>
        <Footer/>
        </>
    );
}