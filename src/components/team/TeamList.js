import React from 'react';
import PropTypes from 'prop-types';
import { Columns, Column } from 'bloomer';
import styled from 'styled-components';
import TeamCard from './TeamCard';

const Container = styled.div`
  margin-top: 1.5em;
  margin-bottom: 1.5em;
`;

const TeamList = ({ data }) => {
  const items = data.map(({ id, name, social_networks, picture, description }) => (
    <Column key={id} isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <TeamCard
        src={picture.childImageSharp.fluid}
        name={name}
        description={description}
        socialNetworks={social_networks}
      />
    </Column>
  ));

  return (
    <Container>
      <Columns isMultiline isMarginless>
        {items}
      </Columns>
    </Container>
  );
};

TeamList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TeamList;
