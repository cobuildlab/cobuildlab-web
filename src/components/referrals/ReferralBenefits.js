import React from 'react';
import { Subtitle, Title } from 'bloomer';
import { StaticImage } from 'gatsby-plugin-image';
import { TextIndigo } from '../2021/text/TextHelpers';
import styled from 'styled-components';

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
      <Title isSize={2}>Benefits from your network of contacts</Title>
      <Subtitle isSize={4}>
        <TextIndigo>
          Every time you refer a friend to cobuild lab, we will deduct up to $5,000* from the bill,
          or receive up to $5,000* cash.
        </TextIndigo>
      </Subtitle>
      <StaticImage
        style={{ width: '100%' }}
        src="../../assets/images/referrals/friends-group.png"
        alt="Friends group"
      />
      <Section>
        <Title isSize={3} tag={'h3'} style={{ paddingLeft: '16px' }}>
          How does it work
        </Title>

        <List>
          <ListItem>
            <Title isSize={5} tag={'div'}>
              1. Reach out to your network:
            </Title>
            <Subtitle>
              <TextIndigo>
                Scrappe your contacts and friends for possible opportinities for projects developing
                custom software. Web applications, mobile apps, or any other kind of Custom
                Software.
              </TextIndigo>
            </Subtitle>
          </ListItem>
          <ListItem>
            <Title isSize={5} tag={'div'}>
              2. Recommend your friend
            </Title>
            <Subtitle>
              <TextIndigo>{"It's"} very simple! Send them this link:</TextIndigo>
            </Subtitle>
          </ListItem>
          <ListItem>
            <Title isSize={5} tag={'div'}>
              3. Give us a Review
            </Title>
            <Subtitle>
              <TextIndigo>
                Once you submit the information, you will receive an invitation email to five your
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
                We will reach out and send you all the information to complete the process.
              </TextIndigo>
            </Subtitle>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Main>
);
