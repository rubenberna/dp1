import createDataContextHelper from '../createContextHelper'

const TYPES = {
  SET_LOCALE: 'locale/setLocale'
}

const initialState = {
  locale: 'en'
}

const userReducer = (state, action) => {
  switch (action.type) {
    case TYPES.SET_LOCALE:
      return action.payload
    default:
      return state
  }
}

const setLocale = (dispatch) => (locale) => {
    dispatch({
      type: TYPES.SET_LOCALE,
      payload: {
        locale
      }
    })

}

export const { Provider, Context } = createDataContextHelper(
  userReducer,
  {
    setLocale
  },
  initialState
)
