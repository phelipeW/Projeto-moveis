export const Types = {
  ADD_BARBER_REQUEST: 'ADD_BARBER_REQUEST',
  ADD_BARBER_SUCCESS: 'ADD_BARBER_SUCCESS',
  ADD_BARBER_FAIL: 'ADD_BARBER_FAIL',
  ADD_BARBER_RESET: 'ADD_BARBER_RESET',
  LIST_BARBER_REQUEST: 'LIST_BARBER_REQUEST',
  LIST_BARBER_SUCCESS: 'LIST_BARBER_SUCCESS',
  LIST_BARBER_FAIL: 'LIST_BARBER_FAIL',
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
    default:
      return state;
  }
}
export const Creators = {
  newBarberRequest: (payload) => ({
    type: Types.ADD_BARBER_REQUEST,
    payload,
  }),
  newBarberSuccess: () => ({
    type: Types.ADD_BARBER_SUCCESS,
  }),
  newBarberError: (payload) => ({
    type: Types.ADD_BARBER_FAIL,
    payload,
  }),
  getBarber: () => ({
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
};
