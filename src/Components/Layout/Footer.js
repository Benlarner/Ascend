import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <Foot>
            <div className="footer-bottom">
        <small> Copyright &copy; <strong>Ascend</strong> </small>

            </div>
        </Foot>
    )
}

export default Footer;


const Foot = styled.footer`
  background-color: #343b3f;
  height: 50px;
  color: white;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

`;


