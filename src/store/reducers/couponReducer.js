export const getAdminCouponsReducer = (state = { coupons: [] }, action) => {
  switch (action.type) {
    case "ADMIN_COUPONS_REQUEST":
      return { loading: true };
    case "ADMIN_COUPONS_SUCCESS":
      return { loading: false, coupons: action.payload };

    case "ADMIN_COUPONS_FAIL":
      return { loading: false, error: action.payload };
    case "ADMIN_COUPONS_RESET":
      return { loading: false, coupons: [] };
    default:
      return state;
  }
};
export const getVendorCouponsReducer = (state = { vendorCoupons: [] }, action) => {
  switch (action.type) {
    case "VENDOR_COUPONS_REQUEST":
      return { loading: true };
    case "VENDOR_COUPONS_SUCCESS":
      return { loading: false, vendorCoupons: action.payload };

    case "VENDOR_COUPONS_FAIL":
      return { loading: false, error: action.payload };
    case "VENDOR_COUPONS_RESET":
      return { loading: false, vendorCoupons: [] };
    default:
      return state;
  }
};
export const createVendorCouponsReducer = (state = {}, action) => {
  switch (action.type) {
    case "VENDOR_CREATE_COUPONS_REQUEST":
      return { loading: true };
    case "VENDOR_CREATE_COUPONS_SUCCESS":
      return { loading: false, message: action.payload };

    case "VENDOR_CREATE_COUPONS_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
// export const userRegisterReducer = (state = {}, action) => {
//   switch (action.type) {
//     case "USER_REGISTER_REQUEST":
//       return { loading: true };
//     case "USER_REGISTER_SUCCESS":
//       return { loading: false, userInfo: action.payload };

//     case "USER_REGISTER_FAIL":
//       return { loading: false, error: action.payload };

//     default:
//       return state;
//   }
// };

// export const userDetailsReducer = (state = { user: {} }, action) => {
//   switch (action.type) {
//     case "USER_DETAILS_REQUEST":
//       return { ...state, loading: true };
//     case "USER_DETAILS_SUCCESS":
//       return { loading: false, user: action.payload };

//     case "USER_DETAILS_FAIL":
//       return { loading: false, error: action.payload };

//     default:
//       return state;
//   }
// };

// export const userUpdateProfileReducer = (state = {}, action) => {
//   switch (action.type) {
//     case "USER_UPDATE_PROFILE_REQUEST":
//       return { loading: true };
//     case "USER_UPDATE_PROFILE_SUCCESS":
//       return { loading: false, success: true, userInfo: action.payload };

//     case "USER_UPDATE_PROFILE_FAIL":
//       return { loading: false, error: action.payload };

//     default:
//       return state;
//   }
// };
