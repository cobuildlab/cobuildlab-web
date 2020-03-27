import React from 'react';
import PropTypes from 'prop-types';
import { Container, Columns, Column, Section } from 'bloomer';
import componse from '../../../../utils/styles-componse';
import { Subtitle, Description, Title, Titlespan2 } from '../../components/title';
import Button from '../../components/button';
import { Servicedata, Servicedata1 } from '../../../../data/service';
import PreviewIcon from '../../components/icon';
import styles from './css/index.module.scss';

const ConentContainer = ({ children }) => (
  <div className={componse(
    styles.service_content_1, 
    styles.main_title_wrapper
  )}>
    {children}
  </div>
);

ConentContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};


const Card = ({ index, icon, title, content }) => (
  <div className={componse(
    styles[`service_${index}`],
    styles.service_content
  )}
  >
    <div className={styles.service_icon}>
      <span>
        <PreviewIcon icon={icon} />
      </span>
    </div>
    <div className={styles.service_content_dec}>
      <Title Class={styles.service_title} Name={title} />
      <Description Class={styles.service_dec_content} Name={content} />
    </div>
  </div>
);

Card.propTypes = {
  index: PropTypes.number.isRequired,
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

const Service = () => {
  return (
    <Section>
      <div className={styles.container_section}>
        <Container>
          <Columns>
            <Column
              isMarginless 
              isPaddingless 
              isSize={{ mobile: 12, tablet: 4, desktop: 5}}
            >
              <ConentContainer>
                <Titlespan2 Class={styles.sitemain_subtitle} Name="Business" Label="Solutions" />
                <Subtitle Class={styles.site_subtitle2} Name="We Provide The" />
                <Title Class={styles.service_title} Name="Our core features" />
                <Description
                  Class={styles.service_dec}
                  Name="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot."
                />
                <Button
                  Class="button1 btn button2 gradient-color"
                  Name="Explore"
                  BtnIcon="btn-icon"
                />
              </ConentContainer>
            </Column>
            <Column 
              isSize={{ mobile: 12, tablet: 8, desktop: 7}} 
              isMarginless 
              isPaddingless
            >
              <div className={styles.service_block_content}>
                <Columns isDisplay="flex-tablet">
                  <Column 
                    isMarginless 
                    isPaddingless 
                    isSize={{mobile: 12, tablet: 6 }} 
                  >
                    <div className={styles.service_block1}>
                      {Servicedata.map((data, i) => (
                        <Card 
                          index={i}
                          key={data.id}
                          icon={data.Icon}
                          title={data.title}
                          content={data.content}
                        />
                      ))}
                    </div>
                  </Column>
                  <Column isSize={{ mobile:12, tablet: 6 }} >
                    <div className={styles.service_block2}>
                      {Servicedata1.map((data, i) => (
                        <Card 
                          index={i}
                          key={data.id}
                          icon={data.Icon}
                          title={data.title}
                          content={data.content}
                        />
                      ))}
                    </div>
                  </Column>
                </Columns>
              </div>
            </Column>
          </Columns>
        </Container>
      </div> 
    </Section>
  );
};

export default Service;
