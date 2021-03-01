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
  return (
    // <Layout
    //   style={{
    //     justifyContent: "flex-start",
    //     alignItems: "center",
    //     flex: 1,
    //     padding: 32,
    //   }}
    // >
    <Container>

        <h1 style={{ marginBottom: 64 }}>
            Game
        </h1>

    </Container>
    //   {answers && answers.length > 0 ? (
    //     <Layout>
    //       <Text category="h2">Votre score: {score}</Text>
    //       <Text category="h3">Merci d'avoir joué</Text>
    //       <Button onPress={() => getNewGame()}>New Game</Button>
    //     </Layout>
    //   ) : questions && questions.length > 0 ? (
    //     <Gameplay questions={questions} finishGame={finishGame} />
    //   ) : (
    //     <Button onPress={() => getNewGame()}>New Game</Button>
    //   )}
    // </Layout>
  );
};

export default Game
