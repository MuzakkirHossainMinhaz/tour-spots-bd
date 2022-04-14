import './App.css';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScroolToTop';
import scrollreveal from "scrollreveal";
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Places from './components/Places/Places';

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
      </Routes>
    </div>
  );
}