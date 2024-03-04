import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../state/store";
import {decrement, increment, incrementAsync, incrementByAmount} from "../state/counter/counterSlice";

const Counter = () => {

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  const [incrementAmount, setIncrementAmount] = React.useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <input
        style={{
          padding: "10px",
          margin: "10px",
          fontSize: "20px",
        }}
        type="number"
        onChange={(e) => setIncrementAmount(Number(e.target.value))}
      />
      <div>
        <button
          style={{
            padding: "10px",
            margin: "10px",
            fontSize: "20px",
          }}
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <button
          style={{
            padding: "10px",
            margin: "10px",
            fontSize: "20px",
          }}
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          style={{
            padding: "10px",
            margin: "10px",
            fontSize: "20px",
          }}
          onClick={() => dispatch(incrementByAmount(incrementAmount))}
        >
          Increment by {incrementAmount}
        </button>
        <button
          style={{
            padding: "10px",
            margin: "10px",
            fontSize: "20px",
          }}
          onClick={() => dispatch(incrementAsync(incrementAmount))}
        >
          Async Increment by {incrementAmount}
        </button>
      </div>
    </div>
  );
};

export default Counter;