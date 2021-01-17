import React from 'react';
import PropTypes from 'prop-types';
import { Container, Columns, Column, Section } from 'bloomer';
import { objectGroup, areaChart, cogs, users, searchPlus } from 'react-icons-kit/fa';
import PreviewIcon from '../enterprise/components/icon';
import Typrography from '../2020/Typography';
import ButtonSmoothScrolling from '../2020/Button/ButtonSmoothScrolling';
import '../enterprise-logistics/containers/service/service.scss';

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
 * @returns {object} - The Services component.
 * @class
 */
const Service = () => {
  return (
    <Section>
      <Container>
        <div className="service-content-1 main-title-wrapper">
          <Typrography tag="h2" className="sitemain-subtitle">
            Services:
          </Typrography>
        </div>
        <Columns>
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
                      <Typrography tag="p" className="service-dec-content">
                        {
                          'Cobuild Lab puts together managed teams to develop your most challenging projects.'
                        }
                      </Typrography>
                    </Card>
                    <Card index={1} key={1} icon={cogs} title={'Process and Workflow Automation'}>
                      <Typrography tag="p" className="service-dec-content">
                        {
                          'Custom software development can be the solution that revolutionizes your processes and unlocks your full potential.'
                        }
                      </Typrography>
                    </Card>
                  </div>
                </Column>
                <Column isSize={{ mobile: 12, tablet: 6 }}>
                  <div className="service-block2">
                    <Card
                      index={3}
                      key={3}
                      icon={users}
                      title={'Artificial Intelligence optimization'}>
                      <Typrography tag="p" className="service-dec-content">
                        {
                          'We use Machine Learning and Artificial Intelligence to maximize ROI or minimize errors and costs.'
                        }
                      </Typrography>
                    </Card>
                    <Card index={4} key={4} icon={areaChart} title={'Product Development'}>
                      <Typrography tag="p" className="service-dec-content">
                        {
                          'We team up with our clients to explore new and early-stage ideas and transform them into Web and Mobile Software Products.'
                        }
                      </Typrography>
                    </Card>
                  </div>
                </Column>
                <Column isMarginless isPaddingless isSize={{ mobile: 12, tablet: 6 }}>
                  <div className="service-block1">
                    <Card
                      index={2}
                      key={2}
                      icon={objectGroup}
                      title={'Digital Transformation Assessment'}>
                      <Typrography tag="p" className="service-dec-content">
                        {
                          'We put together top of the notch experts to diagnose and explore opportunities to implement technology.'
                        }
                      </Typrography>
                    </Card>
                    <Card index={1} key={1} icon={searchPlus} title={'IT Infrastructure Support'}>
                      <Typrography tag="p" className="service-dec-content">
                        {
                          'Support and Maintenance is critical for any modern organization. Cobuild Lab provide fault tolerant tools to keep your operations going even in the most critical scenarios.'
                        }
                      </Typrography>
                    </Card>
                  </div>
                </Column>
              </Columns>
            </div>
          </Column>
        </Columns>
        <ButtonSmoothScrolling href="#" isCapitalize={false}>
          Contact US!
        </ButtonSmoothScrolling>
      </Container>
    </Section>
  );
};

export { Service };
