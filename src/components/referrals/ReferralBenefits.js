import React from 'react';
import { Container, Section, Title } from 'bloomer';
import { StaticImage } from 'gatsby-plugin-image';
import { BaseListItemCss, List } from '../Typography/List';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 13px 15px 5px #00000024;
  padding: 3rem;
`;

const ListItem = styled.li`
  ${BaseListItemCss}
  &::before {
    color: #264a60;
    display: inline-block;
    font-weight: bold !important;
    font-size: 1.4rem;
  }
`;

const Paragraph = styled(Title)`
  font-weight: normal;
`;

export const ReferralBenefits = () => (
  <MainContainer>
    <Container>
      <Title isSize={2} tag={'h2'}>
        Benefits from your network of contacts
      </Title>
      <Paragraph isSize={4} tag={'h4'}>
        Every time you refer a friend to cobuild lab, we will deduct up to $5,000* from the bill, or
        receive up to $5,000* cash.
      </Paragraph>
      <StaticImage
        style={{ width: '100%' }}
        src="../../assets/images/referrals/friends-group.png"
        alt="Friends group"
      />
      <Section>
        <Title isSize={3} tag={'h3'} style={{ marginBottom: 0, paddingLeft: '16px' }}>
          How does it work
        </Title>
        <List>
          <ListItem>
            <Title isSize={5} tag={'div'}>
              1. Reach out to your network:
            </Title>
            Scrappe your contacts and friends for possible opportinities for projects developing
            custom software. Web applications, mobile apps, or any other kind of Custom Software.
          </ListItem>
          <ListItem>
            <Title isSize={5} tag={'div'}>
              2. Recommend your friend
            </Title>
            {"It's"} very simple! Send them this link:
          </ListItem>
          <ListItem>
            <Title isSize={5} tag={'div'}>
              3. Give us a Review
            </Title>
            Once you submit the information, you will receive an invitation email to five your
            opinion about the company.
          </ListItem>
          <ListItem>
            <Title isSize={5} tag={'div'} style={{ marginBottom: 0 }}>
              4. Earn your referral cash:
            </Title>
            We will reach out and send you all the information to complete the process.
            <br></br>
            If {"you've"} been referred by a friend, click here to complete the referral process.
          </ListItem>
        </List>
      </Section>
    </Container>
  </MainContainer>
);
