import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { auth } from '../firebase.init'
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }

  const handleSignIn = () => {
    navigate('/login')
  }

  return (
    <>
      <Nav className="container mt-3">
        <div className="brand">
          <a
            href="/home"
            className="container1 rounded-3 btn btn-light">
            <img src={logo} alt="" />
            TourSpotsBD
          </a>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
        </div>

        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/places">Places</a>
          </li>
          <li>
            <a href="/community">Community</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>

        {
          user ?
            <div className="text-end">
              <button className="border-0 text-white" onClick={handleSignOut}>SignOut</button>
              <p className="mb-0">Signed in as <span className="text-success font-monospace">{user.email}</span></p>
            </div>
            :
            <button onClick={handleSignIn}>Signin</button>
        }

      </Nav>

      <ResponsiveNav state={navbarState}>
        <ul>
          <li>
            <a href="/home" onClick={() => setNavbarState(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="/places" onClick={() => setNavbarState(false)}>
              Places
            </a>
          </li>
          <li>
            <a href="/community" onClick={() => setNavbarState(false)}>
              Community
            </a>
          </li>
          <li>
            <a href="/about" onClick={() => setNavbarState(false)}>
              About
            </a>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    .container1 {
      margin-left: 3px;
      color: brown;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.5rem;
      font-weight: 900;
      text-transform: uppercase;
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
    gap: 1rem;
    margin-bottom: 0;
    align-items: center;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
  .profile{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .profile img{
    width: 10%;
    border-radius: 50%;
  }
  .profile p{
    font-size: 20px;
    margin-left: 8px;
    margin-right: 8px;
  }
  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 0.3rem;
    border: none;
    color: white;
    background-color: #48cae4;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #023e8a;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
      }
    }
    ul {
      display: none;
    }
    button {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  top: ${({ state }) => (state ? "50px" : "-400px")};
  background-color: white;
  height: 30vh;
  width: 100%;
  align-items: center;
  transition: 0.3s ease-in-out;
  ul {
    list-style-type: none;
    width: 100%;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;

      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
`;