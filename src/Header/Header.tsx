import React, { ReactElement } from 'react'
import './style.css'

const logo = require('../images/fox.svg')

const Header = (): ReactElement => (
  <header className='header'>
    <img alt='Logo' className='header-logo' src={logo} />
  </header>
)

export default Header
