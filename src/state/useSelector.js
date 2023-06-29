import * as React from "react";
import store from "./store";

export const useSelector = (fn) => {
  const [count, setCount] = React.useState(() => store.getState());

  React.useEffect(() => {
    store.subscribe(() => {
      const state = store.getState();
      setCount(state);
    });
    // return () => unsubscribe(id)
  }, []);

  return count;
};
