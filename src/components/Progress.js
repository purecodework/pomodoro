import React from "react";

// const Circle = ({ color, pct }) => {
//   const r = 111;
//   const perimeter = 2 * Math.PI * r;
//   const strokePct = ((100 - pct) * perimeter) / 100;
//   return (

//   );
// };

const Progress = ({ percentage, isSession, isStart }) => {
  const r = 111;
  const cx = 115;
  const perimeter = 2 * Math.PI * r;
  const offsetPercent = ((100 - percentage) * perimeter) / 100;
  return (
    <svg width={230} height={230}>
      <g transform={`rotate(-90 ${"115 115"})`}>
        <circle
          cx={cx}
          cy={cx}
          r={r}
          fill="transparent"
          stroke={
            offsetPercent !== perimeter
              ? isSession
                ? "#1890ff"
                : "#10b981"
              : "transparent"
          }
          strokeWidth={"6px"}
          strokeDasharray={perimeter}
          strokeDashoffset={percentage ? offsetPercent : 0}
        ></circle>
      </g>
    </svg>
  );
};

export default Progress;
