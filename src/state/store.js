import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";
// function createStore(reducer) {
//   let state = reducer(null, { type: "@@INIT@@" });
//   const handlers = [];
//   return {
//     getState() {
//       return state;
//     },
//     dispatch(action) {
//       state = reducer(state, action);
//       handlers.forEach((fn) => fn());
//     },
//     subscribe(fn) {
//       handlers.push(fn);
//     },
//   };
// }

// function createAction(name) {
//   const actionCreator = function (payload) {
//     return {
//       type: name,
//       payload,
//     };
//   };
//   actionCreator.toString = () => name;
//   return actionCreator;
// }

export const increase = createAction("increase");
export const decrease = createAction("decrease");

const reducer = createReducer(0, {
  [increase]: (state, action) => state + 1,
  [decrease]: (state, action) => state - 1,
  addMultiple: (state, action) => state + action.payload,
});

// function reducer(state = 0, action) {
//   switch (action.type) {
//     case "increase":
//       return state + 1;

//     case "decrease":
//       return state - 1;

//     case "ADD_MULTIPLE":
//       return state + action.payload;

//     default:
//       return state;
//   }
// }

const store = configureStore({ reducer });

export default store;
