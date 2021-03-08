import React, { useState } from "react";
import api from "../api";
// import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import Question from "./Question"
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

const Gameplay = ({ questions, finishGame }) => {
    const [answers, setAnswers] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [startTime, setStartTime] = useState(new Date().getTime());
  
    const currentQuestion = questions[currentQuestionIndex];
    const chooseAnswer = (answer) => {
      const newAnswers = [...answers, answer];
      console.log(questions.length, currentQuestionIndex);
      if (questions.length - 1 > currentQuestionIndex) {
        setAnswers(newAnswers);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setStartTime(new Date().getTime());
      } else {
        finishGame(newAnswers);
      }
    };
  return (
    <div
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
        padding: 32,
      }}
    >
    <div>
      <Question
        data={currentQuestion}
        chooseAnswer={chooseAnswer}
        startTime={startTime}
      />
    </div>

    </div>
  );
};

export default Gameplay
