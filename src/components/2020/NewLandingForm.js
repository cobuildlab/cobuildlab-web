import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Subtitle } from 'bloomer';
import { Link } from 'gatsby';
import LandingFormBadges from './LandingFormBadges';
import styled from 'styled-components';
import ContactForm from './ContactForm';

const Box = styled.div`
  background-color: #fff;
  box-shadow: 0px 8px 30px #264a6017;
  width: 100%;
  heigth: 100%;
  padding: 1.25rem;
`;

const NewLandingForm = ({ landingName }) => (
  <Box id={'landing-contact-form'}>
    <LandingFormBadges />
    <Container>
      <div className="colunm is-6 has-text-centered">
        <Title>
          Contact us for a <span className="free">FREE</span> <br /> consultation!
        </Title>
        <p>
          Call Us to: <span className="free">(786) 991-3467</span> or <br /> fill out this form and
          we will get in touch with you.
        </p>
      </div>
      <ContactForm landingName={landingName} />
      <div className="has-text-centered">
        <Subtitle className=" mt-20">Privacy Policy</Subtitle>
        <Link to="/privacy-policy" className="is-marginless">
          Here you can access the information about how we treat your data.
        </Link>
      </div>
    </Container>
  </Box>
);

NewLandingForm.propTypes = {
  landingName: PropTypes.string.isRequired,
};

export default NewLandingForm;
