import axios from "axios";
import { id } from "date-fns/locale";
export const getProducts = (cat) => async (dispatch, getState) => {
  const {
    userLogin: { userInfo },
  } = getState();
  if (userInfo) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    try {
      dispatch({ type: "PRODUCT_LIST_REQUEST" });
      const { data } = await axios.get(
        `https://gravitybites.in/api/products/vendor/get-products/${cat}`,
        config
      );
      dispatch({ type: "PRODUCT_LIST_SUCCESS", payload: data.products });
    } catch (error) {
      dispatch({
        type: "PRODUCT_LIST_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  }
};
export const createProduct = (formData) => async (dispatch, getState) => {
  try {
    dispatch({ type: "CREATE_PRODUCT_REQUEST" });
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
      `https://gravitybites.in/api/products/add-product`,
      {
        category: formData.category,
        subcategory: formData.subcategory,
        name: formData.name,
        image: "/uploads/carrot.jpg",
        variable: [
          {
            price: formData.price,
            qty: formData.quantity,
            discount: 0,
            unit: "Kg",
            inStock: true,
            variableName: formData.variableName,
          },
          {
            price: formData.price2,
            qty: formData.quantity2,
            discount: 0,
            unit: "Kg",
            inStock: true,
            variableName: formData.variableName2,
          },
          {
            price: formData.price3,
            qty: formData.quantity3,
            discount: 0,
            unit: "Kg",
            inStock: true,
            variableName: formData.variableName3,
          },
        ],
      },
      config
    );

    dispatch({ type: "CREATE_PRODUCT_SUCCESS", payload: data.mess });
  } catch (error) {
    dispatch({
      type: "CREATE_PRODUCT_FAIL",
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

// export const listProductDetails = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: 'PRODUCT_DETAILS_REQUEST' })
//     const { data } = await axios.get(`http://localhost:5000/api/products/${id}`)
//     dispatch({ type: 'PRODUCT_DETAILS_SUCCESS', payload: data })
//   } catch (error) {
//     dispatch({
//       type: 'PRODUCT_DETAILS_FAIL',
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     })
//   }
// }
// export const deleteProduct = (id) => async (dispatch, getState) => {
//   try {
//     dispatch({ type: 'PRODUCT_DELETE_REQUEST' })
//     const {
//       userLogin: { userInfo },
//     } = getState()
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     }
//     await axios.delete(`http://localhost:5000/api/products/${id}`, config)
//     dispatch({ type: 'PRODUCT_DELETE_SUCCESS', success: true })
//   } catch (error) {
//     dispatch({
//       type: 'PRODUCT_DELETE_FAIL',
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     })
//   }
// }

// export const createProduct = () => async (dispatch, getState) => {
//   try {
//     dispatch({ type: 'PRODUCT_CREATE_REQUEST' })
//     const {
//       userLogin: { userInfo },
//     } = getState()
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     }
//     const { data } = await axios.post(
//       `http://localhost:5000/api/products`,
//       {},
//       config
//     )
//     dispatch({ type: 'PRODUCT_CREATE_SUCCESS', payload: data })
//   } catch (error) {
//     dispatch({
//       type: 'PRODUCT_CREATE_FAIL',
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     })
//   }
// }

// export const updateProduct = (product) => async (dispatch, getState) => {
//   try {
//     dispatch({ type: 'PRODUCT_UPDATE_REQUEST' })
//     const {
//       userLogin: { userInfo },
//     } = getState()
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     }
//     const { data } = await axios.put(
//       `http://localhost:5000/api/products/${product._id}`,
//       product,
//       config
//     )
//     dispatch({ type: 'PRODUCT_UPDATE_SUCCESS', payload: data })
//   } catch (error) {
//     dispatch({
//       type: 'PRODUCT_UPDATE_FAIL',
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     })
//   }
// }
