import React from 'react';
import { Container } from 'reactstrap';
import { Subtitle, Description, Titlespan2 } from '../../components/title';
import PreviewIcon from '../../components/icon';
import { caretRight } from 'react-icons-kit/fa/caretRight';
import './video.scss';

/**
 *
 */
function Video() {
  return (
    <section className="video-wrapper" id="video">
      <div className="gradient-color overlay"></div>
      <Container>
        <div className="video-content-block main-title-wrapper">
          <Titlespan2 Class="sitemain-subtitle" Name="Our Video " Label="Presentation." />
          <Subtitle Class="site-subtitle2" Name="You Should Know More About Us" />

          <Description
            Class="video-dec"
            Name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
          />
          <div className="video-btn">
            <span>
              <PreviewIcon icon={caretRight} />
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Video;
