import React from 'react';
import './Partnar.css'
import styled from "styled-components";
import service5 from "../../assets/service5.png";
import service6 from "../../assets/service6.png";
import { useNavigate } from 'react-router-dom';

const Partnar = () => {
    const navigate = useNavigate();

    const handleHotel = () => {
        navigate('/hotel');
    }
    
    const handleTravel = () => {
        navigate('/travel');
    }
    
    return (
        <Section id="testimonials" className="container d-block mx-auto">
            <div className="title">
                <h2 className="fw-bold text-primary">OUR PARTNER</h2>
            </div>
            <div className="testimonials">
                <div className="testimonial" onClick={handleTravel}>
                    <div className="info">
                        <div className="details">
                            <div className="icon">
                                <img src={service5} alt="" />
                            </div>
                            <h5>Travel Agency</h5>
                        </div>
                    </div>
                    <p>Yes, you can contact travel agency to go your tour spots by using our website. Yes, you can contact travel agency to go your tour spots by using our website.</p>
                </div>
                <div className="testimonial" onClick={handleHotel}>
                    <div className="info">
                        <div className="details">
                            <div className="icon">
                                <img src={service6} alt="" />
                            </div>
                            <h5>Hotel Agency</h5>
                        </div>
                    </div>
                    <p>You can contact with hotel agency to the nearest of your tour spots by using our website. You can contact with hotel agency to the nearest ...</p>
                </div>
            </div>
        </Section>
    );
};

const Section = styled.section`
  margin: 3rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    .testimonial {
        display: grid;
        grid-template-columns: 1fr 2.5fr;
        gap: 1rem;
        cursor: pointer;
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      p{
          margin-bottom: 0;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        img {
          border-radius: 3rem;
          height: 2.5rem;
        }
        .details {
          margin-top: 0;
          h5{
            margin: 0 auto;
          }
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;

export default Partnar;