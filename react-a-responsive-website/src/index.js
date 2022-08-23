import React from 'react';
import ReactDOM from 'react-dom/client';
import 'font-awesome/css/font-awesome.min.css'; 
import './routes/styles.css';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import Home from './routes/Home';
  import TeckStack from "./routes/TechStack";
  import AboutMe from "./routes/AboutMe";
  import ContactMe from "./routes/ContactMe";
  import Navbar from './components/Navbar';
  import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="TeckStack" element={<TeckStack />} />
            <Route path="AboutMe" element={<AboutMe />} />
            <Route path="ContactMe" element={<ContactMe />} />
        </Routes>
        <Footer/>
  </BrowserRouter>
 
);


