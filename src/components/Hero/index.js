import React, { useState, useCallback } from 'react';
import {
  Container,
  Column,
  Columns,
  Hero,
  HeroBody,
} from 'bloomer'
import ModalVideo from 'react-modal-video'
import comic from '../../resources/icons/comic.svg'
import ReadMore from './ReadMore';

import H1Blue from '../Text/H1Blue'
import H2Blue from '../Text/H2Blue'
import H3Blue from '../Text/H3Blue'
import H4Blue from '../Text/H4Blue'


console.log(H1Blue)

export default () => {

  const [isVisible, setVisible] = useState(false);

  const handleModal = useCallback(() => {
    setVisible(state => !state);
  }, [])

  return(
    <>
    <Container isFluid className="is-hidden-mobile no-margin">
    <Columns>
      <Column isSize="1/2">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <H3Blue>Software Development Company</H3Blue>
        <H1Blue>
          Let’s <span className={'orange-text'}>Build</span> a Great{' '}
          <span className={'orange-text'}>Idea.</span>
        </H1Blue>
        <H4Blue>
          We partner with new and early-stage non-technical
          entrepreneurs and industry experts to transforms ideas into{' '}
          <span className={'orange-text'}>
            Web and Mobile Software Products.
          </span>
          <br />
          <br />
          Since day one, our technique is focused on early results and
          transparent communication.
        </H4Blue>
        <ReadMore onClick={handleModal} />
      </Column>
      <Column isSize="1/2">
        <br />
        <br />
       
      </Column>
    </Columns>
  </Container>
  <Container
    isFluid
    className="is-hidden-desktop is-hidden-tablet-only no-margin"
    hasTextAlign="centered"
  >
    <H4Blue>Software Development Company</H4Blue>
    <img
      alt={'main comic'}
      src={comic}
      style={{ width: '85%', height: 'auto' }}
    />
    <H2Blue>
      Let’s <span className={'orange-text'}>Build</span> a Great{' '}
      <span className={'orange-text'}>Idea.</span>
    </H2Blue>
    <Columns>
      <Column isSize="1/2">
        <H4Blue>
          We partner with new and early-stage non-technical
          entrepreneurs and industry experts to transforms ideas into{' '}
          <span className={'orange-text'}>
            Web and Mobile Software Products.
          </span>
          <br />
          <br />
          Since day one, our technique is focused on early results and
          transparent communication.
        </H4Blue>
        <ReadMore onClick={handleModal} />
      </Column>
    </Columns>
  </Container>
  </>
  )
}