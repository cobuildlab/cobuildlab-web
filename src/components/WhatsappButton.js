import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  position: fixed;
  width: 60px;
  height: 60px;
  border-radius: 100px;
  bottom: 20px;
  left: 50px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
  animation: pulse 2s infinite;
  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.8);
      box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.8);
    }
    70% {
      -moz-box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
      box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
    }
    100% {
      -moz-box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
      box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
    }
  }
`;

export const WhatsappButton = () => (
  <Link
    href="https://api.whatsapp.com/send?phone=17869913467&text=Hi%2C%20can%20I%20ask%20you%20a%20question%3F%20"
    target="_blank">
    <StaticImage
      src="../assets/2022/whatsapp.png"
      alt="WhatsApp"
      imgStyle={{
        height: '60px',
        width: '60px',
      }}
    />
  </Link>
);
