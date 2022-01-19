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
`;

const Length = styled.p`
  margin-left: 2%;
  margin-right: 2%;
  color: #1890ff;
`;

const BreakLabel = ({ breakInc, breakDec, breakLength }) => {
  return (
    <>
      <Title>Break</Title>
      <BreakLabelWrapper id="break-label">
        <FlatButton id="session-increment" onClick={() => breakInc()}>
          {"<"}
        </FlatButton>
        <Length>{breakLength}</Length>
        <FlatButton id="session-decrement" onClick={() => breakDec()}>
          {">"}
        </FlatButton>
      </BreakLabelWrapper>
    </>
  );
};

export default BreakLabel;
