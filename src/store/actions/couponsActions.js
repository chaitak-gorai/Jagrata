import axios from "axios";

export const getAdminCoupons = () => async (dispatch, getState) => {
  try {
    dispatch({ type: "ADMIN_COUPONS_REQUEST" });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `https://gravitybites.in/api/stores/viewAdminCoupon`,

      config
    );

    dispatch({ type: "ADMIN_COUPONS_SUCCESS", payload: data.coupon });
  } catch (error) {
    dispatch({
      type: "ADMIN_COUPONS_FAIL",
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
export const getVendorCoupons = () => async (dispatch, getState) => {
  try {
    dispatch({ type: "VENDOR_COUPONS_REQUEST" });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `https://gravitybites.in/api/stores/viewCoupon`,

      config
    );

    dispatch({ type: "VENDOR_COUPONS_SUCCESS", payload: data.mess });
  } catch (error) {
    dispatch({
      type: "VENDOR_COUPONS_FAIL",
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
export const createVendorCoupons = (formData) => async (dispatch, getState) => {
  try {
    dispatch({ type: "VENDOR_CREATE_COUPONS_REQUEST" });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `https://gravitybites.in/api/stores/createCoupons`,
      {
        category: formData.category,
        image: formData.image,
        couponCode: formData.couponCode,
        isPercent: true,
        amountOff: formData.amountOff,
        expiryDuration: formData.expiryDuration,
      },
      config
    );

    dispatch({ type: "VENDOR_CREATE_COUPONS_SUCCESS", payload: data.mess });
  } catch (error) {
    dispatch({
      type: "VENDOR_CREATE_COUPONS_FAIL",
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
