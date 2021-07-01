import React, { useState } from 'react';
import {Switch,Route} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './Components/ProductList';
import About from './Components/About/About';
import Explore from './Components/Explore';
import Footer from './Components/Footer';



//import About from './Components/About';

import Navbar from "./Components/Navbar";
import SideDrawer from "./Components/SideDrawer";
import Backdrop from "./Components/Backdrop";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <React.Fragment>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route exact path="/about" component={About}/>
      </Switch>
      <Explore/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;