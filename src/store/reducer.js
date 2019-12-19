import { RECEIVE_MESSAGE } from './actions'

const reducer = (state = {}, action) => {
  const { username, content } = action.payload
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return {
        ...state,
        [action.payload]: [
          ...state.action.payload,
          {
            username,
            content,
          },
        ],
      }
    default:
      return state
  }
}

export default reducer
