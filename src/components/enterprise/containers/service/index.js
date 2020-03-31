import React from 'react';
import PropTypes from 'prop-types';
import { Container, Columns, Column, Section } from 'bloomer';

import Button from '../../components/button';
import { Servicedata, Servicedata1 } from '../../../../data/service';
import PreviewIcon from '../../components/icon';
import Typrography from '../../../2020/Typography';
import './service.scss';


const ConentContainer = ({ children }) => (
  <div className="service-content-1 main-title-wrapper">
    {children}
  </div>
);

ConentContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};


const Card = ({ index, icon, title, content }) => (
  <div className={`service-${index} service-content`}>
    <div className="service-icon">
      <span>
        <PreviewIcon icon={icon} />
      </span>
    </div>
    <div className="service-content-dec">
      <Typrography tag="h5" className="service-title">
        {title}
      </Typrography>
      <Typrography tag="p" className="service-dec-content">
        {content}
      </Typrography>
    </div>
  </div>
);

Card.propTypes = {
  index: PropTypes.number.isRequired,
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

const Service = () => {
  return (
    <Section>
      <div className="service-wrapper">
        <Container>
          <Columns>
            <Column
              isMarginless 
              isPaddingless 
              isSize={{ mobile: 12, tablet: 4, desktop: 5}}
            >
              <ConentContainer>
                <div className="service-content-1 main-title-wrapper">
                  <Typrography tag="h2" className="sitemain-subtitle">
                    Business Solutions
                  </Typrography>
                  <div className="sub-title-wrapper">
                    <Typrography tag="h3" className="site-subtitle2">
                      We Provide The
                    </Typrography>
                  </div>
                  <Typrography tag="h3" className="service-title">
                    Our core features
                  </Typrography>
                  <Typrography tag="p" className="service-dec">
                    A wonderful serenity has taken possession of my entire soul, 
                    like these sweet mornings of spring which I enjoy with my whole heart. 
                    I am alone, and feel the charm of existence in this spot.
                  </Typrography>
                  <Button
                    Class="button1 btn button2 gradient-color"
                    Name="Explore"
                    BtnIcon="btn-icon"
                  />
                </div>
              </ConentContainer>
            </Column>
            <Column 
              isSize={{ mobile: 12, tablet: 8, desktop: 7}} 
              isMarginless 
              isPaddingless
            >
              <div className="service-block-content">
                <Columns isDisplay="flex-tablet">
                  <Column 
                    isMarginless 
                    isPaddingless 
                    isSize={{mobile: 12, tablet: 6 }} 
                  >
                    <div className="service-block1">
                      {Servicedata.map((data, i) => (
                        <Card 
                          index={i}
                          key={data.id}
                          icon={data.Icon}
                          title={data.title}
                          content={data.content}
                        />
                      ))}
                    </div>
                  </Column>
                  <Column isSize={{ mobile:12, tablet: 6 }} >
                    <div className="service-block2">
                      {Servicedata1.map((data, i) => (
                        <Card 
                          index={i}
                          key={data.id}
                          icon={data.Icon}
                          title={data.title}
                          content={data.content}
                        />
                      ))}
                    </div>
                  </Column>
                </Columns>
              </div>
            </Column>
          </Columns>
        </Container>
      </div> 
    </Section>
  );
};

export default Service;
