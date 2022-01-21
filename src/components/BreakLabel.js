import FlatButton from "../styles/FlatButton";
import styled from "styled-components";

const BreakLabelWrapper = styled.div`
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

const BreakLabel = ({ breakInc, breakDec, breakLength }) => {
  return (
    <>
      <Title>Break</Title>
      <BreakLabelWrapper id="break-label">
        <FlatButton id="session-decrement" onClick={() => breakDec()}>
          {"<"}
        </FlatButton>
        <Length>{breakLength}</Length>

        <FlatButton id="session-increment" onClick={() => breakInc()}>
          {">"}
        </FlatButton>
      </BreakLabelWrapper>
    </>
  );
};

export default BreakLabel;
