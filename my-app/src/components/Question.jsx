import React, { useEffect, useState } from "react";
// import { Audio } from "expo-av";
import Answer from "./Answer"

const Question = ({ data, chooseAnswer, startTime }) => {
    console.log(data.type);;

  const [sound, setSound] = useState();
//   const layoutWidth = useWindowDimensions().width - 64;
  const makeChoice = (answerIndex) => {
    chooseAnswer({
      questionId: data.id,
      choice: data.answers[answerIndex],
      time: new Date().getTime() - startTime,
    });
  };

  const Answer = ({ answerIndex }) => (



    <div
      style={{ flex: 1, margin: 8 }}
      onClick={() => makeChoice(answerIndex)}
    >
      {data.type === "image" ? (
        <img
          src={ data.answers[answerIndex] }
          style={{ height: 200 }}
        />
      ) : (
        <p style={{ fontSize: "20px" }}>{data.answers[answerIndex]}</p>
      )}
    </div>
  );

  useEffect(() => {
    return () => {
      if (sound) {
        console.log("Unloading Sound");
        sound.unloadAsync();
      }
    };
  }, [sound]);

//   useEffect(() => {
//     const playSound = async () => {
//       const { sound } = await Audio.Sound.createAsync({
//         uri: data.audio_url,
//       });
//       setSound(sound);
//       await sound.playAsync();
//     };
//     playSound();
//   }, [data.id]);
  return (
    <div style={{ width: "100%" }}>
      <p style={{ textAlign: "center", background: "#80808070", padding: "10px" }}>
        {data.question}
      </p>
      <div
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Answer answerIndex={0} />
        <Answer answerIndex={1} />
      </div>
      <div
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Answer answerIndex={2} />
        <Answer answerIndex={3} />
      </div>
    </div>
  );
};

export default Question;
