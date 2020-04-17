import React from 'react';
import styled from 'styled-components';
import H1 from '../Typography/H1';
import Paragraph from '../Typography/Paragraph';

const Container = styled.div`
  padding: 0em 1em;
`;

const TitleContainer = styled.div`
  margin-bottom: 2em;
`;

const PortfolioDescription = ({ description, title }) => (
  <Container>
    <TitleContainer>
      <H1>Okroo</H1>
    </TitleContainer>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit fermentum tellus, rutrum eleifend tortor fermentum non. Donec a sollicitudin erat, non iaculis nunc. Nullam fermentum, turpis eu elementum ullamcorper, augue diam varius turpis, eu sollicitudin mi augue eu sem. Vivamus eu molestie turpis, et molestie leo. Integer convallis porttitor viverra. Nulla tellus turpis, elementum vel condimentum consectetur, rutrum in dolor. Nulla finibus vulputate dolor. Sed dignissim mi purus, sed iaculis mauris pulvinar ut. Duis consectetur elit sit amet dignissim placerat. Phasellus finibus lacus ante, facilisis imperdiet justo venenatis ac. Morbi facilisis dapibus 
      <br />
      <br />
      metus, fringilla consectetur lectus sollicitudin quis. Sed condimentum volutpat nisl, vitae maximus turpis bibendum vel. Vivamus congue suscipit efficitur. Etiam tempor commodo convallis. Donec rutrum viverra venenatis. Etiam risus purus, ullamcorper non sollicitudin sit amet, tempor nec libero. In sit amet eros quis neque pharetra finibus. In hac habitasse platea dictumst. Aenean ac odio tempor, placerat turpis non, maximus massa. Nunc porta ac risus id sollicitudin. Phasellus ut risus nulla. Fusce ac velit vitae odio elementum porttitor. Aliquam iaculis ac lectus a aliquam. Maecenas ullamcorper placerat pulvinar. In dapibus ante quis mi pulvinar ornare. Sed ut dapibus nisl.
    </Paragraph>
  </Container>
);


export default PortfolioDescription;