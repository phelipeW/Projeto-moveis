export const Types = {
  ADD_PRODUCT_REQUEST: 'ADD_PRODUCT_REQUEST',
  ADD_PRODUCT_SUCCESS: 'ADD_PRODUCT_SUCCESS',
  ADD_PRODUCT_FAIL: 'ADD_PRODUCT_FAIL',
  LIST_PRODUCT_REQUEST: 'LIST_PRODUCT_REQUEST',
  LIST_PRODUCT_SUCCESS: 'LIST_PRODUCT_SUCCESS',
  LIST_PRODUCT_FAIL: 'LIST_PRODUCT_FAIL',
};

const INITIAL_STATE = {
  data: [],
  success: false,
  loading: false,
  error: false,
  addSuccess: false,
  addLoading: false,
  addError: false,
};

export default function product(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_PRODUCT_REQUEST:
      return {
        ...state,
        addLoading: true,
        addSuccess: false,
        addError: false,
      };
    case Types.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        addLoading: false,
        addSuccess: true,
        addError: false,
        data: action.payload,
      };
    case Types.ADD_PRODUCT_FAIL:
      return {
        ...state,
        addLoading: false,
        addSuccess: false,
        addError: true,
      };
    case Types.LIST_PRODUCT_REQUEST:
      return {
        ...state,
        addLoading: true,
        addSuccess: false,
        addError: false,
      };
    case Types.LIST_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        ...action.payload,
      };
    case Types.LIST_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };
    default:
      return state;
  }
}
export const Creators = {
  postProduct: (payload) => ({
    type: Types.ADD_PRODUCT_REQUEST,
    payload,
  }),
  postProductSuccess: () => ({
    type: Types.ADD_PRODUCT_SUCCESS,
  }),
  postProductError: (payload) => ({
    type: Types.ADD_PRODUCT_FAIL,
    payload,
  }),
  getProduct: () => ({
    type: Types.LIST_PRODUCT_REQUEST,
  }),
  getProductSuccess: (data) => ({
    type: Types.LIST_PRODUCT_SUCCESS,
    payload: data,
  }),
  getProductError: (payload) => ({
    type: Types.LIST_PRODUCT_FAIL,
    payload,
  }),
};
