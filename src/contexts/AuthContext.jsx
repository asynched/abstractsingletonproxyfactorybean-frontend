import { createContext, useMemo, useReducer } from 'react'

export const AuthContext = createContext(null)

const INITIAL_STATE = {
  user: {
    firstName: null,
    lastName: null,
    username: null,
  },
}

const authContextReducer = (state, action) => {
  switch (action.type) {
    case 'set/user':
      return { ...state, user: action.payload }
    default:
      throw new Error(`Action type "${action.type}" is not defined`)
  }
}

export default function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authContextReducer, INITIAL_STATE)

  const memoizedContext = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return (
    <AuthContext.Provider value={memoizedContext}>
      {children}
    </AuthContext.Provider>
  )
}
