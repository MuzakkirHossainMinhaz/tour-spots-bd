import React from "react";
import styled from "styled-components";
import avatarImage1 from "../assets/avatarImage1.png";
import avatarImage3 from "../assets/avatarImage3.png";
import avatarImage2 from "../assets/avatarImage2.png";
export default function Testimonials() {
    return (
        <Section id="testimonials">
            <div className="title">
                <h2>Happy Customers</h2>
            </div>
            <div className="testimonials">
                <div className="testimonial">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                        asperiores eaque.
                    </p>
                    <div className="info">
                        <img src={avatarImage1} alt="" />
                        <div className="details">
                            <h4>Muzakkir Hossain Minhaz</h4>
                            <span>DEPT. - CSE; Batch - 8th</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                        asperiores eaque.
                    </p>
                    <div className="info">
                        <img src={avatarImage2} alt="" />
                        <div className="details">
                            <h4>Md. Shohan Khan</h4>
                            <span>DEPT. - CSE; Batch - 8th</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                        asperiores eaque.
                    </p>
                    <div className="info">
                        <img src={avatarImage3} alt="" />
                        <div className="details">
                            <h4>Yasir Arafat Prince</h4>
                            <span>DEPT. - CSE; Batch - 8th</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
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