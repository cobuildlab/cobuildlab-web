import React from 'react';
import { Container, Columns, Column, Section } from 'bloomer';
import PreviewIcon from '../../components/icon';
import Typography from '../../../2020/Typography';
import './unique-value-props.scss';
import Img1 from '../../../../assets/images/blog/css1.jpg';
import { money, bolt, bullhorn } from 'react-icons-kit/fa';
import Img2 from '../../../../assets/images/blog/css2.jpg';
import Img3 from '../../../../assets/images/blog/css3.jpg';

const BLOG_DATA = [
  {
    id: 1,
    img: Img1,
    Icon: bolt,
    title: 'Scale your Business Faster',
    subtitle: 'Williamson',
    subcontent: 'Web designer',
    content:
      'The problem reveals itself when you try to locate a software solution that takes the various spreadsheets, emails, web bots and website utilities that you regularly use and combine them into a solid, reliable, yet still intuitive and accessible software package.',
  },
  {
    id: 2,
    img: Img2,
    Icon: bullhorn,
    title: 'Differentiate From Competitors',
    subtitle: 'Miranda Roy',
    subcontent: 'Web developer',
    content:
      'Find your unique space in the market. Leverage your knowledge and expertise by building the tools that will make you stand and attract your customers.',
  },
  {
    id: 3,
    img: Img3,
    Icon: money,
    title: 'Offer more value to your Customers',
    subtitle: 'Steve Thomas',
    subcontent: 'Web developer',
    content:
      'Be the reference in your industry by providing cutting edge value. Saas products, remote support, mobile presence. etc',
  },
];

const UniqueValueProps = () => {
  return (
    <Section>
      <div className="blog-wrapper">
        <div className="enterprise-section">
          <Container>
            <div className="main-title-wrapper">
              <div className="sub-title-wrapper">
                <Typography className="site-subtitle" tag="h3">
                  OUR MAIN MISSION
                </Typography>
              </div>
              <Typography className="sitemain-subtitle" tag="h2">
                Rapid Application Development
              </Typography>
              <Typography className="site-dec" tag="p">
                Since 2012 we`ve focused on developing and combining agile techniques, tools, and
                technologies to increase development speed to deliver faster results!
              </Typography>
            </div>
            <Columns>
              {BLOG_DATA.map((data, i) => (
                <Column isSize={{ mobile: 12, desktop: 4 }} key={data.id}>
                  <div className={`blog-${i}`}>
                    <div className="blog-content">
                      <div className="blog-first-block">
                        <img src={data.img} alt="" title="" />
                      </div>
                      <div className="blog-second-block">
                        <div className="blog-left-content">
                          <div className="blog-icon">
                            <span>
                              <PreviewIcon icon={data.Icon} />
                            </span>
                          </div>
                        </div>
                        <div className="blog-right-content">
                          <Typography className="blog-title" tag="h5">
                            {data.title}
                          </Typography>
                          <Typography className="blog-dec" tag="p">
                            {data.content}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                </Column>
              ))}
            </Columns>
          </Container>
        </div>
      </div>
    </Section>
  );
};

export default UniqueValueProps;
