import React from 'react';
import Footer from '../Footer/Footer';
import service6 from "../../assets/service6.png";

const Hotel = () => {
    return (
        <div>
            <div className='container d-flex flex-column align-items-center justify-content-center' style={{ height: "100vh" }}>
                <img className='w-25 mb-4' src={service6} alt="" />
                <h1><b className='text-info'>Hotel: </b>We'll connecting with other <em className='text-muted'>hotel agency</em>...!</h1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Hotel;