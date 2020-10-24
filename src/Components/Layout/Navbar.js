import React from 'react';
import styled from 'styled-components';
import Logo from '../Data/Assests/Logo.jpg'

function Navbar() {
    return (
        <Nav>
            <img src={Logo} alt=""/>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Contact</li>
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
      text-decoration: none;
  }
  li {
    display: inline;
  margin: 20px;
  font-size: 1.4em;
  cursor: pointer;
  }
  img {
    height: 40px;
  }
`;