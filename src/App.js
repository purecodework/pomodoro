import React, { useState, useEffect } from "react";
import BreakLabel from "./components/BreakLabel";
import SessionLabel from "./components/SessionLabel";
import Timer from "./components/Timer";
import PlayStop from "./components/PlayStop";
import Reset from "./components/Reset";
import styled from "styled-components";

const AppWrapper = styled.div`
  height: 670px;
  width: 350px;
  border-radius: 30px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #b3b3b3, -20px -20px 60px #ffffff;
`;

const Wrapper = styled.div`
  padding-left: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  padding-top: 5%;
  text-align: center;
  font-size: 24px;
  font-weight: normal;
`;

const ControlWrapper = styled.div`
  margin: 0 auto;
  margin-top: 10%;
  display: flex;
  justify-content: center;
  width: 350px;
  margin-bottom: 15%;
`;

const ResetWrapper = styled.div`
  width: 25%;
  margin-left: 5%;
`;

const LabelWrapper = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: row;
`;

const App = () => {
  const [isStart, setIsStart] = useState(false);
  const [isSession, setIsSession] = useState(true);
  const [breakLength, setBreakLength] = useState({
    breakLength: 5,
    breakLeft: 5 * 60,
  });

  const [sessionLength, setSessionLength] = useState({
    sessionLength: 1,
    sessionLeft: 1 * 60,
  });
  //break and session control
  const breakInc = () => {
    if (breakLength.breakLength < 60) {
      setBreakLength({
        breakLength: breakLength.breakLength + 1,
        breakLeft: (breakLength.breakLength + 1) * 60,
      });
    }
  };

  const breakDec = () => {
    if (breakLength.breakLength > 1) {
      setBreakLength({
        breakLength: breakLength.breakLength - 1,
        breakLeft: (breakLength.breakLength - 1) * 60,
      });
    }
  };

  const sessionInc = () => {
    if (sessionLength.sessionLength < 60) {
      setSessionLength({
        sessionLength: sessionLength.sessionLength + 1,
        sessionLeft: (sessionLength.sessionLength + 1) * 60,
      });
    }
  };

  const sessionDec = () => {
    if (sessionLength.sessionLength > 1) {
      setSessionLength({
        sessionLength: sessionLength.sessionLength - 1,
        sessionLeft: (sessionLength.sessionLength - 1) * 60,
      });
    }
  };

  const onPlayStop = () => setIsStart(!isStart);

  const onReset = () => {
    setIsStart(false);
    setIsSession(true);
    setSessionLength({
      sessionLength: 25,
      sessionLeft: 25 * 60,
    });
    setBreakLength({
      breakLength: 5,
      breakLeft: 5 * 60,
    });
  };

  //session hook
  useEffect(() => {
    if (isStart && isSession) {
      if (sessionLength.sessionLeft === 0) {
        setIsSession(false);
        setBreakLength({
          ...breakLength,
          breakLeft: breakLength.breakLength * 60,
        });
        return;
      }

      const timerId = setInterval(
        () =>
          setSessionLength({
            ...sessionLength,
            sessionLeft: sessionLength.sessionLeft - 1,
          }),
        1000
      );
      return () => clearInterval(timerId);
    }
  }, [isStart, isSession, sessionLength, breakLength]);

  //break hook
  useEffect(() => {
    if (isStart && !isSession) {
      if (breakLength.breakLeft === 0) {
        setIsSession(true);
        setSessionLength({
          ...sessionLength,
          sessionLeft: sessionLength.sessionLength * 60,
        });
        return;
      }

      const timerId = setInterval(
        () =>
          setBreakLength({
            ...breakLength,
            breakLeft: breakLength.breakLeft - 1,
          }),
        1000
      );
      return () => clearInterval(timerId);
    }
  }, [isStart, isSession, breakLength, sessionLength]);

  return (
    <div className="App">
      <AppWrapper>
        <Wrapper>
          <Title>Pomodoro</Title>
          <ResetWrapper onClick={onReset}>
            <Reset />
          </ResetWrapper>
        </Wrapper>
        <Timer
          isStart={isStart}
          isSession={isSession}
          sessionLength={sessionLength.sessionLength * 60}
          breakLength={breakLength.breakLength * 60}
          timeLeft={
            isSession ? sessionLength.sessionLeft : breakLength.breakLeft
          }
        />

        <ControlWrapper>
          <PlayStop isStart={isStart} onPlayStop={onPlayStop} />
        </ControlWrapper>
        <SessionLabel
          sessionInc={sessionInc}
          sessionDec={sessionDec}
          sessionLength={sessionLength.sessionLength}
        />
        <BreakLabel
          breakInc={breakInc}
          breakDec={breakDec}
          breakLength={breakLength.breakLength}
        />
      </AppWrapper>
    </div>
  );
};

export default App;
