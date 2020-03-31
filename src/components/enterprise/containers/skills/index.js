import React from 'react';
import { Container, Columns, Column, Section } from 'bloomer';
import { Subtitle, Description, Titlespan2, Title } from '../../components/title';
import Image from '../../components/image';
import Skills_img from '../../../../assets/images/skills/skills-img.png';
import Progressbar from './progressbar';
import Typography from '../../../2020/Typography';
import './skills.scss';
import '../../../../assets/scss/variable.scss';

/**
 *
 */
function Skills() {
  return (
    <Section>
      <div className="skills-wrapper" id="skills">
        <Container>
          <Columns>
            <Column isHidden="mobile" isSize={6}>
              <div className="skills-image">
                <Image Path={Skills_img} Class="logo-img" />
              </div>
            </Column>
            <Column isSize={{ mobile: 12, desktop: 6 }}>
              <div className="skills-content-block main-title-wrapper">
                <Typography className="sitemain-subtitle" tag="h3">
                  We Lead From The Front
                </Typography>
                <div className="sub-title-wrapper">
                  <Typography className="site-subtitle2" tag="h2">
                    What We Do
                  </Typography>
                </div>
                <Typography className="skills-dec" tag="p">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when
                  an unknown dummy text of the printing
                </Typography>
                <div className="progress-outer-block">
                  <Typography className="progress-title" tag="h4">
                    Our Best Skill
                  </Typography>
                  <div className="progressbar-wrapper-block">
                    <div className="progressbar-block">
                      <Progressbar
                        Class="progressbar1"
                        Percenteg="96"
                        ProgressTitle="Strategies"
                        ProgressClass="progressbar-title"
                      />
                      <Progressbar
                        Class="progressbar2"
                        Percenteg="88"
                        ProgressTitle="Planning"
                        ProgressClass="progressbar-title"
                      />
                      <Progressbar
                        Class="progressbar3"
                        Percenteg="90"
                        ProgressTitle="Customer Support"
                        ProgressClass="progressbar-title"
                      />
                      <Progressbar
                        Class="progressbar4"
                        Percenteg="94"
                        ProgressTitle="Finance"
                        ProgressClass="progressbar-title"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Column>
          </Columns>
        </Container>
      </div>
    </Section>
  );
}

export default Skills;
