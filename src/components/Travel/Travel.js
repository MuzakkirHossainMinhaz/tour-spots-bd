import React from 'react';
import Footer from '../Footer/Footer';
import service5 from "../../assets/service5.png";

const Travel = () => {
    return (
        <div>
            <div className='container d-flex flex-column align-items-center justify-content-center' style={{height: "100vh"}}>
                <img className='w-25 mb-4' src={service5} alt="" />
                <h1><b className='text-info'>Travel: </b>We'll connecting with other <em className='text-muted'>travel agency</em>...!</h1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Travel;