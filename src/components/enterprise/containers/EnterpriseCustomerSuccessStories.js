import React from 'react';
import { Container, Section } from 'bloomer';
import { Link } from 'gatsby';
import styled from 'styled-components';
import H3 from '../../Typography/H3';
import { TextOrange } from '../../Typography/TextHelpers';
import Paragraph from '../../Typography/Paragraph';
import CustomerSuccessStories from '../../customer-success-stories/CustomerSuccessStories';

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: calc(20px + (50 - 20) * ((100vw - 320px) / (1920 - 320)));
`;

const Redirect = styled(Link)`
  font-weight: 600;
  font-size: calc(24px + (42 - 24) * ((100vw - 320px) / (1920 - 320)));
  margin-bottom: calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320)));
  text-transform: capitalize;
  color: inherit;
  transition: color 0.15s ease-in;
  &:hover {
    color: #e76c29;
  }
`;

const EnterpriseCustomerSuccessStories = () => {
  return (
    <Section isMarginless id="enterprise-css">
      <Container>
        <Wrapper>
          <H3>
            <Redirect to="/customer-success-stories">
              See Our <TextOrange>Case Studies</TextOrange>
            </Redirect>
          </H3>
          <Paragraph>Learn from ideas created at Cobuild Lab.</Paragraph>
        </Wrapper>
        <CustomerSuccessStories />
      </Container>
    </Section>
  );
};

export default EnterpriseCustomerSuccessStories;
