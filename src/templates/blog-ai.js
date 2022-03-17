import React from 'react';
import LayoutPost from '../components/layoutPost';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Title, Columns, Column } from 'bloomer';
import { SeoMetaTags } from '../components/2021/SeoMetaTags';

const StyledTitle = Styled(Title)`
  color: #264A60;
  font-family: 'Lato-bold',sans-serif;
`;

const SectionPost = Styled.section`
  color: #264A60;
  font-family: 'Lato-bold',sans-serif;
  line-height: 1.125;
  color: #264A60;
  letter-spacing: 0;
  opacity: 1;
  font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
  font-weight: 400;
  position: relative;
  margin-bottom: 22px;
  text-align: justify;
  & ul > li {
    list-style: disc;
    margin-left: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  & h1 {
    color: #264A60;
    margin-bottom: 25px!important;
    font-size: 2.5rem;
  }
  & h2 {
    color: #264A60;
    margin-bottom: 15px!important;
    font-size: 2rem;
  }
  & p {
    text-align: justify;
  }
  & blockquote {
    max-width: 1000px;
    text-align: center;
    margin: 20px;
    padding: 20px;
    font-size: 20px;
    color: #264A60;
    border-left:5px solid #264A60;
    background-color: #ededed;
  }
  & img {
    margin-bottom: 2rem !important;
  }
  & pre {
    counter-reset: line-numbering;
    line-height: 100%;
    margin-bottom: 2rem !important;
    white-space: pre;
    word-wrap: break-word;
    overflow: auto;
  }
  & pre > code {
    position: relative;
  }
`;

const StyledContainer = Styled(Container)`
  margin-top: 6rem;
  margin-bottom: 5rem;
`;

/**.
 * The Blog Ai component
 *
 * @param {Object} pageContext - The context.
 * @param {Object} pageContext.pageContext - The context.
 * @returns {JSX.Element} - the resulting react component
 * @constructor
 */
function BlogAI({ pageContext }) {
  const { post } = pageContext;

  const { title, fields } = post;
  let { content, description } = post;
  const { images } = fields !== null ? fields : [];

  if (images === undefined) {
    content = content.replace('/<img>/g', '');
  } else {
    images.forEach((value) => {
      content = content.replace('<img>', `<img src="${value.remoteImage.publicURL}" />`);
    });
  }

  return (
    <LayoutPost>
      <SeoMetaTags title={title} titleTemplate="" description={description} />
      <StyledContainer hasTextAlign="centered">
        <StyledTitle tag="h1" isSize={1} hasTextColor="Black">
          {title}
        </StyledTitle>
        <br />
        <hr />
      </StyledContainer>

      <SectionPost id="section-post" className="section">
        <Container>
          <Columns isMultiline>
            <Column isSize={12} hasTextAlign="left">
              <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </Column>
          </Columns>
        </Container>
      </SectionPost>
    </LayoutPost>
  );
}

BlogAI.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default BlogAI;
