import React from 'react';
import styled from 'styled-components';
import DetailSubTitle from './DetailSubTitle';
import Card from '../../components/team/card/Card';
import PropTypes from 'prop-types';
import { Container, Section } from 'bloomer';

const LightSection = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 13px 15px 5px #00000024;
  position: relative;
`;

const TeamImagesContainer = styled.div`
  display: flex;
  flexwrap: wrap;
  width: 100%;
  justify-content: space-evenly;
`;

const CardContainer = styled.div`
  padding: 1.5rem;
  width: 20%;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

const OurTeamSection = ({ data }) => (
  <LightSection>
    <Section>
      <Container>
        <div>
          <center>
            <DetailSubTitle isBold={false}>Our team</DetailSubTitle>
          </center>
          <TeamImagesContainer>
            {data &&
              data?.map((item, index) => (
                <CardContainer key={index}>
                  <Card first={item.first} last={item.last} description={item.description}>
                    {item.picture}
                  </Card>
                </CardContainer>
              ))}
          </TeamImagesContainer>
        </div>
      </Container>
    </Section>
  </LightSection>
);

OurTeamSection.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default OurTeamSection;
