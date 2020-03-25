import React from 'react';
import PropTypes from 'prop-types';
import { Container, Columns, Column } from 'bloomer';
import Typography from '../Typography';
import Button from '../Button';
import Image from '../Image';

import styles from './css/index.module.scss';
import componse from '../../../utils/styles-componse';

//TODO import correct icons
import img1 from '../../../resources/2020/home/coubuild-b.svg';
import img2 from '../../../resources/2020/home/coubuild-t.svg';
import icon1 from '../../../resources/2020/icons/Product-development.svg';

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
    <Typography tag="p" size={paragraph} hasTextAlign={hasTextAlign}>
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
      <Button to={to}>read more</Button>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque, sapien at
              molestie suscipit, sapien leo faucibus ante, quis iaculis mauris nisl nec libero.
              Suspendisse imperdiet in ex ac varius. Donec elementum libero eu purus euismod, sit
              amet congue leo bibendum. Donec lacus ipsum, sodales a dignissim quis, placerat eget
              ex.
            </ContentParagraph>
            <IconList>
              <IconItem icon={icon1} direction="right" />
              <IconItem icon={icon1} direction="right" />
              <IconItem icon={icon1} direction="right" />
            </IconList>
            <ContentFooter direction="left" />
          </ContentWrapper>
        </Column>
      </Columns>
      <br />
      <br />
      <br />
      <br />
      <Columns>
        <Column isSize={{ mobile: 12, desktop: 8 }}>
          <ContentWrapper direction="left">
            <ContentTitle hasTextAlign="right">
              Business <span className="text-color-orange">Value</span>
            </ContentTitle>
            <ContentParagraph hasTextAlign="right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque, sapien at
              molestie suscipit, sapien leo faucibus ante, quis iaculis mauris nisl nec libero.
              Suspendisse imperdiet in ex ac varius. Donec elementum libero eu purus euismod, sit
              amet congue leo bibendum. Donec lacus ipsum, sodales a dignissim quis, placerat eget
              ex.
            </ContentParagraph>
            <IconList isLeft>
              <IconItem icon={icon1} direction="left" />
              <IconItem icon={icon1} direction="left" />
              <IconItem icon={icon1} direction="left" />
            </IconList>
            <ContentFooter direction="right" />
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
