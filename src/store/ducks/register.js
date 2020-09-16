export const Types = {
  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAIL: 'REGISTER_FAIL',
  REGISTER_CLEAR: 'REGISTER_CLEAR',
};

const INITIAL_STATE = {
  loading: false,
  error: false,
  success: false,
};

export default function register(state = INITIAL_STATE, action) {
  const {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    REGISTER_CLEAR,
  } = Types;
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, loading: true, error: false, success: false };
    case REGISTER_SUCCESS:
      return { ...state, loading: false, error: false, success: true };
    case REGISTER_FAIL:
      return { ...state, loading: false, error: true };
    case REGISTER_CLEAR:
      return { ...state, loading: false, error: false, success: false };

    default:
      return state;
  }
}

export const Creators = {
  registerRequest: (payload) => ({
    type: Types.REGISTER_REQUEST,
    payload,
  }),
  registerSuccess: () => ({
    type: Types.REGISTER_SUCCESS,
  }),
  registerFail: () => ({
    type: Types.REGISTER_FAIL,
  }),
  registerClear: () => ({
    type: Types.REGISTER_CLEAR,
  }),
};
