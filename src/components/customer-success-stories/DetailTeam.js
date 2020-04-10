import React, { Fragment } from 'react';
import { Columns, Column } from 'bloomer';
import styled from 'styled-components';
import DetailSubTitle from './DetailSubTitle';
import { TextOrange } from '../Typography/TextHelpers';
import DetailTeamCard from './DetailTeamCard';

import img from '../../assets/images/team/1.png';

const TitleWrapper = styled.div`
  margin-bottom: 3em;
`;

const DetailTeam = () => {
  return (
    <Fragment>
      <TitleWrapper>
        <DetailSubTitle>
          Team<TextOrange>Members</TextOrange>
        </DetailSubTitle>
      </TitleWrapper>
      <Columns isMultiline>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <DetailTeamCard
            src={img}
            name="carlos"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in neque auctor, molestie sapien sit amet, tristique risus. Mauris pellentesque risus quis sem dignissim eleifend. Nullam a lacus consequat, interdum ex vitae, pellentesque sem."
          />
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <DetailTeamCard
            src={img}
            name="carlos"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in neque auctor, molestie sapien sit amet, tristique risus. Mauris pellentesque risus quis sem dignissim eleifend. Nullam a lacus consequat, interdum ex vitae, pellentesque sem."
          />
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
          <DetailTeamCard
            src={img}
            name="carlos"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in neque auctor, molestie sapien sit amet, tristique risus. Mauris pellentesque risus quis sem dignissim eleifend. Nullam a lacus consequat, interdum ex vitae, pellentesque sem."
          />
        </Column>
      </Columns>
    </Fragment>
  );
};

export default DetailTeam;
