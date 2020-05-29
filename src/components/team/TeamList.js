import React from 'react';
import { Columns, Column } from 'bloomer';
// import styled from 'styled-components';
import TeamCard from './TeamCard';

import img from '../../assets/images/team/1.png';

const TeamList = () => {
  return (
    <Columns isMultiline>
      <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
        <TeamCard
          src={img}
          name="carlos"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in neque auctor, molestie sapien sit amet, tristique risus. Mauris pellentesque risus quis sem dignissim eleifend. Nullam a lacus consequat, interdum ex vitae, pellentesque sem."
        />
      </Column>
      <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
        <TeamCard
          src={img}
          name="carlos"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in neque auctor, molestie sapien sit amet, tristique risus. Mauris pellentesque risus quis sem dignissim eleifend. Nullam a lacus consequat, interdum ex vitae, pellentesque sem."
        />
      </Column>
      <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
        <TeamCard
          src={img}
          name="carlos"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in neque auctor, molestie sapien sit amet, tristique risus. Mauris pellentesque risus quis sem dignissim eleifend. Nullam a lacus consequat, interdum ex vitae, pellentesque sem."
        />
      </Column>
    </Columns>
  );
};

export default TeamList;
