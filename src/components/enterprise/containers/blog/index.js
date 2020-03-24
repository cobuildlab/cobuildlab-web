import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Subtitle, Description, Title, Titlespan2 } from '../../components/title';
import BlogData from '../../../../data/blog';
import PreviewIcon from '../../components/icon';

import './blog.scss';

/**
 *
 */
function Blog() {
  return (
    <section className="blog-wrapper" id="blog">
      <Container>
        <div className="main-title-wrapper">
          <Subtitle Class="site-subtitle" Name="OUR MAIN MISSIONS" />
          <Titlespan2 Class="sitemain-subtitle" Name="Build Smart & Effective" Label="Management" />

          <Description
            Class="site-dec"
            Name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
          />
        </div>
        <Row>
          {BlogData.map((data, i) => (
            <Col lg={4} sm={6} key={data.id} className={`blog-${i}`}>
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
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Blog;
