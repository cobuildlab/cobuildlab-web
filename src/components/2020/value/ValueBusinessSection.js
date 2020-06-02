import React from 'react';
import { Columns, Column } from 'bloomer';
import ValueBusinessImages from './ValueBusinessImages';
import ValueCard from './ValueCard';
import ValueCardTitle from './ValueCardTitle';
import ValueCardContent from './ValueCardContent';
import { ValueList, ValueListItem } from './ValueList';
import ValueCardFooter from './ValueCardFooter';
import { TextOrange } from '../../Typography/TextHelpers';

const ValueBusinessSection = () => (
  <Columns>
    <Column isSize={{ mobile: 12, desktop: 4 }}>
      <ValueBusinessImages />
    </Column>
    <Column isSize={{ mobile: 12, desktop: 8 }}>
      <ValueCard right="-100%" left="0%">
        <ValueCardTitle>
          Business <TextOrange>Value</TextOrange>
        </ValueCardTitle>
        <ValueCardContent>
          We differentiate our selves by providing unique value to our customer base.
          <br />
          More than 15 years of experience give us the advantage to develop your products with the
          best techniques.
        </ValueCardContent>
        <ValueList>
          <ValueListItem>☛ Quality apps utilizing modern technologies</ValueListItem>
          <ValueListItem>☛ Rapid development and feature-rich</ValueListItem>
          <ValueListItem>☛ Custom mobile and cloud solutions</ValueListItem>
          <ValueListItem>☛ iOS and Android experience</ValueListItem>
          <ValueListItem>☛ Marketing and Launch Services</ValueListItem>
        </ValueList>
        <ValueCardFooter />
      </ValueCard>
    </Column>
  </Columns>
);

export default ValueBusinessSection;
