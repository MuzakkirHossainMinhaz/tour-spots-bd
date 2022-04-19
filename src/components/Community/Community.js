import React from 'react';
import './Community.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Article from './Article/Article';

const Community = () => {
    return (
        <div className='container'>
            <Routes>
                <Route path='/' element={<Home></Home>} />
                <Route path='/blog/:id' element={<Article></Article>} />
            </Routes>
        </div>
    );
};

export default Community;