import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import ModalContainer from './MansoryModal';
import {
  MansoryContainer,
  MansoryItem,
  MansoryImage,
  MansorySliderItem,
  MansorySliderImagesWrapper,
} from './MansoryLayout';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default class PortfolioMansory extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);

    const { data } = this.props;

    // events
    this.onClose = this.onClose.bind(this);
    // renders
    this.renderMansoryItems = this.renderMansoryItems.bind(this);
    this.renderSliderItems = this.renderSliderItems.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);

    this.state = {
      visible: false,
      data,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown(event) {
    const { visible } = this.state;
    if (visible && event.keyCode === 27) {
      this.setState({
        visible: false,
      });
    }
  }

  async checkImagesLoad(index) {
    this.slider.slickGoTo(index);
    this.setState({
      visible: true,
    });
  }

  onClose() {
    this.setState({
      visible: false,
    });
  }

  //TODO add validation for src images
  renderMansoryItems() {
    const { data } = this.state;
    return data.map((e, i) => (
      <MansoryItem key={e.node.id} onClick={() => this.checkImagesLoad(i)}>
        <MansoryImage image={getImage(e.node.childImageSharp.gatsbyImageData)} alt={e.node.id} />
      </MansoryItem>
    ));
  }

  renderSliderItems() {
    const { data } = this.state;
    return data.map((e, i) => (
      <div key={e.node.id}>
        <MansorySliderItem>
          <MansorySliderImagesWrapper>
            <GatsbyImage image={getImage(e.node.childImageSharp.gatsbyImageData)} alt={e.node.id} />
          </MansorySliderImagesWrapper>
        </MansorySliderItem>
      </div>
    ));
  }

  render() {
    const { visible } = this.state;
    const mansoryItems = this.renderMansoryItems();
    const sliderItems = this.renderSliderItems();

    return (
      <Fragment>
        <MansoryContainer>{mansoryItems}</MansoryContainer>
        <ModalContainer visible={visible} onClose={this.onClose}>
          <Slider ref={(slider) => (this.slider = slider)} {...settings}>
            {sliderItems}
          </Slider>
        </ModalContainer>
      </Fragment>
    );
  }
}
