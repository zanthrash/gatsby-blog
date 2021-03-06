import React from 'react'
import Helmet from 'react-helmet'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../../assets/scss/init.scss'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="layout">
        <Helmet defaultTitle="Blog by Zan Thrash" />
        {children}
      </div>
    )
  }
}

export default Layout
