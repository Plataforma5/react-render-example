import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increase, decrease } from "./state/store";

function Redux() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state);

  const handleIncrease = () => {
    dispatch(increase());
  };

  const handleDecrease = () => {
    dispatch(decrease());
  };

  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
    </>
  );
}

export default Redux;
