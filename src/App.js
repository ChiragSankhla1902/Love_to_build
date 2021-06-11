import React from 'react';
import "./App.css"
import {Switch,Route,Router} from "react-router-dom";
import Home from "./Home/Home";
import Joinus from "./Joinus/Joinus";
import About from "./About_us/About";
import Navbar1 from "./Component/Navbar1";
import Error from "./Error/Error";
import history from "./Component/History/History";
import Events from "./Events/Events";
import ScrollToTop from "./Component/ScrollToTop";
import Footer from "./Component/footer/Footer";

const App = () => {
  return (
    <div className="page-container">
      <Router history={history}>
      <ScrollToTop/>
      <div className="content-wrap">
      <Navbar1/>
      <Switch>
        <Route exact path={["/","/Home","/home"]} component={Home}/>
        <Route exact path={["/Joinus","/joinus"]} component={Joinus}/>
        <Route exact path={["/About","/Aboutus","/about","/aboutus"]} component={About}/>
        <Route exact path={["/Events","/Event"]} component={Events}/>
        <Route component={Error}/>
      </Switch>
      </div>
      <Footer/>
      </Router>
      </div>
  )
}

export default App;

