import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Typography from '../../../2020/Typography';
import PreviewIcon from '../../components/icon';

const ValuePropsCard = ({ image, icon, title, content, index }) => (
  <div className={`blog-${index}`}>
    <div className="blog-content">
      <div className="blog-first-block">
        <Img fluid={image} alt="" />
      </div>
      <div className="blog-second-block">
        <div className="blog-left-content">
          <div className="blog-icon">
            <span>
              <PreviewIcon icon={icon} />
            </span>
          </div>
        </div>
        <div className="blog-right-content">
          <Typography className="blog-title" tag="h5">
            {title}
          </Typography>
          <Typography className="blog-dec" tag="p">
            {content}
          </Typography>
        </div>
      </div>
    </div>
  </div>
);

ValuePropsCard.propTypes = {
  image: PropTypes.object.isRequired,
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default ValuePropsCard;
