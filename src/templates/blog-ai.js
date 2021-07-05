import React from 'react';
import { Container, Title, Columns, Column } from 'bloomer';
import LayoutPost from '../components/layoutPost';
import Styled from 'styled-components';

import PropTypes from 'prop-types';

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
  
`;

const StyledContainer = Styled(Container)`
  margin-top: 6rem;
  margin-bottom: 5rem;
`;

/**.
 * The Blog Ai component
 *
 * @param pageContext.pageContext
 * @param {Object} pageContext - The context
 * @returns {JSX.Element} - the resulting react component
 * @constructor
 */
function BlogAI({ pageContext }) {
  const { post } = pageContext;

  const { title, fields } = post;
  let { content } = post;
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
