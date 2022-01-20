import ControlButton from "../styles/ControlButton";
import styled from "styled-components";

const Right = styled.div`
  position: relative;
  width: 200px;
  height: 250px;
  overflow: hidden;
`;

const RightCircle = styled.div`
  width: 200px;
  height: 200px;
  border: 8px solid transparent;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  border-top: 8px solid #38b99b;
  border-right: 8px solid #38b99b;
  transform: rotate(
    -135deg
  ); /* 旋转45度时正好能显示右半个圆，
     -webkit-animation-name: circle_right; /* 动画名称 */
  -webkit-animation-duration: 5s; /* 完成一个动画需要的时间 */
  -webkit-animation-timing-function: linear; /* 动画播放的方式，linear是匀速变化 */
  -webkit-animation-iteration-count: infinite; /* 动画播放的次数，infinite是无限次数 */
`;

const Circle = ({ onPlayStop }) => {
  return (
    <Right>
      <RightCircle />
    </Right>
  );
};

export default Circle;
