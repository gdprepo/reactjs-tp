import React, { Component } from 'react'
// import styled from 'styled-components'

import logo from '../assets/logo.png'


class Logo extends Component {
    render() {
        return (
          <img src={logo} width="50" height="50" alt="logo" />
        )
    }
}

export default Logo