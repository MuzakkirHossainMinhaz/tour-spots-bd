import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app from '../firebase.init'

const auth = getAuth(app);

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);

  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({});

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error('error', error);
      });
  }

  const handleGoogleSignOut = () => {
    signOut(auth)
    .then( () => {
      setUser({});
    })
    .catch((error) => {
      alert("Error Found..!");
    })
  }

  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
            <img src={logo} alt="" />
            TourSpotsBD
          </div>
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
            <a href="/community">Community</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
        <div className="profile">
          <img src={user.photoURL} alt="" />
          <p>{user.displayName}</p>
        </div>
        {
          !user.uid ?
          <button onClick={handleGoogleSignIn}>Sign in</button> :
          <button onClick={handleGoogleSignOut}>Sign out</button>
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
            <a href="/about" onClick={() => setNavbarState(false)}>
              About
            </a>
          </li>
          <li>
            <a href="/community" onClick={() => setNavbarState(false)}>
              Places
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
    .container {
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
    width: 18%;
    border-radius: 50%;
  }
  .profile p{
    font-size: 18px;
    margin-left: 8px;
  }
  button {
    padding: 0.7rem 1.2rem;
    cursor: pointer;
    border-radius: 0.7rem;
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