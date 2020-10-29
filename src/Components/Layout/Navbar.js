import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../Data/Assests/Logo.jpg'

function Navbar() {
    return (
        <Nav>
           <Link to="/">
            <img src={Logo} alt=""/>
            </Link>
            <ul>
            <Link to="/" className="Link" >
                <li>Home</li>
                </Link>
                <Link to="/Results" className="Link" >

                <li>Services</li>
                </Link>
                <Link to="/Contact" className="Link" >

                <li>Contact</li>
                </Link>

                <Link to ="/Try" className = "Link">
                  <li>Try it out!</li>
                </Link>
            </ul>
        </Nav>
    )
}

export default Navbar


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  z-index: 100;
  align-items: center;
  position: sticky;
  margin-bottom: 10px;
  top: 0;
  background-color: white;

  padding: 15px;
  ul {
  }
  li {
  color: black;
  display: inline;
  margin: 20px;
  font-size: 1.4em;
  cursor: pointer;
  }
  .Link:visited {
    color: black;
  }
  img {
    height: 40px;
  }
`;