const initialState = {
  length: 3,
};

const carouselReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // case "SET_INCREASE":
    //   return action.payload > initialState.length ? 0 : action.payload;
    // case "SET_DECREASE":
    //   return action.payload < 0 ? initialState.length : action.payload;
    default:
      return state;
  }
};

export default carouselReducer;
