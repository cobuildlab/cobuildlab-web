import React, { useState, useCallback, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Columns, Column, Modal, ModalBackground, ModalContent, ModalClose } from 'bloomer';
import ButtonDefault from '../2020/Button/ButtonDefault';
import ContanctForm from '../2020/ContactForm';
import Paragraph from '../Typography/Paragraph';
import { FacebookLink, InstagramLink, YoutubeLink } from '../2020/SocialMediaLinks';
import H4 from '../Typography/H4';

const Container = styled.div`
  padding: 1.5em 0;
  box-sizing: border-box;
  margin-bottom: 1.5em;
  margin-top: 1.5em;
  background-color: #264a60;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Text = styled(Paragraph)`
  color: #fff;
  padding: 0 2.5em;
  word-spacing: 1.6px;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 !important;
  @media screen and (max-width: 768px) {
    overflow: visible;
    white-space: pre-wrap;
    text-align: center;
    padding: 1em;
  }
`;

const ModalContentContainer = styled.div`
  background-color: #fff;
  padding: 2em;
`;

const TitleContainer = styled.div`
  margin: 2em 0;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 2.5em;
  @media screen and (max-width: 768px) {
    justify-content: center;
    padding-right: 0;
    margin-top: 1em;
  }
`;

const ListItem = styled.li`
  padding: 0.5em;
`;

const BlogPostCallAction = ({ children }) => {
  const [isVisible, setVisible] = useState(false);

  const handleVisible = useCallback(() => {
    setVisible((state) => !state);
  }, []);

  return (
    <Fragment>
      <Container>
        <Columns>
          <Column isSize={{ mobile: 12, desktop: 8 }}>
            <TextContainer>
              <Text>Contact us to know more about {children}</Text>
            </TextContainer>
          </Column>
          <Column isSize={{ mobile: 12, desktop: 4 }}>
            <ActionsContainer>
              <ButtonContainer>
                <ButtonDefault onClick={handleVisible}>Contact Us</ButtonDefault>
              </ButtonContainer>
              <List>
                <ListItem>
                  <FacebookLink color="white" />
                </ListItem>
                <ListItem>
                  <InstagramLink color="white" />
                </ListItem>
                <ListItem>
                  <YoutubeLink color="white" />
                </ListItem>
              </List>
            </ActionsContainer>
          </Column>
        </Columns>
      </Container>
      <Modal isActive={isVisible}>
        <ModalBackground onClick={handleVisible} />
        <ModalContent hasTextColor="white">
          <ModalContentContainer>
            <TitleContainer>
              <H4> Contanct Us</H4>
            </TitleContainer>
            <ContanctForm landingName="blog call action" />
          </ModalContentContainer>
        </ModalContent>
        <ModalClose onClick={handleVisible} />
      </Modal>
    </Fragment>
  );
};

BlogPostCallAction.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default BlogPostCallAction;
