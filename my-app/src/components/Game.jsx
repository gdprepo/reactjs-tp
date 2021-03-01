import React, { useState } from "react";
import api from "../api";
// import { Alert } from "react-native";
import { useDispatch } from "react-redux";

import Logo from './Logo'
import Links from './Links'
import styled from 'styled-components'
import {
    Route,
    Redirect,
    BrowserRouter as Router,
    Switch,
    Link,
  } from "react-router-dom";

const Container = styled.div.attrs({
  className: 'container',
})`
  width: 100vw;
`
// import Gameplay from "./Gameplay";
// import { incrementPlayerNbPlayed } from "../data/playerActions";

const Game = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(-1);
  const dispatch = useDispatch();
  const getNewGame = () => {
    // Call /questions on the API
    api.getQuestions().then((questions) => {
      if (questions === null) {
        // There was an error
        // Alert.alert("Error");
        console.log("Error");

      } else {
        setAnswers([]);
        setScore(-1);
        setQuestions(questions);
        console.log(questions);
      }
    });
  };
  const finishGame = async (answers) => {
    const score = await api.submitAnswers(answers);
    setScore(score);
    setAnswers(answers);
    console.log("Score:", score);
    // dispatch(incrementPlayerNbPlayed());
  };

  const Button = styled.button`
  background-color: black;
  color: white;
  float: right;
  padding: 10px 50px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    color: black;
    background-color: white;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;
  return (
    <div
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
        padding: 32,
      }}
    >
    <Container>

        <h1 style={{ marginBottom: 64 }}>
            Game
        </h1>

    </Container>
       {answers && answers.length > 0 ? (
        <div>
         <h2>Votre score: {score}</h2>
          <h3 category="h3">Merci d'avoir joué</h3>
         <Button onClick={() => getNewGame()}>New Game</Button>
        </div>
      ) : questions && questions.length > 0 ? (
      //  <Gameplay questions={questions} finishGame={finishGame} />
      <Button onClick={() => getNewGame()}>New Game</Button>
     
     
      ) : (
        <button onClick={() => getNewGame()}>New Game</button>
      )}
    </div>
  );
};

export default Game
