import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'bloomer';

import CalculatorWrapper from '../CalculatorWrapper';
import CalculatorHeader from './CalculatorHeader';
import CalculatorSectionPlatform from './CalculatorSectionPlatform';
import CalculatorSectionDesign from './CalculatorSectionDesign';
import CalculatorSectionSecurity from './CalculatorSectionSecurity';
import CalculatorSectionData from './CalculatorSectionData';
import CalculatorSectionAdditionalFeatures from './CalculatorSectionAdditionalFeatures';
import CalculatorFooter from './CalculatorFooter';

const defaultFeatureCost = [
  {
    feature: 'platform',
    select: [],
    max: 0,
    min: 0,
    description: 'Platform to your project',
  },
  {
    feature: 'design',
    select: [],
    max: 0,
    min: 0,
    description: 'UI theme',
  },
  {
    feature: 'security',
    select: [],
    max: 0,
    min: 0,
    description: 'App Security',
  },
  {
    feature: 'data',
    select: [],
    max: 0,
    min: 0,
    description: 'Integrate which this 3rd party services:',
  },
  {
    feature: 'additional feature',
    select: [],
    max: 0,
    min: 0,
    description: 'Additional services for your project',
  },
];

class CalculatorSection extends PureComponent {
  static defaultProps = {
    getData: () => null,
  };

  static propTypes = {
    getData: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      data: defaultFeatureCost,
      total: {
        max: 0,
        min: 0,
      },
    };
    this.getCost = this.getCost.bind(this);
  }

  getCost(item) {
    const { data } = this.state;
    const { getData } = this.props;

    const newData = data.map((element) => ({
      ...element,
      min: item.feature === element.feature ? item.min : element.min,
      max: item.feature === element.feature ? item.max : element.max,
      select: item.feature === element.feature ? item.select : element.select,
    }));
    const max = newData.map((e) => e.max).reduce((total, current) => total + current);
    const min = newData.map((e) => e.min).reduce((total, current) => total + current);

    const state = {
      data: newData,
      total: {
        max,
        min,
      },
    };

    this.setState(state, () => {
      getData(state);
    });
  }

  render() {
    const { total } = this.state;
    return (
      <Container>
        <CalculatorWrapper>
          <CalculatorHeader />
          <CalculatorSectionPlatform getCost={this.getCost} />
          <CalculatorSectionDesign getCost={this.getCost} />
          <CalculatorSectionSecurity getCost={this.getCost} />
          <CalculatorSectionData getCost={this.getCost} />
          <CalculatorSectionAdditionalFeatures getCost={this.getCost} />
          <CalculatorFooter max={total.max} min={total.min} />
        </CalculatorWrapper>
      </Container>
    );
  }
}

export default CalculatorSection;
