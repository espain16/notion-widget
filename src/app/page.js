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
    const data = window.localStorage.getItem("outreachCount");
    if (data !== null) setOutreachCount(JSON.parse(data));
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    window.localStorage.setItem("outreachCount", JSON.stringify(outreachCount));
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
    </div>
  );
  {
    /* <CounterWidget
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
            /> */
  }
}
