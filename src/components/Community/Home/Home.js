import React from 'react';
import AddArticle from '../AddArticle/AddArticle';
import Articles from '../Articles/Articles';

const Home = () => {
    return (
        <div className='community'>
            <div className="parent">
                <div>
                    <Articles></Articles>
                </div>
                <div>
                    <AddArticle></AddArticle>
                </div>
            </div>
        </div>
    );
};

export default Home;