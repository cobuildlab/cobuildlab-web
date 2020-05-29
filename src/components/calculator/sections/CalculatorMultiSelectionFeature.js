import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Columns } from 'bloomer';
import { Icon } from 'react-icons-kit';

import CalculatorLayoutLeftSection from '../layout/CalculatorLayoutLeftSection';
import CalculatorLayoutRightSection from '../layout/CalculatorLayoutRightSection';
import CalculatorLayoutDescripcion from '../layout/CalculatorLayoutDescripcion';
import CalculatorLayoutCards from '../layout/CalculatorLayoutCards';
import CalculatorCell from '../cell/CalculatorCell';

import CalculatorFeatureName from '../feature/CalculatorFeatureName';
import CalculatorFatureCaption from '../feature/CalculatorFatureCaption';
import CalculatorFeatureDescription from '../feature/CalculatorFeatureDescription';
import CalculatorFeatureCard from '../feature/CalculatorFeatureCard';
import CalculatorFeatureCost from '../feature/CalculatorFeatureCost';

class CalculatorMultiSelectionFeature extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      total: {
        max: 0,
        min: 0,
      },
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(item) {
    const { data } = this.state;
    const { featureCost, featureId } = this.props;

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
        featureCost({
          feature: featureId,
          select: onlyActivesItems.map((e) => e.name),
          max,
          min,
        });
      },
    );
  }

  render() {
    const { data, total } = this.state;
    const { title, description } = this.props;

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
      <Columns isMarginless>
        <CalculatorLayoutLeftSection>
          <CalculatorLayoutDescripcion>
            <CalculatorCell
              isDisplay="flex"
              isDirection="column"
              isJustify="center"
              isAlign="center">
              <CalculatorFeatureName>{title}</CalculatorFeatureName>
              <CalculatorFeatureDescription>{description}</CalculatorFeatureDescription>
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

CalculatorMultiSelectionFeature.defaultProps = {
  featureCost: () => null,
};

CalculatorMultiSelectionFeature.propTypes = {
  featureCost: PropTypes.func,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  featureId: PropTypes.string.isRequired,
};

export default CalculatorMultiSelectionFeature;
