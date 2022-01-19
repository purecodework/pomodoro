import ControlButton from "../styles/ControlButton";

const SessionLabel = ({ sessionInc, sessionDec, sessionLength }) => {
  return (
    <div id="session-label">
      <div>Session</div>

      <div className="session-wrapper">
        <ControlButton id="session-increment" onClick={() => sessionInc()}>
          +
        </ControlButton>
        {/* <p id="session-length">{sessionLength}</p> */}
        <ControlButton id="session-decrement" onClick={() => sessionDec()}>
          -
        </ControlButton>
      </div>
    </div>
  );
};

export default SessionLabel;
