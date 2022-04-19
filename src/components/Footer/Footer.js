import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer section container px-5 pb-4 mb-5">
            <div className="footer__container container grid">
                <div className="footer__content grid">
                    <div className="footer__data">
                        <h3 className="footer__title">TourSpotBD</h3>
                        <p className="footer__description"> Choose your Favorite <br /> place, and we offer you the <br /> all details information.</p>
                            <div>
                                <a href="https://www.facebook.com/" className="footer__social">
                                    <i className="ri-facebook-box-fill"></i>
                                </a>
                                <a href="https://twitter.com/" className="footer__social">
                                    <i className="ri-twitter-fill"></i>
                                </a>
                                <a href="https://www.instagram.com/" className="footer__social">
                                    <i className="ri-instagram-fill"></i>
                                </a>
                                <a href="https://www.youtube.com/" className="footer__social">
                                    <i className="ri-youtube-fill"></i>
                                </a>
                            </div>
                    </div>

                    <div className="footer__data">
                        <h3 className="footer__subtitle">About</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="/about" className="footer__link">About Us</a>
                            </li>
                            <li className="footer__item">
                                <a href="/features" className="footer__link">Features</a>
                            </li>
                            <li className="footer__item">
                                <a href="/community" className="footer__link">Community & Blog</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__data">
                        <h3 className="footer__subtitle">Company</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="" className="footer__link">Team</a>
                            </li>
                            <li className="footer__item">
                                <a href="/register" className="footer__link">Become a member</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Our Partner</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__data">
                        <h3 className="footer__subtitle">Support</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="" className="footer__link">FAQs</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Support Center</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__rights">
                    <p className="footer__copy">&#169; 2022 TourSpotBD. All rigths reserved.</p>
                    <div className="footer__terms">
                        <a href="#" className="footer__terms-link">Terms & Agreements</a>
                        <a href="#" className="footer__terms-link">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;