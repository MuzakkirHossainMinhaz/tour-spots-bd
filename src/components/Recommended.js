import styled from "styled-components";
import Destination1 from "../assets/Destination1.jpg";
import Destination2 from "../assets/Destination2.jpg";
import Destination3 from "../assets/Destination3.jpg";
import Destination4 from "../assets/Destination4.jpg";
import Destination5 from "../assets/Destination5.jpg";
import Destination6 from "../assets/Destination6.jpg";
/* import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png"; */

export default function Recommend() {
  const data = [
    {
      id: 1,
      image: Destination1,
      title: "Saint Martin",
      subTitle: "St. Martin's Island (Bengali: সেন্ট মার্টিন্স দ্বীপ) is a small island (area only 3 km2) in the northeastern part of the Bay of Bengal, about 9 km south of the tip of the Cox's Bazar-Teknaf peninsula, and forming the southernmost part of Bangladesh.",
      // cost: "38,800",
      // duration: "Approx 2 night trip",
    },
    {
      id: 2,
      image: Destination2,
      title: "Hardinge Bridge",
      subTitle: "Hardinge Bridge (Bengali: হার্ডিঞ্জ ব্রিজ) is a steel railway truss bridge over the Padma River located at Ishwardi, Pabna and Bheramara, and Kushtia in Bangladesh.",
    },
    {
      id: 3,
      image: Destination3,
      title: "Sajek Valley",
      subTitle: "Sajek Tripuri Valley is one of the most popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District.",
    },
    {
      id: 4,
      image: Destination4,
      title: "Sixty Dome Mosque",
      subTitle: "The Sixty Dome Mosque (Bengali: ষাট গম্বুজ মসজিদ Shaṭ Gombuj Moshjid; more commonly known as Shait Gambuj Mosque or Saith Gunbad Masjid), is a mosque in Bagerhat, Bangladesh.",
    },
    {
      id: 5,
      image: Destination5,
      title: "Cox's Bazar",
      subTitle: "Cox's Bazar (Bengali: কক্সবাজার) is a city, fishing port, tourism centre, and district headquarters in southeastern Bangladesh.",
    },
    {
      id: 6,
      image: Destination6,
      title: "Sundarban",
      subTitle: "Sundarbans is a mangrove area in the delta formed by the confluence of the Padma, Brahmaputra and Meghna Rivers in the Bay of Bengal.",
    },
  ];

  /* const packages = [
      "The Weekend Break",
      "The Package Holiday",
      "The Group Tour",
      "Long Term Slow Travel",
  ]; */

  // const [active, setActive] = useState(1);
  return (
    <Section id="recommend" className="container">
      <div className="title">
        <h2 className="fw-bold text-primary">RECOMMENDED SPOTS</h2>
      </div>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination" key={destination.id}>
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 1.5rem 0;
  .title {
    text-align: center;
    font-size: 25px;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 1.5rem;
    padding: 0 1.5rem;
    .destination {
      text-align: center;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;