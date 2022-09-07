export const onlineReducer = (state = {}, action) => {
  switch (action.type) {
    case "STORE_ONLINE_REQUEST":
      return { loading: true };
    case "STORE_ONLINE_SUCCESS":
      return { loading: false, online: true, message: action.payload };
    // return updateObject(state, { loading: false, products: action.payload })
    case "STORE_ONLINE_FAIL":
      return { loading: false, error: action.payload };
    case "STORE_ONLINE_RESET":
      return { loading: false, online: false };
    default:
      return state;
  }
};
