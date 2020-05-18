import React, { PureComponent } from 'react';
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
    max: 0,
    min: 0,
  },
  {
    feature: 'design',
    max: 0,
    min: 0,
  },
  {
    feature: 'security',
    max: 0,
    min: 0,
  },
  {
    feature: 'data',
    max: 0,
    min: 0,
  },
  {
    feature: 'additional-feature',
    max: 0,
    min: 0,
  },
];

class CalculatorSection extends PureComponent {
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
    console.log(item);
    const newData = data.map((element) => ({
      ...element,
      min: item.feature === element.feature ? item.min : element.min,
      max: item.feature === element.feature ? item.max : element.max,
    }));
    console.log(newData);
    const max = newData.map((e) => e.max).reduce((total, current) => total + current);
    const min = newData.map((e) => e.min).reduce((total, current) => total + current);

    this.setState({
      data: newData,
      total: {
        max,
        min,
      },
    });
  }

  render() {
    const { total } = this.state;
    console.log(total);
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
