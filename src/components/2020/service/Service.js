import React from 'react';
import { Container, Columns, Column } from 'bloomer';
import ServiceTitle from './ServiceTitle';
import ServiceCard from './ServiceCard';
import ServiceCardContainer from './ServiceCardContainer';
import ServiceCardTitle from './ServiceCardTitle';
import ServiceCardContent from './ServiceCardContent';
import ServiceFooter from './ServiceFooter';
import ServiceIconEducation from './ServiceIconEducation';
import ServiceIconProduct from './ServiceIconProduct';
import ServiceIconSoftware from './ServiceIconSoftware';

const Services = () => (
  <Container>
    <ServiceTitle />
    <ServiceCardContainer>
      <Columns isMarginless>
        <Column isSize={{ desktop: 4, mobile: 12 }} isPaddingless>
          <ServiceCard>
            <div>
              <ServiceIconProduct />
              <ServiceCardTitle>
                Product development <br /> for Startups
              </ServiceCardTitle>
              <ServiceCardContent>
                We partner with entrepreneurs to transform ideas to Software Products.
              </ServiceCardContent>
            </div>
            <ServiceFooter to={'/blog/software-development-for-new-products/'} />
          </ServiceCard>
        </Column>
        <Column isSize={{ desktop: 4, mobile: 12 }} isPaddingless>
          <ServiceCard isBorder>
            <div>
              <ServiceIconSoftware />
              <ServiceCardTitle>Custom Software Development</ServiceCardTitle>
              <ServiceCardContent>
                We automate and streamline processes with Custom Software to grow your Company with
                your unique sauce.
              </ServiceCardContent>
            </div>
            <ServiceFooter to={'/blog/software-development-for-new-products/'} />
          </ServiceCard>
        </Column>
        <Column isSize={{ desktop: 4, mobile: 12 }} isPaddingless>
          <ServiceCard>
            <div>
              <ServiceIconEducation />
              <ServiceCardTitle>
                Staff <br /> Augmentation
              </ServiceCardTitle>
              <ServiceCardContent>
                We put at your service Senior developers with Javascript and Python technologies to
                boost your projects.
              </ServiceCardContent>
            </div>
            <ServiceFooter to={'/blog/software-development-for-new-products/'} />
          </ServiceCard>
        </Column>
      </Columns>
    </ServiceCardContainer>
  </Container>
);

export default Services;
