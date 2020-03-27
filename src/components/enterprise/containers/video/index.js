import React from 'react';
import { Container, section } from 'reactstrap';
import { Subtitle, Description, Titlespan2 } from '../../components/title';
import PreviewIcon from '../../components/icon';
import { caretRight } from 'react-icons-kit/fa/caretRight';
import { Section } from 'bloomer';
import componse from '../../../../utils/styles-componse';
import styles from './css/index.module.scss';
// import './video.scss';


const Video = () => {
  return (
    <Section isPaddingless>
      <div 
        className= {componse(
          styles.video_wrapper,
          'video-wrapper',
          'enterprise-section'
        )} 
      >
        <div className={componse( styles.gradient_color, styles.overlay)} />
        <Container>
          <div 
            className={componse(
              styles.video_content_block,
              styles.main_title_wrapper,
              'main-title-wrapper',
              'video-content-block'
            )}
          >
            <Titlespan2 
              Class="sitemain-subtitle" 
              Name="Our Video " 
              Label="Presentation." 
            />
            <Subtitle 
              Class="site-subtitle2" 
              Name="You Should Know More About Us" 
            />
            <Description
              Class={styles.video_dec}
              Name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
            />
            <div className={styles.video_btn}>
              <span>
                <PreviewIcon icon={caretRight} />
              </span>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Video;
