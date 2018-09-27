import React from 'react'
import { Title, Container, Columns, Column } from 'bloomer'
import { Icon } from 'react-icons-kit'
import { ic_format_quote } from 'react-icons-kit/md/ic_format_quote'
// library.add(faStroopwafel, faCheck, faCode, faLayerGroup, faTachometerAlt, faEnvelope,)
class BlockQuote extends React.Component {
  render() {
    const { children, align } = this.props
    return (
      <Container>
        <Columns isCentered>
          <Column hasTextAlign="centered">
            <Title
              tag="h4"
              isSize={4}
              style={{ marginBottom: 10, fontStyle: 'italic' }}
              hasTextAlign={align}
            >
              <Icon size="32" icon={ic_format_quote} />
              {children}
            </Title>
          </Column>
        </Columns>
      </Container>
    )
  }
}
export default BlockQuote
