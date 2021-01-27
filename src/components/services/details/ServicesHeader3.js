import React from 'react';
import { Column, Columns } from 'bloomer';
import ServicesSubTitle from './../ServicesSubTitle';
import ServicesContent from './../ServicesContent';
import styled from 'styled-components';
import { TextOrange } from '../../Typography/TextHelpers';

const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 100;
  text-align: justify;
  color: #264a60;
`;

const StyleList = styled.ul`
  list-style: initial;
  margin-left: 23px;
`;

const StyleSubtitle = styled.div`
  text-align: center;
`;

const ServicesHeader3 = () => {
  return (
    <>
      <StyleSubtitle>
        <ServicesSubTitle isCentered>
          StartUp &nbsp;
          <TextOrange>your Idea</TextOrange>{' '}
        </ServicesSubTitle>
      </StyleSubtitle>
      <Columns>
        <Column isSize={{ mobile: 12, tablet: 12, desktop: 4 }} isOffset={{ desktop: 1 }}>
          <ServicesContent>
            <Paragraph>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </Paragraph>
          </ServicesContent>
        </Column>
        <Column isSize={{ mobile: 12, tablet: 12, desktop: 5 }} isOffset={{ desktop: 1 }}>
          <ServicesContent>
            <Paragraph>
              <StyleList>
                <li>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor
                </li>
              </StyleList>
            </Paragraph>
          </ServicesContent>
        </Column>
      </Columns>
    </>
  );
};

export default ServicesHeader3;
