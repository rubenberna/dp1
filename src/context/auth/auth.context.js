import createDataContextHelper from '../createContextHelper'
import { msalAcquireTokenSilent, msalLogout } from '../../utils/security/security.util';

const TYPES = {
  LOGIN: 'auth/login',
  LOGOUT: 'auth/logout',
  SET_LOADING: 'auth/setLoading'
}

const initialState = {
  user: {
    account: null,
    idToken: null
  }
}

const userReducer = (state, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      return { ...state, user: action.payload }
    case TYPES.LOGOUT:
      return action.payload
    case TYPES.SET_LOADING:
      return { ...state, loading: action.payload }
    default:
      return state
  }
}

const login = (dispatch) => async () => {
  const { account, idToken } = await msalAcquireTokenSilent()
  if (account && idToken) {
    dispatch({
      type: TYPES.LOGIN,
      payload: {
        account,
        idToken
      }
    })
  }
}

const logout = (dispatch) => async (homeAccountId) => {
  await msalLogout(homeAccountId)
  dispatch({
    type: TYPES.LOGOUT,
    payload: initialState
  })
}

export const setLoading = (dispatch) => async (boolean) => {
  dispatch({
    type: TYPES.SET_LOADING,
    payload: boolean
  })
}

export const { Provider, Context } = createDataContextHelper(
  userReducer,
  {
    login,
    logout,
    setLoading,
  },
  initialState
)
