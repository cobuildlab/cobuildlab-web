import React from 'react'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel, faCheck, faCode, faLayerGroup, faTachometerAlt, faEnvelope, } from '@fortawesome/free-solid-svg-icons'

import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'

// library.add(faStroopwafel, faCheck, faCode, faLayerGroup, faTachometerAlt, faEnvelope,)
class Icons extends React.Component{
  render(){
    return(
      <Icon icon={this.props.icon} />
    )
  }
}
export default Icons