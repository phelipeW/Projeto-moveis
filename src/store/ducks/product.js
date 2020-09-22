export const Types = {
  ADD_PRODUCT_REQUEST: 'ADD_PRODUCT_REQUEST',
  ADD_PRODUCT_SUCCESS: 'ADD_PRODUCT_SUCCESS',
  ADD_PRODUCT_FAIL: 'ADD_PRODUCT_FAIL',
  ADD_PRODUCT_RESET: 'ADD_PROCUT_RESET',
  EDIT_PRODUCT_REQUEST: 'EDIT_PRODUCT_REQUEST',
  EDIT_PRODUCT_SUCCESS: 'EDIT_PRODUCT_SUCCESS',
  EDIT_PRODUCT_FAIL: 'EDIT_PRODUCT_FAIL',
  EDIT_PRODUCT_RESET: 'EDIT_PROCUT_RESET',
  LIST_PRODUCT_REQUEST: 'LIST_PRODUCT_REQUEST',
  LIST_PRODUCT_SUCCESS: 'LIST_PRODUCT_SUCCESS',
  LIST_PRODUCT_FAIL: 'LIST_PRODUCT_FAIL',
  REMOVE_PRODUCT_REQUEST: 'REMOVE_PRODUCT_REQUEST',
  REMOVE_PRODUCT_SUCCESS: 'REMOVE_PRODUCT_SUCCESS',
  REMOVE_PRODUCT_FAIL: 'REMOVE_PRODUCT_FAIL',
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
    case Types.ADD_PRODUCT_RESET:
      return {
        ...state,
        addSuccess: false,
        addLoading: false,
        addError: false,
      };
    case Types.LIST_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    case Types.LIST_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        data: action.payload,
      };
    case Types.LIST_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };
    case Types.REMOVE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    case Types.REMOVE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
      };
    case Types.REMOVE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };
    case Types.EDIT_PRODUCT_REQUEST:
      return {
        ...state,
        addLoading: true,
        addSuccess: false,
        addError: false,
      };
    case Types.EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        addLoading: false,
        addSuccess: true,
        addError: false,
        data: action.payload,
      };
    case Types.EDIT_PRODUCT_FAIL:
      return {
        ...state,
        addLoading: false,
        addSuccess: false,
        addError: true,
      };
    case Types.EDIT_PRODUCT_RESET:
      console.log('reset?');
      return {
        ...state,
        addSuccess: false,
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
  postProductReset: () => ({
    type: Types.ADD_PRODUCT_RESET,
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
  removeProductRequest: (payload) => ({
    type: Types.REMOVE_PRODUCT_REQUEST,
    payload,
  }),
  removeProductSuccess: () => ({
    type: Types.REMOVE_PRODUCT_SUCCESS,
  }),
  removeProductError: (payload) => ({
    type: Types.REMOVE_PRODUCT_FAIL,
    payload,
  }),
  editProductRequest: (payload) => ({
    type: Types.EDIT_PRODUCT_REQUEST,
    payload,
  }),
  editProductSuccess: () => ({
    type: Types.EDIT_PRODUCT_SUCCESS,
  }),
  editProductError: (payload) => ({
    type: Types.EDIT_PRODUCT_FAIL,
    payload,
  }),
  editProductReset: () => ({
    type: Types.EDIT_PRODUCT_RESET,
  }),
};
