//convert time in seconds to a sring in 00:00 format
const convertTime = (timeInSecs) => {
  const mins =
    Math.floor(timeInSecs / 60) > 9
      ? Math.floor(timeInSecs / 60).toString()
      : "0" + Math.floor(timeInSecs / 60).toString();
  const secs =
    timeInSecs - mins * 60 > 9
      ? timeInSecs - mins * 60
      : "0" + (timeInSecs - mins * 60).toString();
  const displayTime = mins + ":" + secs;
  return displayTime;
};

export default convertTime;
