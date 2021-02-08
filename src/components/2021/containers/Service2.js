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
                          'Cobuild Lab puts together managed teams to develop your most challenging projects.'
                        }
                      </Typography>
                    </Card>
                    <Card index={1} key={1} icon={cogs} title={'Process and Workflow Automation'}>
                      <Typography tag="p" className="service-dec-content">
                        {
                          'Custom software development can be the solution that revolutionizes your processes and unlocks your full potential.'
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
                          'We use Machine Learning and Artificial Intelligence to maximize ROI or minimize errors and costs.'
                        }
                      </Typography>
                    </Card>
                    <Card index={4} key={4} icon={areaChart} title={'Product Development'}>
                      <Typography tag="p" className="service-dec-content">
                        {
                          'We team up with our clients to explore new and early-stage ideas and transform them into Web and Mobile Software Products.'
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
                          'We put together top of the notch experts to diagnose and explore opportunities to implement technology.'
                        }
                      </Typography>
                    </Card>
                    <Card index={1} key={1} icon={searchPlus} title={'IT Infrastructure Support'}>
                      <Typography tag="p" className="service-dec-content">
                        {
                          'Support and Maintenance is critical for any modern organization. Cobuild Lab provide fault tolerant tools to keep your operations going even in the most critical scenarios.'
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
