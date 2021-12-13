import React from 'react'
import {siteMetadata} from '../../gatsby-config'
import SiteNavi from '../components/SiteNavi'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <div>
        <SiteNavi title={siteMetadata.title} {...this.props} />
        {children()}
      </div>
    )
  }
}

export default Template
