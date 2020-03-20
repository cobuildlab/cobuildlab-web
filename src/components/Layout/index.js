import React from 'react';
import Footer from './Footer';
import 'bulma';
/* import '../../assets/fonts/Lato-Black.ttf';
import '../../assets/fonts/Lato-BlackItalic.ttf';
import '../../assets/fonts/Lato-Bold.ttf';
import '../../assets/fonts/Lato-BoldItalic.ttf';
import '../../assets/fonts/Lato-Hairline.ttf';
import '../../assets/fonts/Lato-HairlineItalic.ttf';
import '../../assets/fonts/Lato-Italic.ttf';
import '../../assets/fonts/Lato-Light.ttf';
import '../../assets/fonts/Lato-LightItalic.ttf';
import '../../assets/fonts/Lato-Regular.ttf';*/

export default class Template extends React.Component {
  render() {
    const { children } = this.props;
    const siteKey = process.env.RECAPTCHA_SITEKEY;
    return (
      <div>
        {children}
        <Footer siteKey={siteKey} />
      </div>
    );
  }
}

