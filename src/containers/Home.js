import React from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from '../llrLogo.png'

export default withSiteData(() => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to Heather Beatty's</h1>
    <img src={logoImg} alt="" style={{ display: 'block', margin: '0 auto', height: '200px' }} />
    <h1 style={{ textAlign: 'center' }}>Welcome Page</h1>
  </div>
))
