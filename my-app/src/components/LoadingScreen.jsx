import React from 'react'
import styled from 'styled-components'
import loadingGif from '../assets/loading.gif';


const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #282c34;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Loading = styled.img.attrs({
  src: loadingGif,
  alt:"Loading animation"
})`
  height: 200px;
`
const Loadingscreen = () => {
  return (
    <Screen>
      <Loading />
    </Screen>
  )
}

export default Loadingscreen 