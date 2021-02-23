import React from 'react'
import Logo from './Logo'
import Links from './Links'
import styled from 'styled-components'


const Container = styled.div.attrs({
  className: 'container',
})`
  width: 100vw;
  margin: 0;
  padding: 0;
`

const Nav = styled.nav.attrs({
  className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
  margin-bottom: 20px;
  width: inherit;
`

const Profile = ({props}) => {

  return (
    <Container>
        <h2>Profil</h2>
        <p>Vous êtes connecter en tant que { props.name }</p>
        <img src={props.avatar} alt="User avatar" />

    </Container>
  )
}

export default Profile