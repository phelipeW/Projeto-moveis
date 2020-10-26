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
  ADD_SERVICE_REQUEST: 'ADD_SERVICE_REQUEST',
  ADD_SERVICE_SUCCESS: 'ADD_SERVICE_SUCCESS',
  ADD_SERVICE_FAIL: 'ADD_SERVICE_FAIL',
  ADD_SERVICE_RESET: 'ADD_SERVICE_RESET',
  EDIT_SERVICE_REQUEST: 'EDIT_SERVICE_REQUEST',
  EDIT_SERVICE_SUCCESS: 'EDIT_SERVICE_SUCCESS',
  EDIT_SERVICE_FAIL: 'EDIT_SERVICE_FAIL',
  EDIT_SERVICE_RESET: 'EDIT_SERVICE_RESET',
  LIST_SERVICE_REQUEST: 'LIST_SERVICE_REQUEST',
  LIST_SERVICE_SUCCESS: 'LIST_SERVICE_SUCCESS',
  LIST_SERVICE_FAIL: 'LIST_SERVICE_FAIL',
  REMOVE_SERVICE_REQUEST: 'REMOVE_SERVICE_REQUEST',
  REMOVE_SERVICE_SUCCESS: 'REMOVE_SERVICE_SUCCESS',
  REMOVE_SERVICE_FAIL: 'REMOVE_SERVICE_FAIL',
};

const INITIAL_STATE = {
  data: [],
  serviceData: [],
  success: false,
  loading: false,
  error: false,
  addSuccess: false,
  addLoading: false,
  addError: false,
  serviceSucess: false,
  serviceLoading: false,
  serviceError: false,
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
      return {
        ...state,
        addSuccess: false,
      };
    case Types.ADD_SERVICE_REQUEST:
      return {
        ...state,
        addLoading: true,
        addSuccess: false,
        addError: false,
      };
    case Types.ADD_SERVICE_SUCCESS:
      return {
        ...state,
        addLoading: false,
        addSuccess: true,
        addError: false,
        serviceData: action.payload,
      };
    case Types.ADD_SERVICE_FAIL:
      return {
        ...state,
        addLoading: false,
        addSuccess: false,
        addError: true,
      };
    case Types.ADD_SERVICE_RESET:
      return {
        ...state,
        addSuccess: false,
        addLoading: false,
        addError: false,
      };
    case Types.LIST_SERVICE_REQUEST:
      return {
        ...state,
        serviceLoading: true,
        serviceSuccess: false,
        serviceError: false,
      };
    case Types.LIST_SERVICE_SUCCESS:
      return {
        ...state,
        serviceLoading: false,
        serviceSuccess: true,
        serviceError: false,
        serviceData: action.payload,
      };
    case Types.LIST_SERVICE_FAIL:
      return {
        ...state,
        serviceLoading: false,
        serviceSuccess: false,
        serviceError: true,
      };
    case Types.REMOVE_SERVICE_REQUEST:
      return {
        ...state,
        serviceLoading: true,
        serviceSuccess: false,
        serviceError: false,
      };
    case Types.REMOVE_SERVICE_SUCCESS:
      return {
        ...state,
        serviceLoading: false,
        serviceSuccess: true,
        serviceError: false,
      };
    case Types.REMOVE_SERVICE_FAIL:
      return {
        ...state,
        serviceLoading: false,
        serviceSuccess: false,
        serviceError: true,
      };
    case Types.EDIT_SERVICE_REQUEST:
      return {
        ...state,
        addLoading: true,
        addSuccess: false,
        addError: false,
      };
    case Types.EDIT_SERVICE_SUCCESS:
      return {
        ...state,
        addLoading: false,
        addSuccess: true,
        addError: false,
      };
    case Types.EDIT_SERVICE_FAIL:
      return {
        ...state,
        addLoading: false,
        addSuccess: false,
        addError: true,
      };
    case Types.EDIT_SERVICE_RESET:
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
  postProductSuccess: (payload) => ({
    type: Types.ADD_PRODUCT_SUCCESS,
    payload,
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
  removeProductError: () => ({
    type: Types.REMOVE_PRODUCT_FAIL,
  }),
  editProductRequest: (payload) => ({
    type: Types.EDIT_PRODUCT_REQUEST,
    payload,
  }),
  editProductSuccess: (payload) => ({
    type: Types.EDIT_PRODUCT_SUCCESS,
    payload,
  }),
  editProductError: () => ({
    type: Types.EDIT_PRODUCT_FAIL,
  }),
  editProductReset: () => ({
    type: Types.EDIT_PRODUCT_RESET,
  }),

  // SERVICE
  postService: (payload) => ({
    type: Types.ADD_SERVICE_REQUEST,
    payload,
  }),
  postServiceSuccess: (payload) => ({
    type: Types.ADD_SERVICE_SUCCESS,
    payload,
  }),
  postServiceError: () => ({
    type: Types.ADD_SERVICE_FAIL,
  }),
  postServiceReset: () => ({
    type: Types.ADD_SERVICE_RESET,
  }),
  getService: () => ({
    type: Types.LIST_SERVICE_REQUEST,
  }),
  getServiceSuccess: (data) => ({
    type: Types.LIST_SERVICE_SUCCESS,
    payload: data,
  }),
  getServiceError: () => ({
    type: Types.LIST_SERVICE_FAIL,
  }),
  removeServiceRequest: (payload) => ({
    type: Types.REMOVE_SERVICE_REQUEST,
    payload,
  }),
  removeServiceSuccess: () => ({
    type: Types.REMOVE_SERVICE_SUCCESS,
  }),
  removeServiceError: () => ({
    type: Types.REMOVE_SERVICE_FAIL,
  }),
  editServiceRequest: (payload) => ({
    type: Types.EDIT_SERVICE_REQUEST,
    payload,
  }),
  editServiceSuccess: () => ({
    type: Types.EDIT_SERVICE_SUCCESS,
  }),
  editServiceError: () => ({
    type: Types.EDIT_SERVICE_FAIL,
  }),
  editServiceReset: () => ({
    type: Types.EDIT_SERVICE_RESET,
  }),
};
