import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel, faCheck, faCode, faLayerGroup, faTachometerAlt, faEnvelope, } from '@fortawesome/free-solid-svg-icons'

import { Icon } from 'react-icons-kit';

// library.add(faStroopwafel, faCheck, faCode, faLayerGroup, faTachometerAlt, faEnvelope,)
const Icons = ({ icon }) => <Icon icon={icon} />;

Icons.defaultProps = {
  icon: '',
};

Icons.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};
export default memo(Icons);
