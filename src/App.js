import React from 'react';
import { Routes,BrowserRouter as Router, Route } from 'react-router-dom';

import { Footer, Blog, Possibility, Features, Whatsbc, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';


const App = () => (
  <Router>
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
    </div>
    <Routes>
     <Route  path='/' element={<Header/>}> </Route>
     <Route  path='/about' element={<Whatsbc/>}> </Route>
     <Route  path='/clients' element={<Features/>}> </Route>
     <Route  path='/team' element={<Blog/>}> </Route>
     <Route  path='/careers' element={<Possibility/>}> </Route>
    </Routes>
    <Footer />
  </div>
  </Router>
);

export default App;
