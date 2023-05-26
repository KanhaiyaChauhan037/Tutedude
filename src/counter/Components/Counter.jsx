import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CounterDec, CounterInc } from "../Redux/Action";

const Counter = () => {
  const count = useSelector((state) => state.count.count);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(CounterInc)}>Inc</button>
      <button disabled={count === 0} onClick={() => dispatch(CounterDec)}>
        Dec
      </button>
    </div>
  );
};

export default Counter;
