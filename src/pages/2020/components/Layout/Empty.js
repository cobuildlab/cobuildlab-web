import React from 'react'
import '@2020/assets/fonts/Lato-Black.ttf'
import '@2020/assets/fonts/Lato-BlackItalic.ttf'
import '@2020/assets/fonts/Lato-Bold.ttf'
import '@2020/assets/fonts/Lato-BoldItalic.ttf'
import '@2020/assets/fonts/Lato-Hairline.ttf'
import '@2020/assets/fonts/Lato-HairlineItalic.ttf'
import '@2020/assets/fonts/Lato-Italic.ttf'
import '@2020/assets/fonts/Lato-Light.ttf'
import '@2020/assets/fonts/Lato-LightItalic.ttf'
import '@2020/assets/fonts/Lato-Regular.ttf'

import 'bulma'
import '@2020/assets/css/index.css'


class EmptyLayout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}

export { EmptyLayout }
