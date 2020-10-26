export const Types = {
  ADD_BARBER_REQUEST: 'ADD_BARBER_REQUEST',
  ADD_BARBER_SUCCESS: 'ADD_BARBER_SUCCESS',
  ADD_BARBER_FAIL: 'ADD_BARBER_FAIL',
  ADD_BARBER_RESET: 'ADD_BARBER_RESET',
  LIST_BARBER_REQUEST: 'LIST_BARBER_REQUEST',
  LIST_BARBER_SUCCESS: 'LIST_BARBER_SUCCESS',
  LIST_BARBER_FAIL: 'LIST_BARBER_FAIL',
  EDIT_BARBER_REQUEST: 'EDIT_BARBER_REQUEST',
  EDIT_BARBER_SUCCESS: 'EDIT_BARBER_SUCCESS',
  EDIT_BARBER_FAIL: 'EDIT_BARBER_FAIL',
  EDIT_BARBER_RESET: 'EDIT_BARBER_RESET',
  DELETE_BARBER_REQUEST: 'DELETE_BARBER_REQUEST',
  DELETE_BARBER_SUCCESS: 'DELETE_BARBER_SUCCESS',
  DELETE_BARBER_FAIL: 'DELETE_BARBER_FAIL',
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

export default function barber(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_BARBER_REQUEST:
      return {
        ...state,
        addLoading: true,
        addSuccess: false,
        addError: false,
      };
    case Types.ADD_BARBER_SUCCESS:
      return {
        ...state,
        addLoading: false,
        addSuccess: true,
        addError: false,
        data: action.payload,
      };
    case Types.ADD_BARBER_FAIL:
      return {
        ...state,
        addLoading: false,
        addSuccess: false,
        addError: true,
      };
    case Types.ADD_BARBER_RESET:
      return {
        ...state,
        addSuccess: false,
      };
    case Types.LIST_BARBER_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    case Types.LIST_BARBER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        data: action.payload,
      };
    case Types.LIST_BARBER_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };
    case Types.EDIT_BARBER_REQUEST:
      return {
        ...state,
        addLoading: true,
        addSuccess: false,
        addError: false,
      };
    case Types.EDIT_BARBER_SUCCESS:
      return {
        ...state,
        addLoading: false,
        addSuccess: true,
        addError: false,
      };
    case Types.EDIT_BARBER_FAIL:
      return {
        ...state,
        addLoading: false,
        addSuccess: false,
        addError: true,
      };
    case Types.EDIT_BARBER_RESET:
      return {
        ...state,
        addSuccess: false,
      };
    case Types.DELETE_BARBER_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    case Types.DELETE_BARBER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
      };
    case Types.DELETE_BARBER_FAIL:
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
  newBarberRequest: (payload) => ({
    type: Types.ADD_BARBER_REQUEST,
    payload,
  }),
  newBarberSuccess: (payload) => ({
    type: Types.ADD_BARBER_SUCCESS,
    payload,
  }),
  newBarberError: (payload) => ({
    type: Types.ADD_BARBER_FAIL,
    payload,
  }),
  newBarberReset: () => ({
    type: Types.ADD_BARBER_RESET,
  }),
  getBarberRequest: () => ({
    type: Types.LIST_BARBER_REQUEST,
  }),
  getBarberSuccess: (data) => ({
    type: Types.LIST_BARBER_SUCCESS,
    payload: data,
  }),
  getBarberError: (payload) => ({
    type: Types.LIST_BARBER_FAIL,
    payload,
  }),
  editBarberRequest: (payload) => ({
    type: Types.EDIT_BARBER_REQUEST,
    payload,
  }),
  editBarberSuccess: () => ({
    type: Types.EDIT_BARBER_SUCCESS,
  }),
  editBarberError: (payload) => ({
    type: Types.EDIT_BARBER_FAIL,
    payload,
  }),
  editBarberReset: () => ({
    type: Types.EDIT_BARBER_RESET,
  }),
  deleteBarberRequest: (payload) => ({
    type: Types.DELETE_BARBER_REQUEST,
    payload,
  }),
  deleteBarberSuccess: () => ({
    type: Types.DELETE_BARBER_SUCCESS,
  }),
  deleteBarberError: (payload) => ({
    type: Types.DELETE_BARBER_FAIL,
    payload,
  }),
};
