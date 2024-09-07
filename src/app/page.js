"use client";

import { useEffect, useState, useRef } from "react";
function CounterWidget({ title, count, onIncrement, onDecrement, className }) {
  return (
    <div className={`${className} widget`}>
      <h2>{title}</h2>
      <button onClick={onDecrement}>-</button>
      <p>{count}</p>
      <button onClick={onIncrement}>+</button>
    </div>
  );
}
export default function Home() {
  const [outreachCount, setOutreachCount] = useState(0);
  const initialRender = useRef(true);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("outreachCount"))) {
      const outreachCount = localStorage.getItem("outreachCount");
      setOutreachCount(JSON.parse(outreachCount)) || 0;
    }
  }, []); // Run on mount

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    localStorage.setItem("outreachCount", JSON.stringify(outreachCount));
  }, [outreachCount]);

  function handleIncrement(setCount, count) {
    setCount(count + 1);
  }
  function handleDecrement(setCount, count) {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <div className="widget-container">
      <CounterWidget
        className="outreach-widget widget"
        title="Cold Outreach Count Today"
        count={outreachCount}
        onIncrement={() => {
          handleIncrement(setOutreachCount, outreachCount);
        }}
        onDecrement={() => {
          handleDecrement(setOutreachCount, outreachCount);
        }}
      />
      {/* <CounterWidget
        className="leetcode-widget widget"
        title="Leetcode Problems Solved Today"
        count={leetcodeCount}
        onIncrement={() => {
          handleIncrement(setLeetCodeCount, leetcodeCount);
          }}
          onDecrement={() => {
            handleDecrement(setLeetCodeCount, leetcodeCount);
            }}
            />
            <CounterWidget
            className="jobs-applied-widget widget"
            title="Jobs Applied To Today"
            count={jobsCount}
            onIncrement={() => {
              handleIncrement(setJobsCount, jobsCount);
              }}
              onDecrement={() => {
                handleDecrement(setJobsCount, jobsCount);
                }}
                /> */}
    </div>
  );
}
//ATTEMPT NUMBER 2
// const [outreachCount, setOutreachCount] = useState(() => {
//   const outreachCount = localStorage.getItem("outreachCount");
//   return JSON.parse(outreachCount) || 0;
// });

// useEffect(() => {
//   localStorage.setItem("outreachCount", JSON.stringify(outreachCount));
// }, [outreachCount]);

// useEffect(() => {
//   const outreachCount = JSON.parse(localStorage.getItem("outreachCount"));
//   if (outreachCount) {
//     setOutreachCount(outreachCount);
//   }
// }, []);
// const [outreachCount, setOutreachCount] = useState(() => {
//   return parseInt(localStorage.getItem("outReachCount")) || 0;
// });
// const [leetcodeCount, setLeetCodeCount] = useState(() => {
//   return parseInt(localStorage.getItem("leetcodeCount")) || 0;
// });
// const [jobsCount, setJobsCount] = useState(() => {
//   return parseInt(localStorage.getItem("jobsCount")) || 0;
// });
