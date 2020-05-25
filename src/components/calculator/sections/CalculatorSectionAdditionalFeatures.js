import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Columns } from 'bloomer';
import { Icon } from 'react-icons-kit';
import { android } from 'react-icons-kit/fa/android';
import { apple } from 'react-icons-kit/fa/apple';
import { globe } from 'react-icons-kit/fa/globe';

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
    id: 0,
    name: 'Payments',
    icon: android,
    min: 1000,
    max: 1500,
    isActive: false,
  },
  {
    id: 1,
    name: 'Geolocalization',
    icon: apple,
    min: 1000,
    max: 1500,
    isActive: false,
  },
  {
    id: 2,
    name: 'chat',
    icon: globe,
    min: 1000,
    max: 1500,
    isActive: false,
  },
  {
    id: 3,
    name: 'Notifications',
    icon: globe,
    min: 1000,
    max: 1500,
    isActive: false,
  },
  {
    id: 4,
    name: 'Backoffice',
    icon: globe,
    min: 2500,
    max: 4500,
    isActive: false,
  },
  {
    id: 5,
    name: 'Reports',
    icon: globe,
    min: 2000,
    max: 2500,
    isActive: false,
  },
  {
    id: 6,
    name: 'Analitycs',
    icon: globe,
    min: 1000,
    max: 1500,
    isActive: false,
  },
  {
    id: 7,
    name: 'Comments',
    icon: globe,
    min: 1000,
    max: 1500,
    isActive: false,
  },
  {
    id: 8,
    name: 'Camera',
    icon: globe,
    min: 1000,
    max: 1500,
    isActive: false,
  },
  {
    id: 9,
    name: 'Maps',
    icon: globe,
    min: 2000,
    max: 4500,
    isActive: false,
  },
];

class CalculatorSectionAdditionalFeatures extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data,
      total: {
        max: 0,
        min: 0,
      },
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(item) {
    const { data } = this.state;
    const { getCost } = this.props;

    const newState = data.map((element) => ({
      ...element,
      isActive: element.id === item.id ? !element.isActive : element.isActive,
    }));
    const onlyActivesItems = newState.filter((e) => e.isActive);
    const max = onlyActivesItems.length
      ? onlyActivesItems.map((e) => e.max).reduce((total, current) => total + current)
      : 0;
    const min = onlyActivesItems.length
      ? onlyActivesItems.map((e) => e.min).reduce((total, current) => total + current)
      : 0;
    this.setState(
      {
        data: newState,
        total: {
          max,
          min,
        },
      },
      () => {
        getCost({
          feature: 'additional-feature',
          select: onlyActivesItems.map( e => e.name),
          max,
          min,
        });
      },
    );
  }

  render() {
    const { data, total } = this.state;

    const items = data.map((item) => (
      <CalculatorFeatureCard
        key={item.name}
        isActive={item.isActive}
        data={item}
        onSelect={this.onClick}>
        <Icon icon={item.icon} size={30} />
        <CalculatorFatureCaption>{item.name}</CalculatorFatureCaption>
      </CalculatorFeatureCard>
    ));

    return (
      <Columns isMarginless isMultiline>
        <CalculatorLayoutLeftSection>
          <CalculatorLayoutDescripcion>
            <CalculatorCell
              isDisplay="flex"
              isDirection="column"
              isJustify="center"
              isAlign="center">
              <CalculatorFeatureName>Additional Features</CalculatorFeatureName>
              <CalculatorFeatureDescription>
                Additional services for your project
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
            <CalculatorFeatureCost max={total.max} min={total.min} />
          </CalculatorCell>
        </CalculatorLayoutRightSection>
      </Columns>
    );
  }
}

CalculatorSectionAdditionalFeatures.defaultProps = {
  getCost: () => null,
};

CalculatorSectionAdditionalFeatures.propTypes = {
  getCost: PropTypes.func,
};

export default CalculatorSectionAdditionalFeatures;
