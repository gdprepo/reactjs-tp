import React, { useEffect, useState } from "react";
import api from "../api";
// import { useDispatch } from "react-redux";
import { Loadingscreen } from "../components";
import Gameplay from "./Gameplay"

import styled from 'styled-components'

const Game = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(-1);
  // const dispatch = useDispatch();
  const getNewGame = () => {
    // Call /questions on the API
    api.getQuestions().then((questions) => {
      if (questions === null) {
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

  useEffect(() => {
    getNewGame()
  }, [])

  return (
    <div
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
        height: 100 + '%',
        width: 100 + '%',
        position: "fixed"
      }}
    >
      {answers && answers.length > 0 ? (
        <div>
          <p category="h2">Votre score: {score}</p>
          <p category="h3">Merci d'avoir joué</p>
          <Button onClick={() => getNewGame()}>Rejouer</Button>
        </div>
      ) : questions && questions.length > 0 ? (
        <Gameplay questions={questions} finishGame={finishGame} />
      ) : (<Loadingscreen />) }
    </div>
  );
};

export default Game
