import React from 'react';
import PropTypes from 'prop-types';
import { Container, Columns, Column, Section } from 'bloomer';
import { objectGroup, areaChart, cogs, users } from 'react-icons-kit/fa';
import PreviewIcon from '../../components/icon';
import Typography from '../../../2020/Typography';
import { SmoothScrollingButton } from '../../../2021/button/SmoothScrollingButton';
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
                    Business Solutions
                  </Typography>
                  {/*<div className="sub-title-wrapper">*/}
                  {/*  <Typography tag="h3" className="site-subtitle2">*/}
                  {/*    From Web and Mobile Apps to Cloud Solutions and Staff Augmentation.*/}
                  {/*  </Typography>*/}
                  {/*</div>*/}
                  <Typography tag="h3" className="service-title">
                    From Web and Mobile Apps to Cloud Solutions and Staff Augmentation.
                  </Typography>
                  {/*<Typography tag="p" className="service-dec">*/}
                  {/*  Technology and Business are more intertwined than ever, in fact, Technology has*/}
                  {/*  impacted every business process you can imagine - and with razor-thin margins*/}
                  {/*  the norm, the only way to increase revenue is to revolutionize those processes*/}
                  {/*  used to conduct business.*/}
                  {/*</Typography>*/}
                  <Typography tag="h3" className="about-two sub-title">
                    <span className="enterprise-text-orange">Custom Software solutions can:</span>
                  </Typography>
                  <Typography tag="p" className="service-dec-content">
                    - Reduce Costs
                  </Typography>
                  <Typography tag="p" className="service-dec-content">
                    - Scale the business operations
                  </Typography>
                  <Typography tag="p" className="service-dec-content">
                    - Avoid the high risks and costs of development
                  </Typography>
                  <Typography tag="p" className="service-dec-content">
                    - Promote employee development
                  </Typography>
                  <Typography tag="p" className="service-dec-content">
                    - Provide you with the necessary expertise
                  </Typography>
                  <br />
                  <SmoothScrollingButton href="#contact" isCapitalize={false}>
                    Get a Free Consultation
                  </SmoothScrollingButton>
                </div>
              </ConentContainer>
            </Column>
            <Column isSize={{ mobile: 12, tablet: 8, desktop: 8 }} isMarginless isPaddingless>
              <div className="service-block-content">
                <Columns isDisplay="flex-tablet">
                  <Column isMarginless isPaddingless isSize={{ mobile: 12, tablet: 6 }}>
                    <div className="service-block1">
                      <Card index={2} key={2} icon={objectGroup} title={'Software Projects'}>
                        <Typography tag="p" className="service-dec-content">
                          {
                            'Cobuild Lab puts together managed teams to develop your most challenging projects.'
                          }
                        </Typography>
                      </Card>
                      <Card index={1} key={1} icon={cogs} title={'Process and Workflow Automation'}>
                        <Typography tag="p" className="service-dec-content">
                          {
                            'Custom software development can be the solution that revolutionizes your processes and become an additional revenue stream itself by selling it to others businesses.'
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
                      <Card index={4} key={4} icon={users} title={'Staff augmentation'}>
                        <Typography tag="p" className="service-dec-content">
                          {
                            'Web Developers, Mobile Developers, QA Analysts and Product Managers ready to drive success to your existing needs. '
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

export default Service;
