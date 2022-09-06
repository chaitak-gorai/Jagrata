import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_REQUEST" });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "https://gravitybites.in/api/stores/login",
      {
        email,
        password,
      },
      config
    );

    dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: "USER_LOGOUT" });
  // dispatch({ type: "USER_DETAILS_RESET" });
  // dispatch({ type: "ORDER_MY_LIST_RESET" });
  // dispatch({ type: "USER_LIST_RESET" });
};

export const register = (formik) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_REQUEST" });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "https://gravitybites.in/api/stores/register-store",
      {
        fullName: formik.fullName,
        storeName: formik.storeName,
        phoneNo: formik.phoneNo,
        address: {
          streetName: formik.streetName,
          streetNumber: formik.streetNumber,
          city: formik.city,
          countryCode: formik.countryCode,
          stateCode: formik.streetCode,
          zipcode: formik.zipcode,
          latitude: formik.latitude,
          longitude: formik.longitude,
        },
        email: formik.email,
        password: formik.password,
        cancelledCheque: formik.cancelledCheque,
        uploadMenu: formik.uploadMenu,
        uploadPan: formik.uploadPan,
        licenseImage: formik.licenseImage,
        expiryDate: formik.expiryDate,
        uploadGSTcertificate: formik.uploadGSTcertificate,
        storeImage: formik.storeImage,
        active: formik.active,
        whatsappUpdate: formik.whatsappUpdate,
        cashback: formik.cashback,
        terms: formik.terms,
        policy: formik.policy,
        gst: formik.gst,
        ownerPan: formik.ownerPan,
        bankName: formik.bankName,
        accountHolder: formik.accountHolder,
        accountNo: formik.accountNo,
        ifsc: formik.ifsc,
        upiId: formik.upiId,
        storeManager: formik.storeManager,
        categories: formik.categories,
        services: formik.services,
        liscenseNo: formik.liscenseNo,
        licenseType: formik.licenseType,
        openingTime: formik.openingTime,
        closingTime: formik.closingTime,
      },
      config
    );

    dispatch({ type: "USER_REGISTER_SUCCESS", payload: data });
    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "USER_REGISTER_FAIL",
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

// export const getUserDetails = (id) => async (dispatch, getState) => {
//   try {
//     dispatch({ type: "USER_DETAILS_REQUEST" });
//     const {
//       userLogin: { userInfo },
//     } = getState();
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };

//     const { data } = await axios.get(
//       `http://localhost:5000/api/users/${id}`,

//       config
//     );

//     dispatch({ type: "USER_DETAILS_SUCCESS", payload: data });
//   } catch (error) {
//     dispatch({
//       type: "USER_DETAILS_FAIL",
//       payload:
//         error.response && error.response.data.message ? error.response.data.message : error.message,
//     });
//   }
// };
// export const updateUserProfile = (user) => async (dispatch, getState) => {
//   try {
//     dispatch({ type: "USER_UPDATE_PROFILE_REQUEST" });
//     const {
//       userLogin: { userInfo },
//     } = getState();
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };

//     const { data } = await axios.put(`http://localhost:5000/api/users/profile`, user, config);

//     dispatch({ type: "USER_UPDATE_PROFILE_SUCCESS", payload: data });
//   } catch (error) {
//     dispatch({
//       type: "USER_UPDATE_PROFILE_FAIL",
//       payload:
//         error.response && error.response.data.message ? error.response.data.message : error.message,
//     });
//   }
// };

// export const getAllUsers = () => async (dispatch, getState) => {
//   try {
//     dispatch({ type: "USER_LIST_REQUEST" });
//     const {
//       userLogin: { userInfo },
//     } = getState();
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };

//     const { data } = await axios.get(
//       `http://localhost:5000/api/users`,

//       config
//     );

//     dispatch({ type: "USER_LIST_SUCCESS", payload: data });
//   } catch (error) {
//     dispatch({
//       type: "USER_LIST_FAIL",
//       payload:
//         error.response && error.response.data.message ? error.response.data.message : error.message,
//     });
//   }
// };

// export const deleteUserData = (id) => async (dispatch, getState) => {
//   try {
//     dispatch({ type: "USER_DELETE_REQUEST" });
//     const {
//       userLogin: { userInfo },
//     } = getState();
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };

//     await axios.delete(
//       `http://localhost:5000/api/users/${id}`,

//       config
//     );

//     dispatch({ type: "USER_DELETE_SUCCESS" });
//   } catch (error) {
//     dispatch({
//       type: "USER_DELETE_FAIL",
//       payload:
//         error.response && error.response.data.message ? error.response.data.message : error.message,
//     });
//   }
// };

// export const updateUser = (user) => async (dispatch, getState) => {
//   try {
//     dispatch({ type: "USER_UPDATE_REQUEST" });
//     const {
//       userLogin: { userInfo },
//     } = getState();
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };

//     const { data } = await axios.put(`http://localhost:5000/api/users/${user._id}`, user, config);

//     dispatch({ type: "USER_UPDATE_SUCCESS" });
//     dispatch({ type: "USER_DETAILS_SUCCESS", payload: data });
//   } catch (error) {
//     dispatch({
//       type: "USER_UPDATE_FAIL",
//       payload:
//         error.response && error.response.data.message ? error.response.data.message : error.message,
//     });
//   }
// };
