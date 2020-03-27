import React from 'react';
import { Container, Columns, Column, Section } from 'bloomer';
import { Subtitle, Description, Titlespan2 } from '../../components/title';
import Button from '../../components/button';
import Image from '../../components/image';
import componse from '../../../../utils/styles-componse';
import AboutImg from '../../../../assets/images/about/about-img.png';
import styles from './css/index.module.scss';

// TODO check this style gradient-color

const About = () => {
  return (
    <Section isPaddingless>
      <div className={styles.about_wrapper}>
        <Container>
          <Columns isDisplay="flex-mobile" isCentered>
            <Column isSize={{ mobile: 11, desktop: 6 }}>
              <div className={styles.container}>
                <div className={componse(styles.about_content_block, styles.main_title_wrapper)}>
                  <Subtitle Class={styles.sitemain_subtitle} Name="Business solution" />
                  <Subtitle Class={styles.site_subtitle2} Name="We gives you the best" />
                  <Description
                    Class={componse(styles.about_dec, styles.about_dec_1)}
                    Name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown dummy text of the printing"
                  />
                  <Titlespan2
                    Class={styles.about_twosub_title}
                    Name="What we can help you"
                    Label="Achive"
                  />
                  <Description
                    Class={styles.about_dec}
                    Name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"
                  />
                  <Button
                    Class="button1 button4 btn"
                    Name="HIRE US NOW"
                    Title="gradient-color"
                    BtnIcon="btn-icon gradient-color1"
                  />
                </div>
              </div>
            </Column>
            <Column isSize={{ mobile: 11, desktop: 6 }} isHidden="mobile">
              <div className={styles.container}>
                <div className={styles.about_image}>
                  <Image Path={AboutImg} Class="about-img" />
                </div>
              </div>
            </Column>
          </Columns>
        </Container>
      </div>
    </Section>
  );
};

export default About;
