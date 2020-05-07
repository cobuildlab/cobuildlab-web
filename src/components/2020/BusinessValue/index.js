import React from 'react';
import PropTypes from 'prop-types';
import { Container, Columns, Column } from 'bloomer';
import Typography from '../Typography';
import ButtonDefault from '../Button/ButtonDefault';
import Image from '../Image';

import styles from './css/index.module.scss';
import componse from '../../../utils/styles-componse';

//TODO import correct icons
import img1 from '../../../resources/2020/home/coubuild-b.svg';
import img2 from '../../../resources/2020/home/coubuild-t.svg';
import Typrography from '../Typography';

const title = {
  default: {
    level: 4,
    fontWeight: 'bold',
  },
  lg: {
    level: 2,
    fontWeight: 'bold',
  },
};

const subTitle = {
  default: {
    level: 4,
    fontWeight: 'bold',
  },
  lg: {
    level: 5,
    fontWeight: 'bold',
  },
};

const paragraph = {
  default: {
    level: 11,
    fontWeight: 'normal',
  },
  lg: {
    level: 10,
    fontWeight: 'normal',
  },
};

const ContentWrapper = ({ children, direction }) => (
  <div className={styles.business_value_content}>
    <div
      className={componse(
        styles.business_value_overlay,
        styles[`business_value_overlay_${direction}`],
      )}
    />
    <div className={styles.business_value_content_container}>{children}</div>
  </div>
);

ContentWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  direction: PropTypes.string.isRequired,
};

const ContentTitle = ({ children, hasTextAlign }) => (
  <Typography tag="h4" size={subTitle} hasTextAlign={hasTextAlign}>
    {children}
  </Typography>
);

ContentTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  hasTextAlign: PropTypes.string.isRequired,
};

const ContentParagraph = ({ children, hasTextAlign }) => (
  <div className={styles.business_value_paragraph}>
    <Typography tag="span" size={paragraph} hasTextAlign={hasTextAlign}>
      {children}
    </Typography>
  </div>
);

ContentParagraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  hasTextAlign: PropTypes.string.isRequired,
};

const IconList = ({ children, isLeft }) => {
  const className = isLeft
    ? componse(styles.business_value_content_footer, styles.business_value_content_right)
    : styles.business_value_content_footer;
  return <ul className={className}>{children}</ul>;
};

IconList.defaultProps = {
  isLeft: false,
};

IconList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  isLeft: PropTypes.bool,
};

const IconItem = ({ icon, direction }) => {
  const className = styles[`business_value_icon_item_${direction}`];
  return (
    <li className={className}>
      <Image src={icon} alt="business value" />
    </li>
  );
};

IconItem.propTypes = {
  icon: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
};

const ContentFooter = ({ direction, to }) => {
  const className = componse(
    styles.business_value_content_footer,
    styles[`business_value_content_${direction}`],
  );
  return (
    <div className={className}>
      <ButtonDefault to={to}>Contact US!</ButtonDefault>
    </div>
  );
};

ContentFooter.defaultProps = {
  to: '',
};

ContentFooter.propTypes = {
  to: PropTypes.string,
  direction: PropTypes.string.isRequired,
};

const BusinessValue = () => (
  <Container>
    <div>
      <div className="section-title">
        <Typography tag="h2" size={title} hasTextAlign="centered">
          Value
        </Typography>
      </div>
      <Columns>
        <Column isSize={{ mobile: 12, desktop: 4 }}>
          <Image src={img1} alt="business value" />
        </Column>
        <Column isSize={{ mobile: 12, desktop: 8 }}>
          <ContentWrapper direction="right">
            <ContentTitle hasTextAlign="left">
              Business <span className="text-color-orange">Value</span>
            </ContentTitle>
            <ContentParagraph hasTextAlign="left">
              We differentiate our selves by providing unique value to our customer base.
              <br />
              <br />
              More than 15 years of experience give us the advantage to develop your products with
              the best techniques.
              <br />
              <br />
              <ul>
                <li>
                  <Typrography tag="h3" className="about-twosub-title">
                    ☛ Quality apps utilizing modern technologies
                  </Typrography>
                  <br />
                </li>
                <li>
                  <Typrography tag="h3" className="about-twosub-title">
                    ☛ Rapid development and feature-rich
                  </Typrography>
                  <br />
                </li>
                <li>
                  <Typrography tag="h3" className="about-twosub-title">
                    ☛ Custom mobile and cloud solutions
                  </Typrography>
                  <br />
                </li>
                <li>
                  <Typrography tag="h3" className="about-twosub-title">
                    ☛ iOS and Android experience
                  </Typrography>
                  <br />
                </li>
                <li>
                  <Typrography tag="h3" className="about-twosub-title">
                    ☛ Marketing and Launch Services
                  </Typrography>
                </li>
              </ul>
            </ContentParagraph>
            {/*<IconList>*/}
            {/*  <IconItem icon={icon1} direction="right" />*/}
            {/*  <IconItem icon={icon1} direction="right" />*/}
            {/*  <IconItem icon={icon1} direction="right" />*/}
            {/*</IconList>*/}
            <ContentFooter to={'/#contact'} direction="left" />
          </ContentWrapper>
        </Column>
      </Columns>
      <br />
      <br />
      <br />
      <Columns>
        <Column isSize={{ mobile: 12, desktop: 8 }}>
          <ContentWrapper direction="left">
            <ContentTitle hasTextAlign="right">
              Technical <span className="text-color-orange">Expertise</span>
            </ContentTitle>
            <ContentParagraph hasTextAlign="right">
              A Software development Company build by developers.
              <br />
              <br />
              <ul>
                <li>
                  <Typrography tag="h3" className="about-twosub-title">
                    ☛ Support 24/7.
                  </Typrography>
                  <br />
                </li>
                <li>
                  <Typrography tag="h3" className="about-twosub-title">
                    ☛ Serverless cloud tooling supported by major vendors like Amazon Web Services
                    and Google Cloud.
                  </Typrography>
                  <br />
                </li>
                <li>
                  <Typrography tag="h3" className="about-twosub-title">
                    ☛ Quality Insurance in all our releases
                  </Typrography>
                  <br />
                </li>
                <li>
                  <Typrography tag="h3" className="about-twosub-title">
                    ☛ Agile and Lean techniques
                  </Typrography>
                  <br />
                </li>
                <li>
                  <Typrography tag="h3" className="about-twosub-title">
                    ☛ A Full service company.
                  </Typrography>
                </li>
              </ul>
            </ContentParagraph>
            {/*<IconList isLeft>*/}
            {/*  <IconItem icon={icon1} direction="left" />*/}
            {/*  <IconItem icon={icon1} direction="left" />*/}
            {/*  <IconItem icon={icon1} direction="left" />*/}
            {/*</IconList>*/}
            <ContentFooter to={'/#contact'} direction="right" />
          </ContentWrapper>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 4 }}>
          <div className={styles.business_value_img_container}>
            <Image src={img2} alt="business value" />
          </div>
        </Column>
      </Columns>
    </div>
  </Container>
);

export default BusinessValue;
