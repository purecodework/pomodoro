import styled from "styled-components";

const ControlButton = styled.button`
  color: #3d4856;
  font-size: 30px;
  height: 50px;
  width: 50px;
  border-color: transparent;
  border-radius: 15px;
  background: #e0e0e0;
  box-shadow: 9px 9px 18px #bebebe, -9px -9px 18px #ffffff;
  &:active {
    color: #3d4856;
    font-size: 30px;
    height: 50px;
    width: 50px;
    border-color: transparent;

    color: #009aff;
    border-radius: 15px;
    box-shadow: inset 9px 9px 18px #bebebe, inset -9px -9px 18px #ffffff;
  }
`;

export default ControlButton;
