import React, { Fragment, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Columns } from 'bloomer';
import { Icon } from 'react-icons-kit';
import { envelope } from 'react-icons-kit/fa/envelope';
import { globe } from 'react-icons-kit/fa/globe';
import { codeFork } from 'react-icons-kit/fa/codeFork';

import CalculatorLayoutLeftSection from '../layout/CalculatorLayoutLeftSection';
import CalculatorLayoutRightSection from '../layout/CalculatorLayoutRightSection';
import CalculatorLayoutDescripcion from '../layout/CalculatorLayoutDescripcion';
import CalculatorLayoutCards from '../layout/CalculatorLayoutCards';
import CalculatorCell from '../cell/CalculatorCell';

import CalculatorFatureCaption from '../feature/CalculatorFatureCaption';
import CalculatorFeatureName from '../feature/CalculatorFeatureName';
import CalculatorFeatureDescription from '../feature/CalculatorFeatureDescription';
import CalculatorFeatureCard from '../feature/CalculatorFeatureCard';
import CalculatorFeatureCost from '../feature/CalculatorFeatureCost';

const data = [
  {
    id: 1,
    name: 'email password',
    icon: envelope,
    min: 1000,
    max: 2500,
  },
  {
    id: 2,
    name: 'social networks',
    icon: globe,
    min: 1000,
    max: 1500,
  },
  {
    id: 3,
    name: '2 factor',
    icon: codeFork,
    min: 500,
    max: 1000,
  },
];

const CalculatorSectionSecurity = ({ getCost }) => {
  const [currentPlatform, setCurrentPlatform] = useState({ max: 0, min: 0, id: null });

  const onClick = useCallback(
    (item) => {
      setCurrentPlatform(item);
      getCost({
        feature: 'security',
        select: [item.name],
        max: item.max,
        min: item.min,
      });
    },
    [currentPlatform],
  );

  const items = data.map((item) => (
    <CalculatorFeatureCard
      key={item.name}
      isActive={currentPlatform.id === item.id}
      data={item}
      onSelect={onClick}>
      <Icon icon={item.icon} size={30} />
      <CalculatorFatureCaption>{item.name}</CalculatorFatureCaption>
    </CalculatorFeatureCard>
  ));

  return (
    <Fragment>
      <Columns isMarginless>
        <CalculatorLayoutLeftSection>
          <CalculatorLayoutDescripcion>
            <CalculatorCell
              isDisplay="flex"
              isDirection="column"
              isJustify="center"
              isAlign="center">
              <CalculatorFeatureName>Security</CalculatorFeatureName>
              <CalculatorFeatureDescription>
                How do you wish to secure your app?
              </CalculatorFeatureDescription>
            </CalculatorCell>
          </CalculatorLayoutDescripcion>
          <CalculatorLayoutCards>
            <CalculatorCell isDisplay="flex" isMultiline>
              {items}
            </CalculatorCell>
          </CalculatorLayoutCards>
        </CalculatorLayoutLeftSection>
        <CalculatorLayoutRightSection>
          <CalculatorCell isDisplay="flex" isJustify="center" isAlign="center">
            <CalculatorFeatureCost max={currentPlatform.max} min={currentPlatform.min} />
          </CalculatorCell>
        </CalculatorLayoutRightSection>
      </Columns>
    </Fragment>
  );
};

CalculatorSectionSecurity.defaultProps = {
  getCost: () => null,
};

CalculatorSectionSecurity.propTypes = {
  getCost: PropTypes.func,
};

export default CalculatorSectionSecurity;
