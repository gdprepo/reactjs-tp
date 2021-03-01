import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import backg from '../assets/Music.gif'

const Container = styled.div.attrs({
  className: 'container',
})`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ModalLine = styled.div`
  position: absolute;
  background-color: rgb(0 0 0 / 26%);
  filter: blur(1px);
  padding: 2em;
  border-radius: 10em;
  top: 0;
  transform: translateY(40vh);
`

const Line = styled.h2`
  font-family: 'MonumentExtendedR';
  color: white;
  font-size: 5em;
  margin: 0;
  padding: 0;
`

const ModalBtn = styled.div`
  filter: blur(1px);
  position: absolute;
  top: 0;
  transform: translateY(70vh);
`

const Button = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
  color: white;
  font-size: 3em;
  font-family: 'MonumentExtendedR';
  padding: 0.5em;
  border-radius: 10em;
  &:hover {
    animation: gradient 5s ease infinite;
  }

  @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const Home = ({props}) => {
  return (
    <Container>
        <img src={backg} alt='' style={{height: 100+'vh', width: 100+'vw', objectFit: 'cover', position: 'absolute', top: 0, left: 0}} ></img>

        <ModalLine>
          <Line>On se fait une partie ?</Line>
        </ModalLine>

        <ModalBtn>
          <Link to="/game">
              <Button>Lancer une partie</Button>
          </Link>
        </ModalBtn>
    </Container>
  )
}

export default Home