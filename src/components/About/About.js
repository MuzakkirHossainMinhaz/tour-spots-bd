import React from 'react';
import Footer from '../Footer/Footer';
import './About.css'

const About = () => {
    return (
        <div className='container'>
            <div className="about-us">
                <h1 className='fw-bold text-info'>About Us</h1>
                <div className="person">
                    <img src="https://i.ibb.co/PQQshp4/pic-1.png" alt="" />
                    <h3>Muzakkir Hossain Minhaz</h3>
                    <small>CEO and Founder</small>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nostrum unde, dolor quidem tempora, eos officiis, natus tempore quae enim maxime eum veniam ipsam sequi itaque quis id recusandae quas.</p>
                </div>
                <div className="persons">
                    <div className="person">
                        <img src="https://i.ibb.co/Ln9LRwc/pic-2.png" alt="" />
                        <h3>Md. Faisal Khan</h3>
                        <small>Team member</small>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nostrum unde, dolor quidem tempora, eos officiis, natus tempore quae enim maxime eum veniam ipsam sequi itaque quis id recusandae quas.</p>
                    </div>
                    <div className="person">
                        <img src="https://i.ibb.co/SXdzyK1/pic-3.png" alt="" />
                        <h3>Yasir Arafat Prince</h3>
                        <small>Tem member</small>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nostrum unde, dolor quidem tempora, eos officiis, natus tempore quae enim maxime eum veniam ipsam sequi itaque quis id recusandae quas.</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;