import React from 'react';
import PropTypes from 'prop-types';
import { Container, Columns, Column, Section } from 'bloomer';
import { objectGroup, areaChart, cogs, users } from 'react-icons-kit/fa';
import PreviewIcon from '../../components/icon';
import Typrography from '../../../2020/Typography';
import ButtonSmoothScrolling from '../../../2020/Button/ButtonSmoothScrolling';
import './service.scss';

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
      <Typrography tag="h5" className="service-title">
        {title}
      </Typrography>
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
                  <Typrography tag="h2" className="sitemain-subtitle">
                    Business Solutions
                  </Typrography>
                  <Typrography tag="h3" className="service-title">
                    From Web and Mobile Apps to Cloud Solutions to help you:
                  </Typrography>
                  <Typrography tag="p" className="service-dec-content">
                    - Scale business operations
                  </Typrography>
                  <Typrography tag="p" className="service-dec-content">
                    - Reduce Errors and Costs
                  </Typrography>
                  <Typrography tag="p" className="service-dec-content">
                    - Differentiate from Competitors
                  </Typrography>
                  <Typrography tag="p" className="service-dec-content">
                    - Create a new REVENUE Stream
                  </Typrography>
                  <br />
                  <ButtonSmoothScrolling href="#contact" isCapitalize={false}>
                    Get a Free Consultation
                  </ButtonSmoothScrolling>
                </div>
              </ConentContainer>
            </Column>
            <Column isSize={{ mobile: 12, tablet: 8, desktop: 8 }} isMarginless isPaddingless>
              <div className="service-block-content">
                <Columns isDisplay="flex-tablet">
                  <Column isMarginless isPaddingless isSize={{ mobile: 12, tablet: 6 }}>
                    <div className="service-block1">
                      <Card index={2} key={2} icon={objectGroup} title={'Software Projects'}>
                        <Typrography tag="p" className="service-dec-content">
                          {
                            'Cobuild Lab puts together managed teams to develop your most challenging projects.'
                          }
                        </Typrography>
                      </Card>
                      <Card index={1} key={1} icon={cogs} title={'Process and Workflow Automation'}>
                        <Typrography tag="p" className="service-dec-content">
                          {
                            'Custom software development can be the solution that revolutionizes your processes and become an additional revenue stream itself by selling it to others businesses.'
                          }
                        </Typrography>
                      </Card>
                    </div>
                  </Column>
                  <Column isSize={{ mobile: 12, tablet: 6 }}>
                    <div className="service-block2">
                      <Card index={3} key={3} icon={areaChart} title={'Product Development'}>
                        <Typrography tag="p" className="service-dec-content">
                          {
                            'We team up with our clients to explore new and early-stage ideas and transform them into Web and Mobile Software Products.'
                          }
                        </Typrography>
                      </Card>
                      <Card index={4} key={4} icon={users} title={'Staff augmentation'}>
                        <Typrography tag="p" className="service-dec-content">
                          {
                            'Web Developers, Mobile Developers, QA Analysts and Product Managers ready to drive success to your existing needs. '
                          }
                        </Typrography>
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

export default Service;
