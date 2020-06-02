import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import OurTeamPopOver from './OurTeamPopOver';

const Container = styled.div`
  position: absolute;
  z-index: 10;
  width: 45px;

  @media (max-width: 360px) {
    top: ${({ xs }) => xs.top || 'initial'};
    left: ${({ xs }) => xs.left || 'initial'};
    right: ${({ xs }) => xs.right || 'initial'};
    bottom: ${({ xs }) => xs.bottom || 'initial'};
  }

  @media (min-width: 361px) and (max-width: 576px) {
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
  @media (max-width: 1200px) {
    width: 25px;
  }
`;

const OurTeamLocation = ({ xl, lg, md, sm, xs, placeholder }) => {
  const data = useStaticQuery(query);
  return (
    <Container xl={xl} lg={lg} md={md} sm={sm} xs={xs}>
      <OurTeamPopOver text={placeholder}>
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
  xs: {},
  xl: {},
  lg: {},
  md: {},
  sm: {},
};

OurTeamLocation.propTypes = {
  placeholder: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string])
    .isRequired,
  xs: PropTypes.shape({
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
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
