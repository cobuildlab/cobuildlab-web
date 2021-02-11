import React from 'react';
import PropTypes from 'prop-types';
import { Container, Columns, Column, Section } from 'bloomer';
import { objectGroup, areaChart, cogs, users, searchPlus } from 'react-icons-kit/fa';
import PreviewIcon from '../../enterprise/components/icon';
import Typography from '../../2020/Typography';
import { SmoothScrollingButton } from '../button/SmoothScrollingButton';
import '../../../assets/2021/scss/service.scss';

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
 * @returns {object} - The Services component.
 * @class
 */
const Service2 = () => {
  return (
    <Section>
      <Container>
        <div className="service-content-1 main-title-wrapper">
          <Typography tag="h2" className="sitemain-subtitle">
            Services:
          </Typography>
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
                      <Typography tag="p" className="service-dec-content">
                        {
                          'We will find the solution for lack of agility for decision making, disparate data and systems, communication delays and bottlenecks, incompatibility with new technologies, and more.'
                        }
                      </Typography>
                    </Card>
                    <Card index={1} key={1} icon={cogs} title={'Process and Workflow Automation'}>
                      <Typography tag="p" className="service-dec-content">
                        {
                          'Reduce monotonous manual data entry with integrated systems and databases. Your customers will enjoy a smooth experience when accessing information at-all times.'
                        }
                      </Typography>
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
                      <Typography tag="p" className="service-dec-content">
                        {
                          'Machine Learning and Artificial Intelligence helps to prevent overstocking, inadequate inventory, and unexpected outputs. Through the automation of time-consuming and error-prone jobs.\n'
                        }
                      </Typography>
                    </Card>
                    <Card index={4} key={4} icon={areaChart} title={'Product Development'}>
                      <Typography tag="p" className="service-dec-content">
                        {
                          'Stay ahead with game-changing technologies, and leverage the opportunities of always keeping pace with the customers’ demands and expectations.'
                        }
                      </Typography>
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
                      <Typography tag="p" className="service-dec-content">
                        {
                          'Solve the uncertainty of not knowing what your business maturity is regarding its digital blueprint. Before Digital Transformation adoption, you need to know exactly where your strengths and weaknesses lie.'
                        }
                      </Typography>
                    </Card>
                    <Card index={1} key={1} icon={searchPlus} title={'IT Infrastructure Support'}>
                      <Typography tag="p" className="service-dec-content">
                        {
                          'We will ensure the stability and high performance of your processes with IT infrastructure support. Issues to decode: unproductive employees, costly digital transformation alternatives, and more.'
                        }
                      </Typography>
                    </Card>
                  </div>
                </Column>
              </Columns>
            </div>
          </Column>
        </Columns>
        <SmoothScrollingButton href="#" isCapitalize={false}>
          Contact US!
        </SmoothScrollingButton>
      </Container>
    </Section>
  );
};

export { Service2 };
