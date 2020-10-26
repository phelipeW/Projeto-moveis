export const Types = {
  ADD_SCHEDULE_REQUEST: 'ADD_SCHEDULE_REQUEST',
  ADD_SCHEDULE_SUCCESS: 'ADD_SCHEDULE_SUCCESS',
  ADD_SCHEDULE_FAIL: 'ADD_SCHEDULE_FAIL',
  ADD_SCHEDULE_RESET: 'ADD_SCHEDULE_RESET',
  EDIT_SCHEDULE_REQUEST: 'EDIT_SCHEDULE_REQUEST',
  EDIT_SCHEDULE_SUCCESS: 'EDIT_SCHEDULE_SUCCESS',
  EDIT_SCHEDULE_FAIL: 'EDIT_SCHEDULE_FAIL',
  REMOVE_SCHEDULE_REQUEST: 'REMOVE_SCHEDULE_REQUEST',
  REMOVE_SCHEDULE_SUCCESS: 'REMOVE_SCHEDULE_SUCCESS',
  REMOVE_SCHEDULE_FAIL: 'REMOVE_SCHEDULE_FAIL',
  LIST_SCHEDULE_REQUEST: 'LIST_SCHEDULE_REQUEST',
  LIST_SCHEDULE_SUCCESS: 'LIST_SCHEDULE_SUCCESS',
  LIST_SCHEDULE_FAIL: 'LIST_SCHEDULE_FAIL',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  success: false,
};

export default function schedule(state = INITIAL_STATE, action) {
  const {
    ADD_SCHEDULE_REQUEST,
    ADD_SCHEDULE_SUCCESS,
    ADD_SCHEDULE_FAIL,
    ADD_SCHEDULE_RESET,
    REMOVE_SCHEDULE_REQUEST,
    REMOVE_SCHEDULE_SUCCESS,
    REMOVE_SCHEDULE_FAIL,
    EDIT_SCHEDULE_REQUEST,
    EDIT_SCHEDULE_SUCCESS,
    EDIT_SCHEDULE_FAIL,
    LIST_SCHEDULE_REQUEST,
    LIST_SCHEDULE_SUCCESS,
    LIST_SCHEDULE_FAIL,
  } = Types;
  switch (action.type) {
    case ADD_SCHEDULE_REQUEST:
      return { ...state, loading: true, error: false, success: false };
    case ADD_SCHEDULE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
      };
    case ADD_SCHEDULE_FAIL:
      return { ...state, loading: false, error: true };
    case ADD_SCHEDULE_RESET:
      return { ...state, loading: false, error: false, success: false };

    case EDIT_SCHEDULE_REQUEST:
      return { ...state, loading: true, error: false, success: false };
    case EDIT_SCHEDULE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
      };
    case EDIT_SCHEDULE_FAIL:
      return { ...state, loading: false, error: true };

    case REMOVE_SCHEDULE_REQUEST:
      return { ...state, loading: true, error: false, success: false };
    case REMOVE_SCHEDULE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
      };
    case REMOVE_SCHEDULE_FAIL:
      return { ...state, loading: false, error: true };
    case LIST_SCHEDULE_REQUEST:
      return { ...state, loading: true, error: false, success: false };
    case LIST_SCHEDULE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        data: action.payload,
      };
    case LIST_SCHEDULE_FAIL:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

export const Creators = {
  postScheduleRequest: (payload) => ({
    type: Types.ADD_SCHEDULE_REQUEST,
    payload,
  }),
  postScheduleSuccess: (payload) => ({
    type: Types.ADD_SCHEDULE_SUCCESS,
    payload,
  }),
  postScheduleFail: () => ({
    type: Types.ADD_SCHEDULE_FAIL,
  }),
  postScheduleReset: () => ({
    type: Types.ADD_SCHEDULE_RESET,
  }),
  getScheduleRequest: (payload) => ({
    type: Types.LIST_SCHEDULE_REQUEST,
    payload,
  }),
  getScheduleSuccess: (payload) => ({
    type: Types.LIST_SCHEDULE_SUCCESS,
    payload,
  }),
  getScheduleFail: () => ({
    type: Types.LIST_SCHEDULE_FAIL,
  }),
  removeScheduleRequest: (payload) => ({
    type: Types.REMOVE_SCHEDULE_REQUEST,
    payload,
  }),
  removeScheduleSuccess: () => ({
    type: Types.REMOVE_SCHEDULE_SUCCESS,
  }),
  removeScheduleFail: () => ({
    type: Types.REMOVE_SCHEDULE_FAIL,
  }),
  editScheduleRequest: (payload) => ({
    type: Types.EDIT_SCHEDULE_REQUEST,
    payload,
  }),
  editScheduleSuccess: (payload) => ({
    type: Types.EDIT_SCHEDULE_SUCCESS,
    payload,
  }),
  editScheduleFail: () => ({
    type: Types.EDIT_SCHEDULE_FAIL,
  }),
};
