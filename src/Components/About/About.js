import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
//import Services from './pages/Services/Services';
//import Products from './pages/Products/Products';
//import SignUp from './pages/SignUp/SignUp';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
//import { Navbar, Footer } from './components';

function About() {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Home />
    </>
  );
}

export default About;
