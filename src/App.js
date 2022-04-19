import './App.css';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScroolToTop';
import scrollreveal from "scrollreveal";
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Places from './components/Places/Places';
import Community from './components/Community/Community';
import About from './components/About/About';
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'
import Features from './components/Features';
import Hotel from './components/Hotel/Hotel';
import Travel from './components/Travel/Travel';

export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/places/*' element={<Places></Places>}></Route>
        <Route path='/community/*' element={<Community></Community>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/logout' element={<Logout></Logout>}></Route>
        <Route path='/features' element={<Features></Features>}></Route>
        <Route path='/register' element={<Logout></Logout>}></Route>
        <Route path='/hotel' element={<Hotel></Hotel>}></Route>
        <Route path='/travel' element={<Travel></Travel>}></Route>
      </Routes>
    </div>
  );
}