import React from 'react';
import { Subtitle, Title } from 'bloomer';
import { StaticImage } from 'gatsby-plugin-image';
import { TextIndigo } from '../2021/text/TextHelpers';
import styled from 'styled-components';
import TextLink from '../Typography/TextLink';

const List = styled.ul`
  padding: 0em 1em;
`;

const ListItem = styled.li`
  margin: 1.5em 0;
`;

const Main = styled.main`
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 13px 15px 5px #00000024;
  padding: 3rem;
`;

const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;

  @media screen and (min-width: 1024px) {
    max-width: 800px;
  }
`;

const Section = styled.div`
  padding: 2.5rem 0rem;
  @media screen and (min-width: 1024px) {
    padding: 3rem 1.5rem;
  }
`;

export const ReferralBenefits = () => (
  <Main>
    <Container>
      <Title isSize={2}>Benefit from your network of contacts.</Title>
      <Subtitle isSize={4}>
        <TextIndigo>
          Every time you refer a friend to Cobuild Lab, we will deduct up to $5,000* from the bill,
          or you receive up to $5,000* cash.
        </TextIndigo>
      </Subtitle>
      <StaticImage
        style={{ width: '100%' }}
        src="../../assets/images/referrals/referrals-partner.jpg"
        alt="Friends group"
      />
      <Section>
        <Title isSize={3} tag={'h3'} style={{ paddingLeft: '16px' }}>
          How does it work?
        </Title>

        <List>
          <ListItem>
            <Title isSize={5} tag={'div'}>
              1. Reach out to your network:
            </Title>
            <Subtitle>
              <TextIndigo>
                Think of your contacts and friends for possible needs for custom software. Web
                applications, mobile apps, software tools to manage their business, or any other
                Custom Software.
              </TextIndigo>
            </Subtitle>
          </ListItem>
          <ListItem>
            <Title isSize={5} tag={'div'}>
              2. Recommend your friends to Cobuild Lab:
            </Title>
            <Subtitle>
              <TextIndigo>Simple! Just send them this link </TextIndigo>
              <TextLink to="https://g.page/r/CbpG-G-5eK_uEAg/review">
                Review fo Referral Bonus Program
              </TextLink>
            </Subtitle>
          </ListItem>
          <ListItem>
            <Title isSize={5} tag={'div'}>
              3. Give us a quick review online:
            </Title>
            <Subtitle>
              <TextIndigo>
                Once you submit the information, you will receive an invitation email to give your
                opinion about the company.
              </TextIndigo>
            </Subtitle>
          </ListItem>
          <ListItem>
            <Title isSize={5} tag={'div'}>
              4. Earn your referral cash:
            </Title>
            <Subtitle>
              <TextIndigo>
                We only want to pay them if the referral actually signs a project deal with us/
                signs a service agreement and pays a downpayment.
              </TextIndigo>
            </Subtitle>
          </ListItem>
        </List>
      </Section>

      <center>
        <Subtitle>
          <TextIndigo>
            If a friend has referred you, please complete the referral process below:
          </TextIndigo>
        </Subtitle>
      </center>
    </Container>
  </Main>
);
