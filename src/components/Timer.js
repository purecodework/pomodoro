import convertTime from "../actions/convertTime";
import styled from "styled-components";
import Pie from "./pie";

const TimerWrapper = styled.div`
  position: relative;
  margin-top: 5%;
  margin-bottom: 5%;
  margin: 0 auto;
  // display: flex;
  // flex-direction: column;
  height: 240px;
  width: 240px;
  // border-radius: 50%;
  // border-style: solid;
`;

const TimerLabel = styled.div`
  margin-top: 10%;
  text-align: center;
  span {
    font-size: 16px;
    border-bottom: 2px dotted #3d4856;
  }
`;

const TimeLeft = styled.div`
  margin: 0 auto;
  margin-top: 20%;
  width: 200px;
  text-align: center;
  font-size: 60px;
  color: #1890ff;
`;

const OuterCircle = styled.div`
  position: relative;
  height: 240px;
  width: 240px;
  border-radius: 50%;
  background-color: blue;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e0e0e0;
  box-shadow: inset 15px 15px 30px #acacac, inset -15px -15px 30px #ffffff;
`;

const InnerCircle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  position: absolute;
  background: #e0e0e0;
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
`;

const AbsWrapper = styled.div`
  position: "absolute";
  z-index: 99;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 230px;
  height: 230px;
`;

const Timer = ({ timeLeft, isSession, sessionLength, breakLength }) => {
  let init = isSession
    ? (timeLeft / sessionLength) * 100
    : timeLeft / breakLength;
  let per = 100 - init;
  return (
    <TimerWrapper>
      <OuterCircle>
        <InnerCircle>
          <TimerLabel>
            <span>{isSession ? "Session" : "Break"}</span>
          </TimerLabel>
          <TimeLeft id="time-left">{convertTime(timeLeft)}</TimeLeft>
        </InnerCircle>
        <AbsWrapper key="Abs">
          <Pie percentage={per} colour="blue" />
        </AbsWrapper>
      </OuterCircle>
    </TimerWrapper>
  );
};

export default Timer;
