import React from 'react';
import { Container, Columns, Column, Section } from 'bloomer';
import Skills_img from '../../../assets/2021/images/cobuild-lab-customers.png';
import { Progressbar } from './ProgressBar';
import Typography from '../../2020/Typography';
import './skills.scss';
import '../../../assets/scss/variable.scss';

/**
 * @returns {object} - The Skills component.
 */
function SkillsDevelopers() {
  return (
    <Section>
      <div className="skills-wrapper" id="skills">
        <Container>
          <Columns>
            <Column isHidden="mobile" isSize={6}>
              <div className="skills-image">
                <img src={Skills_img} Class="logo-img" alt="" />
              </div>
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
                  Our Top Developers are battle tested professionals.
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
                        ProgressTitle="Web and Mobile Oriented"
                        ProgressClass="progressbar-title"
                      />
                      <Progressbar
                        Class="progressbar3"
                        Percenteg="90"
                        ProgressTitle="Open Source enablers"
                        ProgressClass="progressbar-title"
                      />
                      <Progressbar
                        Class="progressbar4"
                        Percenteg="95"
                        ProgressTitle="Rigorous QA testing"
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

export { SkillsDevelopers };
