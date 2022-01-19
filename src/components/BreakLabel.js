import ControlButton from "../styles/ControlButton";

const BreakLabel = ({ breakInc, breakDec, breakLength }) => {
  return (
    <div id="break-label">
      Break
      <div className="break-wrapper">
        <ControlButton id="break-increment" onClick={() => breakInc()}>
          +
        </ControlButton>
        <p id="break-length">{breakLength}</p>
        <ControlButton id="break-decrement" onClick={() => breakDec()}>
          -
        </ControlButton>
      </div>
    </div>
  );
};

export default BreakLabel;
