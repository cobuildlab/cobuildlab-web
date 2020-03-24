import React from 'react';
import { Container } from 'reactstrap';
import Scroll from '../scroll';
import './copyright.scss';

/**
 *
 */
function CopyRight() {
  return (
    <div className="footer-wrapper-copytext">
      <Container>
        <div className="footer-copyright-text">
          <div className="copyright-link">
            <span>© Copyright 2019 busines. All Rights Reserved</span>

            <span> Term & Condition / Privacy & Policy</span>
          </div>
          <Scroll />
        </div>
      </Container>
    </div>
  );
}

export default CopyRight;
