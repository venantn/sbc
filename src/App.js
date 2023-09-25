import React from 'react';
import { Routes,BrowserRouter as Router, Route } from 'react-router-dom';

import { Footer, Blog, Possibility, Features, Whatsbc, Header, Calendar } from './containers';
import { CTA, Brand, Navbar, Slide, Dlcalendar } from './components';

import './App.css';
import MyCalendar from './containers/calendar/Calendar';


const App = () => (
  <Router>
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
    </div>
    <Routes>
     <Route  path='/' element={<><Header/></>}> </Route>
     <Route  path='/about' element={<><Whatsbc/><Dlcalendar/></>}> </Route>
     <Route  path='/clients' element={<Features/>}> </Route>
     <Route  path='/team' element={<Blog/>}> </Route>
     <Route  path='/calendar' element={<MyCalendar/>}> </Route>
     <Route  path='/careers' element={<Possibility/>}> </Route>
    </Routes>
    <Brand/>
    <Footer />
  </div>
  </Router>
);

export default App;
