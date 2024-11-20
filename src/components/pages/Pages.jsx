import React from 'react';
import Header from '../common/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../home/Home';
import Footer from '../common/footer/Footer';
import About from '../about/About';
import Services from '../services/Services';
import Blog from '../blog/Blog';
import CreateEstate from '../common/estate/CreateEstate';
import PrivateRoute from '../common/route-config/PrivateRoute';

function Pages() {
  return (
    <>
    <Router>
    <Header />
    <Routes>
      <Route path = '/' element={<Home />}/>
      <Route path = '/about' element={<About />}/>
      <Route path = '/services' element={<Services />}/>
      <Route path = '/blog' element={<Blog />}/>
      <Route
          path="/create-estate"
          element={<PrivateRoute element={CreateEstate} />}
        />
    </Routes>
    <Footer />
    </Router>
    </>
  )
}

export default Pages