import ControlButton from "../styles/ControlButton";
import PauseButton from "../styles/PauseButton";
import styled from "styled-components";

const PlayButton = styled(ControlButton)``;
const PlayStop = ({ isStart, onPlayStop }) => {
  return isStart ? (
    <PauseButton onClick={onPlayStop}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="#1890ff"
        class="bi bi-play-fill"
        viewBox="0 0 16 16"
      >
        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
      </svg>
    </PauseButton>
  ) : (
    <PlayButton id="start_stop" onClick={onPlayStop} isStart={isStart}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-play"
        viewBox="0 0 16 16"
      >
        <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
      </svg>
    </PlayButton>
  );
};

export default PlayStop;
