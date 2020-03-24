import React, { useState } from 'react';
import { Title } from '../../components/title';
import PreviewIcon from '../../components/icon';
import { paintBrush } from 'react-icons-kit/fa/paintBrush';
import Bg from '../../../../assets/images/banner/bg.png';
import Bg1 from '../../../../assets/images/banner/bg1.png';
import Bg2 from '../../../../assets/images/banner/bg2.png';
import Bg3 from '../../../../assets/images/banner/bg3.png';
import Bg4 from '../../../../assets/images/banner/bg4.png';
import Bg5 from '../../../../assets/images/banner/bg5.png';
import './themecolor.scss';

/**
 *
 */
function ThemeColor() {
  const [color, setColor] = useState(false);
  const [active, setActive] = useState(false);
  const [rtl, setRtl] = useState(false);

  const rtlClick = () => {
    if (!rtl) {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
    setRtl(!rtl);
    colorClick();
  };

  const colorClick = () => {
    setColor(!color);
  };
  const activeClick = (e) => {
    switch (e.target.className) {
    case 'color1':
      document.body.style.setProperty(
        '--primary',
        'linear-gradient(to right, #e100ff 0%, #7f00ff 100%)',
      );
      document.body.style.setProperty('--primary1', '#8200ff');
      document.body.style.setProperty('--primary2', '#e000ff');
      document.body.style.setProperty('--primary3', 'rgba(183, 41, 255, 0.1)');
      document.body.style.setProperty('--bannerimg', `url(${Bg})`);
      break;
    case 'color2':
      document.body.style.setProperty(
        '--primary',
        'linear-gradient(to right, #33ccff 0%, #3366ff 100%)',
      );
      document.body.style.setProperty('--primary1', '#3366ff');
      document.body.style.setProperty('--primary2', '#33ccff');
      document.body.style.setProperty('--primary3', 'rgba(52, 106, 255, 0.1)');
      document.body.style.setProperty('--bannerimg', `url(${Bg1})`);
      break;
    case 'color3':
      document.body.style.setProperty(
        '--primary',
        'linear-gradient(to right, #f83600 0%, #f9d423 100%)',
      );
      document.body.style.setProperty('--primary1', '#f83600');
      document.body.style.setProperty('--primary2', '#f8a717');
      document.body.style.setProperty('--primary3', 'rgba(248, 54, 0, 0.1)');
      document.body.style.setProperty('--bannerimg', `url(${Bg2})`);
      break;
    case 'color4':
      document.body.style.setProperty(
        '--primary',
        'linear-gradient(to right, #a445b2 0%, #ff0066 100%)',
      );
      document.body.style.setProperty('--primary1', '#ff0066');
      document.body.style.setProperty('--primary2', '#a445b2');
      document.body.style.setProperty('--primary3', 'rgba(164, 69, 178, 0.1)');
      document.body.style.setProperty('--bannerimg', `url(${Bg3})`);
      break;
    case 'color5':
      document.body.style.setProperty(
        '--primary',
        'linear-gradient(to right, #184e68 0%, #57ca85 100%)',
      );
      document.body.style.setProperty('--primary1', '#57ca85');
      document.body.style.setProperty('--primary2', '#184e68');
      document.body.style.setProperty('--primary3', 'rgba(24, 78, 104, 0.1)');
      document.body.style.setProperty('--bannerimg', `url(${Bg4})`);
      break;
    case 'color6':
      document.body.style.setProperty(
        '--primary',
        'linear-gradient(to right, #30cfd0 0%, #842eee 100%)',
      );
      document.body.style.setProperty('--primary1', '#30cfd0');
      document.body.style.setProperty('--primary2', '#5279df');
      document.body.style.setProperty('--primary3', 'rgba(41, 153, 232, 0.1)');
      document.body.style.setProperty('--bannerimg', `url(${Bg5})`);
      break;
    default:
      break;
    }

    document.querySelectorAll('.pattern li .active').forEach((anchor) => {
      anchor.classList.remove('active');
    });
    e.target.classList.add('active');

    setActive(!active);
    colorClick();
  };
  return (
    <div id="themecontrol" className={color ? 'open' : ''}>
      <Title Class="title" Name="Select Your Color" />
      <ul className="pattern">
        <li>
          <span className={`color1`} onClick={activeClick}></span>
        </li>
        <li>
          <span className={`color2`} onClick={activeClick}></span>
        </li>
        <li>
          <span className={`color3`} onClick={activeClick}></span>
        </li>
        <li>
          <span className={`color4`} onClick={activeClick}></span>
        </li>
        <li>
          <span className={`color5`} onClick={activeClick}></span>
        </li>
        <li>
          <span className={`color6`} onClick={activeClick}></span>
        </li>
      </ul>
      <div className="bottom" onClick={colorClick}>
        <div className="settings">
          <PreviewIcon icon={paintBrush} />
        </div>
      </div>
      <div className="theme-rtl">
        <Title Class="rtl-title" Name="Theme RTL" />
        <label className="switch">
          <input type="checkbox" onClick={rtlClick} />
          <span id="slider"></span>
        </label>
      </div>
    </div>
  );
}

export default ThemeColor;
