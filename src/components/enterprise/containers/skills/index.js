import React from 'react';
import { Container, Columns, Column, Section } from 'bloomer';
import Progressbar from './progressbar';
import Typography from '../../../2020/Typography';
import './skills.scss';
import '../../../../assets/scss/variable.scss';
import { StaticImage } from 'gatsby-plugin-image';

const Skills = () => {
  return (
    <Section>
      <div className="skills-wrapper">
        <Container>
          <Columns>
            <Column isHidden="mobile" isSize={6}>
              <StaticImage src={'../../../../assets/2021/images/cobuild-lab-customers.png'} />
            </Column>
            <Column isSize={{ mobile: 12, desktop: 6 }}>
              <div className="skills-content-block main-title-wrapper">
                <Typography className="sitemain-subtitle" tag="h3">
                  Technical Values
                </Typography>
                <div className="sub-title-wrapper">
                  <Typography className="site-subtitle2" tag="h2">
                    We Lead From The Front
                  </Typography>
                </div>
                <Typography className="skills-dec" tag="p">
                  From day one, our technique is focused on early results and transparent
                  communication.
                </Typography>
                <div className="progress-outer-block">
                  <Typography className="progress-title" tag="h4">
                    Our Best Skills
                  </Typography>
                  <div className="progressbar-wrapper-block">
                    <div className="progressbar-block">
                      <Progressbar
                        Class="progressbar1"
                        Percenteg="96"
                        ProgressTitle="Cloud based solutions"
                        ProgressClass="progressbar-title"
                      />
                      <Progressbar
                        Class="progressbar2"
                        Percenteg="92"
                        ProgressTitle="Support 24/7"
                        ProgressClass="progressbar-title"
                      />
                      <Progressbar
                        Class="progressbar3"
                        Percenteg="90"
                        ProgressTitle="Serverless approach"
                        ProgressClass="progressbar-title"
                      />
                      <Progressbar
                        Class="progressbar4"
                        Percenteg="95"
                        ProgressTitle="Agile methodology"
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
};

export default Skills;
