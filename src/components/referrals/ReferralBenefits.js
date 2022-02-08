import React from 'react';
import { Container, Section, Subtitle, Title } from 'bloomer';
import { StaticImage } from 'gatsby-plugin-image';
import { List, ListItem } from '../Typography/List';
import Paragraph from '../Typography/Paragraph';

export const ReferralBenefits = () => (
  <Container>
    <Title isSize={1} tag={'h1'}>
      Benefits from your network of contacts
    </Title>
    <Paragraph>
      Every time you refer a friend to cobuild lab, we will deduct up to $5,000* from the bill, or
      receive up to $5,000* cash.
    </Paragraph>
    <StaticImage style={{ width: '100%' }} src="../../assets/images/referrals/friends-group.png" />
    <Section>
      <Title isSize={1} tag={'h1'}>
        How does it work
      </Title>
      <List>
        <ListItem>
          <Subtitle>Reach out to your network:</Subtitle>
          Scrappe your contacts and friends for possible opportinities for projects developing
          custom software. Web applications, mobile apps, or any other kind of Custom Software.
        </ListItem>
        <ListItem>
          Recommend your friend
          {"It's"} very simple! Send them this link:
        </ListItem>
        <ListItem>
          Give us a Review Once you submit the information, you will receive an invitation email to
          five your opinion about the company.
        </ListItem>
        <ListItem>
          Earn your referral cash: We will reach out and send you all the information to complete
          the process. If {"you've"} been referred by a friend, click here to complete the referral
          process.
        </ListItem>
      </List>
    </Section>
  </Container>
);
