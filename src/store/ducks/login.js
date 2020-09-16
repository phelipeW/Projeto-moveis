export const Types = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
};

const INITIAL_STATE = {
  data: [],
  success: false,
  loading: false,
  error: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        data: action.payload,
      };
    case Types.LOGIN_FAIL:
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
  loginRequest: (payload) => ({
    type: Types.LOGIN_REQUEST,
    payload,
  }),
  loginSuccess: () => ({
    type: Types.LOGIN_SUCCESS,
  }),
  loginError: (payload) => ({
    type: Types.LOGIN_FAIL,
    payload,
  }),
};
