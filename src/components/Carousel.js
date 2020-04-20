import React from 'react';
import { Container, Columns, Column } from 'bloomer';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

class Carousel extends React.Component {
  render() {
    const { children, folder } = this.props;
    const allImages = children
      .toString()
      .split(/\r?\n|\r/)
      .filter((text) => text.indexOf('./media') > -1)
      .map((src) => src.replace('./', folder + '/'));

    return (
      <StaticQuery
        query={graphql`
          {
            allFile(filter: { relativePath: { regex: "/.*(.png|.jpg|.gif|jpeg)$/" } }) {
              edges {
                node {
                  publicURL
                  relativePath
                }
              }
            }
          }
        `}
        render={(data) => (
          <Container>
            <Columns>
              {data.allFile.edges.map((node, index) => {
                const path = node.node.relativePath;
                // console.log(getOrientation(node.)) WORKING ON GETTING ORIENTATION TO THEN FLIP IMAGE ACCORDINGLY
                if (allImages.includes(path) === true)
                  return (
                    <Column key={index}>
                      <img alt={'slide'} src={node.node.publicURL} />
                      {/* <Image isRatio="4:3" src={node.node.publicURL} /> */}
                      {/* <Image src={node.node.publicURL} /> */}
                    </Column>
                  );
                return null;
              })}
            </Columns>
          </Container>
        )}
      />
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.object.isRequired,
  folder: PropTypes.string.isRequired,
};

export default Carousel;
