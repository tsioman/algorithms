const createStore = (reducer, preoladState = {}) => {
  let currentState = preoladState;
  let currentReducer = reducer;
  const getState = () => currentState;
  const dispatch = (action) => {
    currentState = currentReducer(currentState, action)
    return action;
  }
  return {
    dispatch,
    getState
  }
}

const ACTION_INCREMENT = {
  type: "INCREMENT",
  payload: {}
}

const redcuer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state.num++;
    default:
      return state;
  }
};

const store = createStore(redcuer, { num: 0 })
const state = store.getState()

console.log(state);
store.dispatch(ACTION_INCREMENT)
console.log(state)
