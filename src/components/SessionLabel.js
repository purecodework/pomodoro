import FlatButton from "../styles/FlatButton";
import styled from "styled-components";

const SessionLabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  height: 30px;
`;

const Title = styled.p`
  text-align: center;
  color: #64748b;
`;

const Length = styled.p`
  margin-left: 2%;
  margin-right: 2%;
`;

const SessionLabel = ({ sessionInc, sessionDec, sessionLength }) => {
  return (
    <>
      <Title>Session</Title>
      <SessionLabelWrapper id="session-label">
        <FlatButton id="session-decrement" onClick={() => sessionDec()}>
          {"<"}
        </FlatButton>
        <Length> {sessionLength}</Length>
        <FlatButton id="session-increment" onClick={() => sessionInc()}>
          {">"}
        </FlatButton>
      </SessionLabelWrapper>
    </>
  );
};

export default SessionLabel;
