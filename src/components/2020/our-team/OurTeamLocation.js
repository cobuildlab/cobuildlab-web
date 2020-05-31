import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import OurTeamPopOver from './OurTeamPopOver';

const Container = styled.div`
  position: absolute;
  z-index: 10;
  width: 45px;

  @media (max-width: 767.98px) {
    top: ${({ sm }) => sm.top || 'initial'};
    left: ${({ sm }) => sm.left || 'initial'};
    right: ${({ sm }) => sm.right || 'initial'};
    bottom: ${({ sm }) => sm.bottom || 'initial'};
  }

  @media (min-width: 768px) {
    top: ${({ md }) => md.top || 'initial'};
    left: ${({ md }) => md.left || 'initial'};
    right: ${({ md }) => md.right || 'initial'};
    bottom: ${({ md }) => md.bottom || 'initial'};
  }

  @media (min-width: 992px) {
    top: ${({ lg }) => lg.top || 'initial'};
    left: ${({ lg }) => lg.left || 'initial'};
    right: ${({ lg }) => lg.right || 'initial'};
    bottom: ${({ lg }) => lg.bottom || 'initial'};
  }

  @media (min-width: 1200px) {
    top: ${({ xl }) => xl.top || 'initial'};
    left: ${({ xl }) => xl.left || 'initial'};
    right: ${({ xl }) => xl.right || 'initial'};
    bottom: ${({ xl }) => xl.bottom || 'initial'};
  }
`;

const Images = styled.img`
  transition: transform 0.25s ease-out;
  &:hover {
    transform: translateY(-4px);
  }
  @media (max-width: 767.98px) {
    width: 25px;
  }
`;

const OurTeamLocation = ({ xl, lg, md, sm }) => {
  const data = useStaticQuery(query);
  return (
    <Container xl={xl} lg={lg} md={md} sm={sm}>
      <OurTeamPopOver text="Merida, Venezuela">
        <Images src={data.file.publicURL} alt="" />
      </OurTeamPopOver>
    </Container>
  );
};

const query = graphql`
  query {
    file(relativePath: { eq: "team/nut.svg" }) {
      publicURL
    }
  }
`;

OurTeamLocation.defaultProps = {
  xl: {},
  lg: {},
  md: {},
  sm: {},
};

OurTeamLocation.propTypes = {
  xl: PropTypes.shape({
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  lg: PropTypes.shape({
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  md: PropTypes.shape({
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  sm: PropTypes.shape({
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
};

export default OurTeamLocation;
