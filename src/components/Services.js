import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import service5 from "../assets/service5.png";
import service6 from "../assets/service6.png";

export default function Services() {
  const data = [
    {
      id: 1,
      icon: service1,
      title: "Find Tour Spots",
      subTitle:
        "You can search any tour spots by a single click, which are sorted by district-wise, within Bangladesh.",
    },
    {
      id: 2,
      icon: service2,
      title: "Information",
      subTitle:
        "You can get details about the spots. Find location by clicking GoogleMap icon.",
    },
    {
      id: 3,
      icon: service3,
      title: "Community",
      subTitle:
        "You can write your opinion about any places or travel experience in our community (blog) section.",
    },
    {
      id: 4,
      icon: service4,
      title: "Comment",
      subTitle:
        "You can comment about a particular place in the below of their details information.",
    },
    {
      id: 5,
      icon: service5,
      title: "Travel Agency",
      subTitle:
        "Yes, you can contact travel agency to go your tour spots by using our website.",
    },
    {
      id: 6,
      icon: service6,
      title: "Hotel Agency",
      subTitle:
        "You can contact with hotel agency to the nearest of your tour spots by using our website.",
    },
  ];
  return (
    <div  id="services" className="container my-5">
      <h2 className="text-center fw-bold text-primary">OUR SERVICES</h2>
      <Section>
        {data.map((service, index) => {
          return (
            <div className="service" key={service.id}>
              <div className="icon">
                <img src={service.icon} alt="" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.subTitle}</p>
            </div>
          );
        })}
      </Section>
    </div>
  );
}

const Section = styled.section`
  padding: 1.5rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 2.4rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;