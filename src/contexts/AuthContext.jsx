import { createContext, useMemo, useReducer } from 'react'

export const AuthContext = createContext(null)

const INITIAL_STATE = {
  user: {
    name: 'Eder',
    class: 'CC4Q44',
  },
  token: 'R4ND0M_4sS_Tok3N',
}

const authContextReducer = (state, action) => {
  switch (action.type) {
    case 'set/user':
      return { ...state, user: action.payload }
    case 'set/token':
      return { ...state, token: action.payload }
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
