import React from 'react';
import styled from 'styled-components';
import BannerBackground from '../2020/BannerBackground';
import DetailParagraph from './DetailParagraph';
import DetailSubTitle from './DetailSubTitle';
import DetailsTitle from './DetailTitle';
import { Column, Columns, Container, Section } from 'bloomer';
import { StaticImage } from 'gatsby-plugin-image';
import { TextIndigo } from '../2021/text/TextHelpers';

const Wrapped = styled.div`
  overflow: hidden;
  justify-content: center;
  display: flex;
  width: 100%;
  position: relative;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const FlexCenter = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
`;

/**
 *
 */
export function EpilogueSection() {
  return (
    <Wrapped>
      <Section>
        <Container>
          <BannerBackground
            style={{
              top: '-40%',
              right: '-80%',
              width: '130%',
              height: '130%',
            }}
          />
          <FlexCenter>
            <DetailsTitle>
              <TextIndigo>{"Let's"} </TextIndigo>
              Build{' '}
              <TextIndigo>
                a<br />
                Great
              </TextIndigo>{' '}
              Idea
            </DetailsTitle>
          </FlexCenter>
          <Columns isMultiline>
            <Column
              isSize={{
                mobile: 12,
                desktop: 8,
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}>
              <div>
                <DetailSubTitle isBold={false}>Cobuild {"lab's"} benefits</DetailSubTitle>
                <DetailParagraph>
                  We define methodologies and tools that allow an analysis of the sustainability of
                  the different options for designing and implementing software. It is about the
                  management of software development and its engineering processes in the medium and
                  long term.
                  <br />
                  <br />
                  We use agile, low code or no-code, and cloud-based software solutions to help you
                  capitalize on the market with simple and functional tools that improve your
                  {"company's"} processes bringing better service and more value.
                </DetailParagraph>
              </div>
            </Column>
            <Column
              isSize={{
                mobile: 12,
                desktop: 4,
              }}>
              <StaticImage
                width={'403'}
                height={'414'}
                src={'./../../assets/images/service/product-development-new.png'}
                alt={'Cobuildlab benefits'}
              />
            </Column>
          </Columns>

          <Columns isMultiline>
            <Column
              isSize={{
                mobile: 12,
                desktop: 4,
              }}>
              <StaticImage
                width={'403'}
                height={'414'}
                src={'./../../assets/images/2020-value/coubuild-t.svg'}
                alt={'Long-term partnership'}
              />
            </Column>
            <Column
              isSize={{
                mobile: 12,
                desktop: 8,
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}>
              <div>
                <DetailSubTitle isBold={false}>Long-term partnership</DetailSubTitle>
                <DetailParagraph>
                  We believe in long-term partnerships, not long-term projects based on promises.
                  <br />
                  <br />
                  We stand for collaboration, mutual respect, and trust, which makes us the right
                  Software Development company to choose for game-changing opportunities long-term.
                  <br />
                  <br />
                  We are consistently delivering projects that exceed our clients’ expectations. By
                  creating shared goals, we set up a productive and efficient rhythm with ongoing
                  feedback opportunities for desired changes and improvements.
                </DetailParagraph>
              </div>
            </Column>
          </Columns>
        </Container>
      </Section>
    </Wrapped>
  );
}
