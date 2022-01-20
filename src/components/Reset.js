import ControlButton from "../styles/ControlButton";
import styled from "styled-components";
const ResetWrapper = styled.div`
  background: #e0e0e0;

  padding-top: 20px;
  margin-left: 20px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
`;

const Reset = ({ onReset }) => {
  return (
    <ResetWrapper id="reset" onClick={onReset}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-arrow-counterclockwise"
        viewBox="0 0 16 16"
        stroke-width="1"
      >
        <path
          fill-rule="evenodd"
          d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
        />
        <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
      </svg>
    </ResetWrapper>
  );
};

export default Reset;
