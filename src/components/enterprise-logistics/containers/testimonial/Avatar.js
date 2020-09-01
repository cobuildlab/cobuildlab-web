import styled from 'styled-components';

const Avatar = styled.div`
  .slick-dots li:nth-child(1) & {
    background: url(${({ index, sourceData }) =>
    sourceData[index] ? sourceData[index].image.childImageSharp.fluid.src : ''})
      no-repeat center;
  }
  .slick-dots li:nth-child(2) & {
    background: url(${({ index, sourceData }) =>
    sourceData[index] ? sourceData[index].image.childImageSharp.fluid.src : ''})
      no-repeat center;
  }
  .slick-dots li:nth-child(3) & {
    background: url(${({ index, sourceData }) =>
    sourceData[index] ? sourceData[index].image.childImageSharp.fluid.src : ''})
      no-repeat center;
  }
  .slick-dots li:nth-child(4) & {
    background: url(${({ index, sourceData }) =>
    sourceData[index] ? sourceData[index].image.childImageSharp.fluid.src : ''})
      no-repeat center;
  }
  .slick-dots li:nth-child(5) & {
    background: url(${({ index, sourceData }) =>
    sourceData[index] ? sourceData[index].image.childImageSharp.fluid.src : ''})
      no-repeat center;
  }
  .slick-dots li:nth-child(6) & {
    background: url(${({ index, sourceData }) =>
    sourceData[index] ? sourceData[index].image.childImageSharp.fluid.src : ''})
      no-repeat center;
  }
`;

export default Avatar;
