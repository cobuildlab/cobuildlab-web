import React, { useState } from 'react';
import { Container, Hero, HeroHeader, Section, Columns, Column } from 'bloomer';
import 'bulma/css/bulma.css';

// COMPONENTS
import Layout from '../components/2020/Layout';
import Header from '../components/header/Header';
import { SeoMetaTags } from '../components/2021/SeoMetaTags';

import ServicesHeader from '../components/services/ServicesHeader';
import ServicesCard from '../components/services/card/ServicesCard';

import Contact from '../components/2020/HomePageContact';
import ServicesBannerBackgroundTop from '../components/services/ServicesBannerBackgroundTop';
import ServicesBannerBackgroundBottom from '../components/services/ServicesBannerBackgroundBottom';

import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import ServicesTag from '../components/services/ServicesTag';

const ContentStyle = styled.div`
  display: contents;
`;

const ColumnStyle = styled(Column)`
  z-index: 2;
`;

const ColumnStyle2 = styled(Column)`
  z-index: 2;
  min-height: 573px;
`;

const Services = () => {
  const [tag, setTag] = useState('customSoftware');

  const activeTag = (value) => {
    setTag(value);
  };

  return (
    <Layout>
      <SeoMetaTags title="Services" description="Privacy Policy for the Cobuild Lab" />
      <Hero>
        <HeroHeader>
          <Header />
        </HeroHeader>
      </Hero>
      <Section>
        <ServicesBannerBackgroundTop />
        <ServicesBannerBackgroundBottom />
        <Container>
          <ServicesHeader />
        </Container>
      </Section>

      <Section>
        <Columns>
          <ColumnStyle isSize={{ mobile: 12, tablet: 4, desktop: 2 }}>
            <ServicesTag tag={tag} activeTag={activeTag} />
          </ColumnStyle>
          <ColumnStyle2 isSize={{ mobile: 12, tablet: 8, desktop: 10 }}>
            <Columns isDisplay="flex" isMultiline>
              {tag === 'customSoftware' ? (
                <ContentStyle>
                  <ServicesCard
                    title={'Custom Software'}
                    subtitle={'Development'}
                    cover={'Tailor-made software to take care of your business needs'}
                    to={'custom-software-development'}
                    image={
                      <StaticImage
                        src={
                          './../assets/images/service/card/iconos-Small-Business-Custom-Software-Development.svg'
                        }
                        alt="Custom Software"
                      />
                    }
                  />
                  <ServicesCard
                    title={'Customer Relationship'}
                    subtitle={'Management System'}
                    cover={
                      'Centralize, optimize and streamline all interactions and communications with your clients'
                    }
                    to={'custom-customer-management-system'}
                    image={
                      <StaticImage
                        src={
                          './../assets/images/service/card/iconos-Small-Business-Field-Service-Management-System.svg'
                        }
                        alt="Customer relationship"
                      />
                    }
                  />
                  <ServicesCard
                    title={'Field Service'}
                    subtitle={'Management System'}
                    cover={
                      'Automate your team’s field operations and services through mobile systems'
                    }
                    to={'field-service-management-system'}
                    image={
                      <StaticImage
                        src={
                          './../assets/images/service/card/iconos-Small-Business-Field-Service-Management-System.svg'
                        }
                        alt="Field service"
                      />
                    }
                  />
                  <ServicesCard
                    title={'Custom Learning'}
                    subtitle={'Management System'}
                    cover={
                      'Boost the learning performance of your employees on the most recent operational or technological changes'
                    }
                    to={'custom-learning-management-system'}
                    image={
                      <StaticImage
                        src={
                          './../assets/images/service/card/iconos-Small-Business-Custom-Learning-Management-System.svg'
                        }
                        alt="Custom learning"
                      />
                    }
                  />
                  <ServicesCard
                    title={'IT Support'}
                    subtitle={'Services'}
                    cover={
                      'Let us solve your technology issues with our IT Support Services so you can grow your business'
                    }
                    to={'it-support'}
                    image={
                      <StaticImage
                        src={'./../assets/images/service/card/iconos-Main-Services-It-Support.svg'}
                        alt="It support"
                      />
                    }
                  />
                  <ServicesCard
                    title={'Custom Project'}
                    subtitle={'Management System'}
                    cover={'Fully personalized Project Management'}
                    to={'custom-project-management-system'}
                    image={
                      <StaticImage
                        src={'./../assets/images/service/card/iconos-Main-Services-Agile.svg'}
                        alt="custom project"
                      />
                    }
                  />
                  <ServicesCard
                    title={'IT Staff'}
                    subtitle={'Augmentation'}
                    cover={
                      "Recruit the technological talent you're looking for right where you need it & exactly when you need it"
                    }
                    to={'it-staff-augmentation'}
                    image={
                      <StaticImage
                        src={'./../assets/images/service/card/iconos_Staff-Augmentation.svg'}
                        alt="it staff augmentation"
                      />
                    }
                  />
                  <ServicesCard
                    title={'Custom Inventory'}
                    subtitle={'Management System'}
                    cover={
                      'Develop full software solutions with less code, in less time, and with fewer errors'
                    }
                    to={'custom-inventory-management-system'}
                    image={
                      <StaticImage
                        src={
                          './../assets/images/service/card/iconos-custom-management-inventory-system.png'
                        }
                        alt="Custom Inventory"
                      />
                    }
                  />
                  <ServicesCard
                    title={'Human Resources '}
                    subtitle={'Management System'}
                    cover={"Get your employee's information management to the next level"}
                    to={'human-resources-management-services'}
                    image={
                      <StaticImage
                        src={'./../assets/images/service/card/iconos-human-resources.svg'}
                        alt="Human Resources"
                      />
                    }
                  />
                </ContentStyle>
              ) : null}

              {tag === 'enterprisesDevelopment' ? (
                <ContentStyle>
                  <ServicesCard
                    title={'Enterprise Software'}
                    subtitle={'Development'}
                    cover={'The best solution for a Logistics and Supply Chain Issues'}
                    to={'enterprise-software-development'}
                    image={
                      <StaticImage
                        src={
                          './../assets/images/service/card/iconos-Logistic-Enterprise-Software-Development.svg'
                        }
                        alt="Enterprise Software"
                      />
                    }
                  />
                  <ServicesCard
                    title={'Process'}
                    subtitle={'Automation'}
                    cover={'Save time and money transforming your processes'}
                    to={'process-automation'}
                    image={
                      <StaticImage
                        src={
                          './../assets/images/service/card/iconos_Process-Automation_Main-Services-Web-Design_Logistic-Process-Automation_Logistic-Process-Automation.svg'
                        }
                        alt="process automation"
                      />
                    }
                  />
                  <ServicesCard
                    title={'Digital'}
                    subtitle={'Transformation'}
                    cover={'We’ll help you find out exactly where you are and what you need'}
                    to={'digital-transformation'}
                    image={
                      <StaticImage
                        src={
                          './../assets/images/service/card/iconos_Logistic-Digital-Transformation_Logistic-Digital-Transformation.svg'
                        }
                        alt="digital transformation"
                      />
                    }
                  />
                  <ServicesCard
                    title={'Security '}
                    subtitle={'Compliance'}
                    cover={
                      'Take advantage of these tools to comply with relevant internal laws, regulations, and procedures'
                    }
                    to={'security-compliance'}
                    image={
                      <StaticImage
                        src={'./../assets/images/service/card/iconos-security.png'}
                        alt="Custom Inventory"
                      />
                    }
                  />
                  <ServicesCard
                    title={'Web Accessibility '}
                    subtitle={'Compliance'}
                    cover={'Ensure Your Website Compliance With Accessibility Standards'}
                    to={'web-acessibility-compliance'}
                    image={
                      <StaticImage
                        src={
                          './../assets/images/service/card/icono-web-accessibility-compliance.png'
                        }
                        alt="Web Accessibility Compliance"
                      />
                    }
                  />
                </ContentStyle>
              ) : null}
              {tag === 'softwareDevelopment' ? (
                <ContentStyle>
                  <ServicesCard
                    title={'Web'}
                    subtitle={'Development'}
                    cover={'We work behind the curtain to build gorgeous and engaging websites'}
                    to={'web-development'}
                    image={
                      <StaticImage
                        src={
                          './../assets/images/service/card/iconos-Main-Services-Web-Development.svg'
                        }
                        alt="web development"
                      />
                    }
                  />
                  <ServicesCard
                    title={'APP'}
                    subtitle={'Development'}
                    cover={'We develop native apps for iOS and Android'}
                    to={'app-development'}
                    image={
                      <StaticImage
                        src={
                          './../assets/images/service/card/iconos-Main-Services-APP-Development.svg'
                        }
                        alt="App development"
                      />
                    }
                  />
                  <ServicesCard
                    title={'Cross-Platform'}
                    subtitle={'Development'}
                    cover={'Let us take your app to multiple platforms and devices'}
                    to={'cross-platform-development'}
                    image={
                      <StaticImage
                        src={
                          './../assets/images/service/card/iconos-Main-Services-Cross-Platform-Development.svg'
                        }
                        alt="Cross Platform"
                      />
                    }
                  />
                  <ServicesCard
                    title={'Website'}
                    subtitle={'Development'}
                    cover={'We create appealing and beautiful content for your web'}
                    to={'website-development'}
                    image={
                      <StaticImage
                        src={
                          './../assets/images/service/card/iconos-web-design_Main-Services-Web-Design_Main Services-Web-Design.svg'
                        }
                        alt="Website Development"
                      />
                    }
                  />
                  <ServicesCard
                    title={'Low code or \n'}
                    subtitle={'no code development'}
                    cover={
                      'Develop full software solutions with less code, in less time, and with fewer errors\n'
                    }
                    to={'low-code-or-no-code-development'}
                    image={
                      <StaticImage
                        src={'./../assets/images/service/card/iconos_Low Code-No-Code.svg'}
                        alt="Low code or no code development"
                      />
                    }
                  />
                  <ServicesCard
                    title={'Robotic'}
                    subtitle={'Process Automation\n'}
                    cover={
                      'Accelerate and optimize tasks and processes with a scalable digital workforce'
                    }
                    to={'robotic-process-automation'}
                    image={
                      <StaticImage
                        src={
                          './../assets/images/service/card/iconos_Robotic-Process-Automation.svg'
                        }
                        alt="Robotic Process Automation"
                      />
                    }
                  />
                  <ServicesCard
                    title={'IoT \n'}
                    subtitle={'Development'}
                    cover={
                      'We help your company to harness the full potential of Internet of Things\n' +
                      'and offer IoT development services for boosting your business'
                    }
                    to={'iot-development'}
                    image={
                      <StaticImage
                        src={'./../assets/images/service/card/iconos_Internet-of-the-thing-IoT.png'}
                        alt="IoT Development"
                      />
                    }
                  />
                  <ServicesCard
                    title={'Artificial Intelligence'}
                    subtitle={'Development'}
                    cover={
                      'We turn your AI Vision into reality by applying our intelligence and experience'
                    }
                    to={'artificial-intelligence-development'}
                    image={
                      <StaticImage
                        src={'./../assets/images/service/card/iconos_artificial-inteligence.png'}
                        alt="Artificial Intelligence"
                      />
                    }
                  />
                </ContentStyle>
              ) : null}
              {tag === 'startup' ? (
                <ContentStyle>
                  <ServicesCard
                    title={'Technical Analysis'}
                    subtitle={'For Software Startup Investors'}
                    cover={
                      'All that you must understand about the use and distribution of your resources in the development project you want to support financially'
                    }
                    to={'software-startup-investor'}
                    image={
                      <StaticImage
                        src={'./../assets/images/service/card/iconos-Technical-Analysis.svg'}
                        alt="Technical Analysis"
                      />
                    }
                  />
                  <ServicesCard
                    title={'MVP Software'}
                    subtitle={'Development'}
                    cover={
                      'Receive your customer’s feedback before releasing a fully-fledged product'
                    }
                    to={'mvp-software-development'}
                    image={
                      <StaticImage
                        src={'./../assets/images/service/card/iconos-MVP-Software-Development.png'}
                        alt="Mvp software"
                      />
                    }
                  />
                  <ServicesCard
                    title={'Product'}
                    subtitle={'Development'}
                    cover={'We develop your ideas into marketable products'}
                    to={'product-development'}
                    image={
                      <StaticImage
                        src={
                          './../assets/images/service/card/iconos-Startup-Product-Development.svg'
                        }
                        alt="Product development"
                      />
                    }
                  />
                </ContentStyle>
              ) : null}
            </Columns>
          </ColumnStyle2>
        </Columns>
      </Section>
      <Section>
        <Container>
          <Contact />
        </Container>
      </Section>
    </Layout>
  );
};

export default Services;
