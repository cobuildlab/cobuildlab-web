import React from 'react';
import { Columns, Column } from 'bloomer';
import ValueTechnicalImage from './ValueTechnicalImage';
import ValueCard from './ValueCard';
import ValueCardTitle from './ValueCardTitle';
import ValueCardContent from './ValueCardContent';
import { ValueList, ValueListItem } from './ValueList';
import ValueCardFooter from './ValueCardFooter';
import { TextOrange } from '../../2021/text/TextHelpers';

const ValueTechnicalSection = () => (
  <Columns>
    <Column isSize={{ mobile: 12, desktop: 8 }}>
      <ValueCard right="0%" left="-100%" isLeft>
        <ValueCardTitle>
          Technical <TextOrange>Expertise</TextOrange>
        </ValueCardTitle>
        <ValueCardContent>A Software development Company build by developers.</ValueCardContent>
        <ValueList isLeft>
          <ValueListItem>☛ Support 24/7.</ValueListItem>
          <ValueListItem>
            ☛ Serverless cloud tooling supported by major vendors like Amazon Web Services and
            Google Cloud.
          </ValueListItem>
          <ValueListItem>☛ Quality Insurance in all our releases</ValueListItem>
          <ValueListItem>☛ Agile and Lean techniques</ValueListItem>
          <ValueListItem>☛ A Full service company.</ValueListItem>
        </ValueList>
        <ValueCardFooter />
      </ValueCard>
    </Column>
    <Column isSize={{ mobile: 12, desktop: 4 }}>
      <ValueTechnicalImage />
    </Column>
  </Columns>
);

export default ValueTechnicalSection;
