import React from 'react';
import './Home.css'
import AddArticle from '../AddArticle/AddArticle';
import Articles from '../Articles/Articles';

const Home = () => {
    return (
        <div className="container d-flex parent-community-home justify-content-between">
            <div className='col-12 col-md-8 mt-4'>
                <Articles></Articles>
            </div>
            <div className='col-12 col-md-4 mt-4'>
                <AddArticle></AddArticle>
            </div>
        </div>
    );
};

export default Home;