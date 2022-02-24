import { Title } from 'bloomer';
import React from 'react';
import { List, ListItem } from '../Typography/List';

export const ReferralsTermsAndConditions = () => (
  <>
    <Title tag="h5">Terms and Conditions</Title>
    <List style={{ paddingTop: 0 }}>
      <ListItem>
        Referrals must be new customers, without any previous contracts with Cobuild Lab.
      </ListItem>
      <ListItem>
        Referral bonuses are earned only in projects already signed, and in which the first invoice
        has been collected.
      </ListItem>
      <ListItem>
        Bonus will be paid to the referring partner in 2 parts: 50% with the first invoice, and the
        remaining 50% will be paid once the project is finished.
      </ListItem>
      <ListItem>
        The maximum cash earned by the project will be the equivalent of 15% of the total cost of
        the project.
      </ListItem>
      <ListItem>
        In case of any inconvenience, the client may send their doubts and queries through the
        designated communication channels.
      </ListItem>
      <ListItem>There is no maximum number of referrals.</ListItem>
    </List>
  </>
);
