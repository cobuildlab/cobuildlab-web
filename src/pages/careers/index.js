import React, { useCallback, useState } from 'react';
import { Column, Columns, Container } from 'bloomer';
import { SeoMetaTags } from '../../components/2021/SeoMetaTags';
import { TextIndigo } from '../../components/2021/text/TextHelpers';
import H5 from '../../components/Typography/H5';
import styled from 'styled-components';
import Layout from '../../components/2020/Layout';
import CareersCard from '../../components/carrers/CareersCard';
import CareersHero from '../../components/carrers/CareersHero';
import CustomBannerBackground from '../../components/2020/CustomBannerBackground';
import data from './data.json';
import './style.scss';

const TeamTitle = styled.h5`
  margin-bottom: 5px;
  font-size: 1.5rem;
`;

const CareersTitle = styled(H5)`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const MainContainer = styled.main`
  padding: 0rem 0rem 0rem 2.5rem;
  @media screen and (max-width: 1023px) {
    padding: 0rem 2.25rem 2.25rem 2.25rem;
  }
`;

const AsideContainer = styled.aside`
  padding: 0rem 2.5rem 0rem 0rem;
  @media screen and (max-width: 1023px) {
    padding: 0rem 2.25rem 2.25rem 2.25rem;
  }
`;

const LastPositionsContainer = styled.div``;

const LastPositionsTitle = styled.p`
  font-size: 1.2rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const PositionContainer = styled.li`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const GroupFilterButtons = ({ onOptionSelected }) => {
  const [optionSelected, setOptionSelected] = useState('');
  const options = ['Developers', 'Sales', 'Marketing'];

  const handleOptionSelected = (option) => {
    const value = option.toLowerCase() === optionSelected ? '' : option.toLowerCase();
    console.log(value);
    setOptionSelected(value);
    onOptionSelected(value);
  };

  return options.map((option, index) => (
    <button
      key={index}
      className={`button ${optionSelected === option.toLowerCase() ? 'button-active' : ''}`}
      onClick={() => handleOptionSelected(option)}>
      {option}
    </button>
  ));
};

const AsideOptions = () => {
  const options = ['React Dev Junior', 'Sales Manager', 'Project Manager', 'Swift Dev Senior'];

  return (
    <LastPositionsContainer>
      <LastPositionsTitle className={'font-semi-bold'}>Last positions</LastPositionsTitle>
      <ul className={'text-indigo'}>
        {options.map((option, index) => (
          <PositionContainer key={index}>{option}</PositionContainer>
        ))}
      </ul>
    </LastPositionsContainer>
  );
};

const Careers = () => {
  const [careers, setCareers] = useState(data);

  // Render cards
  const items = careers.map((career, i) => {
    return (
      <>
        <Column isSize={{ desktop: 4, tablet: 6, mobile: 12 }} key={i}>
          <CareersCard
            to={career.slug}
            title={career.title}
            time={career.time}
            readingTime={'3 min'}
            modality={career.modality}
            createdAt={career.createdAt}
          />
        </Column>
      </>
    );
  });

  /**
   * @description Filter the careers cards.
   * @param {string} option - The option selected contain 'developers', 'sales', 'marketing'.
   */
  const filterByType = useCallback((option) => {
    if (option !== '') {
      setCareers(data.filter((career) => career.type === option));
    } else {
      setCareers([...data]);
    }
  });

  return (
    <Layout>
      <SeoMetaTags
        title={'Careers in Tech with Cobuild Lab'}
        description={'Careers in Tech with Cobuild Lab'}
      />
      <CareersHero />
      <Container style={{ marginBottom: '6rem' }}>
        <CustomBannerBackground
          style={{
            width: '100%',
            height: '100%',
            top: '-65%',
            left: '-62%',
          }}
        />
        <Columns>
          <Column isSize={{ mobile: 12, tablet: 4, desktop: 2 }} isPaddingless>
            <AsideContainer>
              <TeamTitle className={'text-indigo font-bold'}>Teams</TeamTitle>
              <GroupFilterButtons onOptionSelected={filterByType} />
              <AsideOptions />
            </AsideContainer>
          </Column>
          <Column isSize={{ mobile: 12, tablet: 8, desktop: 10 }} isPaddingless>
            <MainContainer>
              <p className={'font-semi-bold'}>
                Whatever path you take, you are choosing a career in a truly innovative company.
              </p>
              <p className={'font-semi-bold'}>
                We pride ourselves on offering a competitive salary and benefits wherever you work
                in our global company. {"You'll"} experience a fast-paced collaborative environment
                where you can truly shape your future with like-minded colleagues.
              </p>
              <p className={'font-semi-bold'}>
                Check our job vacancies and if you think you can be part of our dream team, Apply!
              </p>
              <div>
                <CareersTitle style={{ marginBottom: '1rem' }}>
                  <TextIndigo className={'font-light'}>Careers</TextIndigo>
                </CareersTitle>
                <Columns isMultiline>{items}</Columns>
              </div>
            </MainContainer>
          </Column>
        </Columns>
      </Container>
    </Layout>
  );
};

export default Careers;
