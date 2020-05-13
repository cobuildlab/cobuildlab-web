import styled from 'styled-components';

const Avatar = styled.div`
  .slick-dots li:nth-child(1) & {
    background: url(${({ index, data }) =>
    data[index] ? data[index].image.childImageSharp.fluid.srcWebp : ''})
      no-repeat center;
  }
  .slick-dots li:nth-child(2) & {
    background: url(${({ index, data }) =>
    data[index] ? data[index].image.childImageSharp.fluid.srcWebp : ''})
      no-repeat center;
  }
  .slick-dots li:nth-child(3) & {
    background: url(${({ index, data }) =>
    data[index] ? data[index].image.childImageSharp.fluid.srcWebp : ''})
      no-repeat center;
  }
  .slick-dots li:nth-child(4) & {
    background: url(${({ index, data }) =>
    data[index] ? data[index].image.childImageSharp.fluid.srcWebp : ''})
      no-repeat center;
  }
  .slick-dots li:nth-child(5) & {
    background: url(${({ index, data }) =>
    data[index] ? data[index].image.childImageSharp.fluid.srcWebp : ''})
      no-repeat center;
  }
  .slick-dots li:nth-child(6) & {
    background: url(${({ index, data }) =>
    data[index] ? data[index].image.childImageSharp.fluid.srcWebp : ''})
      no-repeat center;
  }
`;

export default Avatar;
