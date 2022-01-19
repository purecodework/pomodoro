import styled from "styled-components";

const ControlButton = styled.button`
  color: #3d4856;
  font-size: 30px;
  height: 50px;
  width: 50px;
  border-color: transparent;
  border-radius: 19px;
  background: #e0e0e0;
  box-shadow: 6px 6px 12px #b3b3b3, -6px -6px 12px #ffffff;
  &:active {
    color: #009aff;
    border-radius: 25px;
    background: #cdd4df;
    border-radius: 22px;
    background: #cdd4df;
    box-shadow: inset 13px 13px 26px #aab0b9, inset -13px -13px 26px #f0f8ff;
  }
`;

export default ControlButton;
