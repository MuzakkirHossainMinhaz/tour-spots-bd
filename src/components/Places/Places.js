import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Place from './Place/Place';

const Places = () => {
    return (
        <div className='container my-5'>
            <Routes>
                <Route path='/' element={<Home></Home>} />
                <Route path='/place/:id' element={<Place></Place>} />
            </Routes>
        </div>
    );
};

export default Places;