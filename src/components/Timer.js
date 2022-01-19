import convertTime from "../actions/convertTime";
import styled from "styled-components";

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 280px;
  width: 280px;
  border-radius: 50%;
  border-style: solid;
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

const Timer = ({ timeLeft, isSession }) => {
  return (
    <TimerWrapper>
      <TimerLabel>
        <span>{isSession ? "Session" : "Break"}</span>
      </TimerLabel>
      <TimeLeft id="time-left">{convertTime(timeLeft)}</TimeLeft>
    </TimerWrapper>
  );
};

export default Timer;
