import React from 'react';
import styled from 'styled-components';
import DetailSubTitle from './DetailSubTitle';
import GoalChart from './chart/GoalChart';
import PropTypes from 'prop-types';
import { Column, Columns, Container, Section } from 'bloomer';
import { TextOrange } from '../2021/text/TextHelpers';

const Wrapper = styled.div`
  margin-top: 3.5rem;
`;

const LightSection = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 13px 15px 5px #00000024;
  position: relative;
`;

const OurGoalSection = ({ data }) => (
  <Wrapper>
    <LightSection>
      <Section>
        <center>
          <DetailSubTitle>
            <TextOrange> Our goals </TextOrange> for this project
          </DetailSubTitle>
        </center>
        <Container>
          <Columns isMultiline isCentered>
            {data.map((item, index) => (
              <Column key={index} isSize={{ mobile: 12, tablet: 6, desktop: 3 }}>
                <GoalChart {...item} />
              </Column>
            ))}
          </Columns>
        </Container>
      </Section>
    </LightSection>
  </Wrapper>
);

OurGoalSection.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default OurGoalSection;
