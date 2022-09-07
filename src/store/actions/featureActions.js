import axios from "axios";
export const storeOnline = () => async (dispatch, getState) => {
  const {
    userLogin: { userInfo },
  } = getState();
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  try {
    dispatch({ type: "STORE_ONLINE_REQUEST" });
    const { data } = await axios.put("https://gravitybites.in/api/stores/goOnline", config);
    dispatch({ type: "STORE_ONLINE_SUCCESS", payload: data.mess });
  } catch (error) {
    dispatch({
      type: "STORE_ONLINE_FAIL",
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
