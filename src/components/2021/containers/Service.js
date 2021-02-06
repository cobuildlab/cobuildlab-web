import React from 'react';
import PropTypes from 'prop-types';
import { Container, Columns, Column, Section } from 'bloomer';
import { objectGroup, areaChart, cogs, users } from 'react-icons-kit/fa';
import PreviewIcon from '../../enterprise/components/icon';
import '../../../assets/2021/scss/service.scss';
import Typography from '../../2020/Typography';
import { SmoothScrollingButton } from '../button/SmoothScrollingButton';

const ConentContainer = ({ children }) => (
  <div className="service-content-1 main-title-wrapper">{children}</div>
);

ConentContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const Card = ({ index, icon, title, children }) => (
  <div className={`service-${index} service-content`} style={{ marginBottom: '10px' }}>
    <div className="service-icon">
      <span>
        <PreviewIcon icon={icon} />
      </span>
    </div>
    <div className="service-content-dec">
      <Typography tag="h5" className="service-title">
        {title}
      </Typography>
      {children}
    </div>
  </div>
);

Card.propTypes = {
  index: PropTypes.number.isRequired,
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

/**
 *
 * @returns {object} - The Skills component.
 * @class
 */
const Service = () => {
  return (
    <Section>
      <div className="service-wrapper">
        <Container>
          <Columns>
            <Column isMarginless isPaddingless isSize={{ mobile: 12, tablet: 4, desktop: 4 }}>
              <ConentContainer>
                <div className="service-content-1 main-title-wrapper">
                  <Typography tag="h2" className="sitemain-subtitle">
                    Services:
                  </Typography>
                  <Typography tag="h3" className="service-title">
                    From Web and Mobile Apps to Cloud Solutions to help you with:
                  </Typography>
                  <Typography tag="p" className="service-dec-content">
                    ☛ Quality apps utilizing modern technologies
                  </Typography>
                  <Typography tag="p" className="service-dec-content">
                    ☛ Rapid and feature-rich development
                  </Typography>
                  <Typography tag="p" className="service-dec-content">
                    ☛ Custom mobile and cloud solutions
                  </Typography>
                  <Typography tag="p" className="service-dec-content">
                    ☛ iOS and Android experience
                  </Typography>
                  <Typography tag="p" className="service-dec-content">
                    ☛ No code / Low code solutions
                  </Typography>
                  <br />
                  <SmoothScrollingButton href="#" isCapitalize={false}>
                    Contact US!
                  </SmoothScrollingButton>
                </div>
              </ConentContainer>
            </Column>
            <Column isSize={{ mobile: 12, tablet: 8, desktop: 8 }} isMarginless isPaddingless>
              <div className="service-block-content">
                <Columns isDisplay="flex-tablet">
                  <Column isMarginless isPaddingless isSize={{ mobile: 12, tablet: 6 }}>
                    <div className="service-block1">
                      <Card
                        index={2}
                        key={2}
                        icon={objectGroup}
                        title={'Custom Software Development'}>
                        <Typography tag="p" className="service-dec-content">
                          {
                            'Cobuild Lab puts together managed teams to develop your most challenging projects.'
                          }
                        </Typography>
                      </Card>
                      <Card index={1} key={1} icon={cogs} title={'IOS and Android development'}>
                        <Typography tag="p" className="service-dec-content">
                          {
                            'Higher customer engagement, strong built awareness and recognition, customer loyalty improvement, and extra revenue-stream are some of the advantages you acquire when developing a mobile app.'
                          }
                        </Typography>
                      </Card>
                    </div>
                  </Column>
                  <Column isSize={{ mobile: 12, tablet: 6 }}>
                    <div className="service-block2">
                      <Card index={3} key={3} icon={areaChart} title={'Product Development'}>
                        <Typography tag="p" className="service-dec-content">
                          {
                            'We team up with our clients to explore new and early-stage ideas and transform them into Web and Mobile Software Products.'
                          }
                        </Typography>
                      </Card>
                      <Card index={4} key={4} icon={users} title={'Web Development'}>
                        <Typography tag="p" className="service-dec-content">
                          {
                            'More than a website, your business needs a space where your objectives are accomplished by effectively communicating your brand to your potential customers. We will make sure this happens by developing a general application that allows you to connect directly with your clients, using real-time communication, and protect your data. We build for all industries and on any complexity level.'
                          }
                        </Typography>
                      </Card>
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

export { Service };
