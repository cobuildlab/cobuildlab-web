import React from 'react';
import { Column } from 'bloomer';
import ServicesSubTitle from './../ServicesSubTitle';
import styled from 'styled-components';
import { TextOrange } from '../../Typography/TextHelpers';

const StyledSection = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const StyledSubTitle = styled.div`
  text-align: center;
`;

const Paragraph = styled.p`
  text-align: justify;
  padding-right: 50px;
  font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));
  font-family: 'Lato-regular' !important;
  padding-left: 50px;
  color: #264a60;
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`;

const ServicesSection2 = () => {
  return (
    <>
      <Column isSize={{ mobile: 12, desktop: 12 }}>
        <StyledSection>
          <StyledSubTitle>
            <ServicesSubTitle>
              StartUp &nbsp;
              <TextOrange>your Idea</TextOrange>{' '}
            </ServicesSubTitle>
          </StyledSubTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque, sapien at
            molestie suscipit, sapien leo faucibus ante, quis iaculis mauris nisl nec libero.
            Suspendisse imperdiet in ex ac varius. Donec elementum libero eu purus euismod, sit amet
            congue leo bibendum. Donec lacus ipsum, sodales a dignissim quis, placerat eget ex.
          </Paragraph>
        </StyledSection>
      </Column>
    </>
  );
};

export default ServicesSection2;
