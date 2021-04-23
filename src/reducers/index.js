const sampleReducer = (store = 0, action) => {
  switch (action.type) {
    case "RUN":
      return store + 1;
    default:
      return store;
  }
};

export default sampleReducer;
