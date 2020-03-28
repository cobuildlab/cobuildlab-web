import React from 'react';
import { Container, Columns, Column, Section } from 'bloomer';
import { Subtitle, Description, Title, Titlespan2 } from '../../components/title';
import BlogData from '../../../../data/blog';
import PreviewIcon from '../../components/icon';
import './blog.scss';

const Blog = () => {
  return (
    <Section>
      <div className="blog-wrapper">
        <div className="enterprise-section">
          <Container>
            <div className="main-title-wrapper">
              <Subtitle Class="site-subtitle" Name="OUR MAIN MISSIONS" />
              <Titlespan2 Class="sitemain-subtitle" Name="Build Smart & Effective" Label="Management" />
              <Description
                Class="site-dec"
                Name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
              />
            </div>
            <Columns>
              {BlogData.map((data, i) => (
                <Column isSize={{ mobile: 12, desktop: 4 }}  key={data.id} >
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
                          <Title Class="blog-title" Name={data.title} />
                          <Description Class="blog-dec" Name={data.content} />
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

export default Blog;
